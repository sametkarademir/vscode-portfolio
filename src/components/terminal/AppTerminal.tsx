"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Terminal as TerminalIcon } from "lucide-react";

const PROMPT = "guest@portfolio:~$ ";

const SOCIAL_LINKS: { name: string; url: string }[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/samet-karademir-8988b6198/" },
  { name: "GitHub", url: "https://github.com/sametkarademir" },
  { name: "Medium", url: "https://medium.com/@sametkarademir244" },
];

const COMMANDS: { cmd: string; description: string }[] = [
  { cmd: "help", description: "Kullanılabilir komutları listele" },
  { cmd: "cd <dir>", description: "Sayfaya git (about, projects, experience, contact, home)" },
  { cmd: "ls", description: "Mevcut dizindeki dosya/sayfaları listele" },
  { cmd: "pwd", description: "Şu anki konumu göster" },
  { cmd: "about", description: "Kısa bio yazdır" },
  { cmd: "skills", description: "Teknolojileri listele" },
  { cmd: "contact --email", description: "E-posta adresini göster" },
  { cmd: "contact --linkedin", description: "LinkedIn profil linki" },
  { cmd: "contact --github", description: "GitHub profil linki" },
  { cmd: "contact --twitter", description: "Twitter/X linki" },
  { cmd: "contact --medium", description: "Medium profil linki" },
  { cmd: "social", description: "Tüm sosyal medya linklerini listele" },
  { cmd: "download cv", description: "CV indir" },
  { cmd: "clear", description: "Terminal temizle" },
];

const PATH_TO_TAB: Record<string, string> = {
  home: "home",
  header: "header",
  about: "about",
  projects: "projects",
  experience: "resume",
  contact: "contact",
  ".gitignore": "gitignore",
  ".env": "env",
  "package.json": "packagejson",
};

const TAB_TO_PATH: Record<string, string> = {
  home: "home",
  header: "header",
  about: "about",
  projects: "projects",
  resume: "experience",
  contact: "contact",
  gitignore: ".gitignore",
  env: ".env",
  packagejson: "package.json",
};

const LS_ENTRIES = [
  "Home.tsx",
  "Header.tsx",
  "About.tsx",
  "Projects.tsx",
  "Resume.tsx",
  "Contact.tsx",
  ".gitignore",
  ".env",
  "package.json",
];

function getCommandOutput(command: string): string {
  const c = command.trim().toLowerCase();
  if (c === "help") {
    return [
      "Kullanılabilir komutlar:",
      "",
      ...COMMANDS.map(({ cmd, description }) => `  ${cmd.padEnd(20)} ${description}`),
      "",
      'Komut yazıp Enter\'a basın. "help" ile tekrar listeyi görebilirsiniz.',
    ].join("\n");
  }
  if (c === "about") {
    return [
      "Samet Karademir — Senior Full Stack Developer",
      "",
      "Full-stack yazılım geliştirici. Backend mimarisi ve modern frontend deneyimleri.",
      ".NET, Go ve React ekosistemlerinde deneyimli; temiz mimari, DDD ve event-driven sistemler.",
      "Karmaşıklığı sade çözümlere dönüştürüp ölçeklenebilir uygulamalar inşa etmek önceliğim.",
    ].join("\n");
  }
  if (c === "skills") {
    return [
      "Backend:     .NET Core, C#, Go, ABP Framework, Node.js",
      "Frontend:    TypeScript, Next.js, React, Angular, Tailwind",
      "Cloud:       AWS Lambda, SQS, Docker, Kubernetes, GitHub Actions",
      "Databases:   PostgreSQL, MSSQL, MySQL, Couchbase, Redis",
      "Messaging:   RabbitMQ, Azure Service Bus, WebSocket",
      "Architecture: DDD, CQRS, Clean Architecture, Microservices, Event-Driven",
    ].join("\n");
  }
  if (c === "contact --email" || c === "contact -e" || c === "contact") {
    return "sametkarademir244@gmail.com";
  }
  if (c === "contact --linkedin") return SOCIAL_LINKS.find((s) => s.name === "LinkedIn")?.url ?? "";
  if (c === "contact --github") return SOCIAL_LINKS.find((s) => s.name === "GitHub")?.url ?? "";
  if (c === "contact --medium") return SOCIAL_LINKS.find((s) => s.name === "Medium")?.url ?? "";
  if (c === "social") {
    return SOCIAL_LINKS.map((s) => `${s.name.padEnd(12)} ${s.url}`).join("\n");
  }
  if (c === "download cv") {
    return "[CV indirme başlatıldı.]";
  }
  if (c === "clear" || c === "cls") {
    return "\0CLEAR";
  }
  if (command.trim() === "") return "";
  return `Komut bulunamadı: "${command.trim()}". "help" yazarak kullanılabilir komutları listeleyebilirsiniz.`;
}

interface AppTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const TERMINAL_DEFAULT_HEIGHT = 240;
const TERMINAL_MIN_HEIGHT = 120;
const TERMINAL_MAX_HEIGHT = 600;

const AppTerminal: React.FC<AppTerminalProps> = ({ isOpen, onClose, onToggle, activeTab, onNavigate }) => {
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: 'Terminal açıldı. "help" yazarak komutları görebilirsiniz.\n' },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [panelHeight, setPanelHeight] = useState(TERMINAL_DEFAULT_HEIGHT);
  const [isResizing, setIsResizing] = useState(false);
  const resizeStartRef = useRef({ y: 0, height: 0 });
  const outputEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isResizing) return;
    document.body.style.cursor = "ns-resize";
    document.body.style.userSelect = "none";
    const onMouseMove = (e: MouseEvent) => {
      const { y: startY, height: startHeight } = resizeStartRef.current;
      const delta = startY - e.clientY;
      const next = Math.min(TERMINAL_MAX_HEIGHT, Math.max(TERMINAL_MIN_HEIGHT, startHeight + delta));
      setPanelHeight(next);
    };
    const onMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    resizeStartRef.current = { y: e.clientY, height: panelHeight };
    setIsResizing(true);
  };

  const runCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    const trimmed = cmd.trim();
    const lower = trimmed.toLowerCase();
    let output: string | null = null;

    if (lower.startsWith("cd ")) {
      const arg = trimmed.slice(3).trim().toLowerCase();
      const tabId = PATH_TO_TAB[arg];
      if (tabId !== undefined) {
        onNavigate(tabId);
        const displayName = TAB_TO_PATH[tabId] ?? tabId;
        output = `Switched to ${displayName}.`;
      } else {
        output = `cd: no such file or directory: ${arg}. Try: home, about, projects, experience, contact, header`;
      }
    } else if (lower === "ls") {
      output = LS_ENTRIES.join("  ");
    } else if (lower === "pwd") {
      const segment = TAB_TO_PATH[activeTab] ?? activeTab;
      output = segment ? `~/portfolio/${segment}` : "~/portfolio";
    } else {
      output = getCommandOutput(cmd);
    }

    if (output === "\0CLEAR") {
      setHistory([]);
      setInput("");
      return;
    }
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex((prev) => prev + 1);
    setHistory((prev) => [...prev, { type: "input", text: PROMPT + cmd }]);
    if (output) {
      setHistory((prev) => [...prev, { type: "output", text: output }]);
    }
    if (lower === "download cv") {
      const a = document.createElement("a");
      a.href = "/cv/samet-karademir-cv.pdf";
      a.download = "samet-karademir-cv.pdf";
      a.click();
    }
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex = historyIndex === commandHistory.length ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= commandHistory.length) return;
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setInput(newIndex < commandHistory.length ? (commandHistory[newIndex] ?? "") : "");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setHistoryIndex(commandHistory.length);
  };

  return (
    <>
      {isOpen && (
        <div className="flex-shrink-0 flex flex-col border-t border-border-muted bg-bg-primary font-mono text-sm" style={{ height: panelHeight }}>
          <div
            role="separator"
            aria-label="Terminal yüksekliğini değiştir"
            onMouseDown={handleResizeStart}
            className="h-1.5 flex-shrink-0 cursor-ns-resize hover:bg-accent-green/20 active:bg-accent-green/30 transition-colors border-b border-border-muted select-none"
          />
          <div className="flex items-center justify-between px-3 py-1.5 bg-bg-secondary/80 border-b border-border-muted">
            <span className="text-[11px] text-text-muted">Terminal</span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-hover border border-transparent hover:border-border-default transition-colors"
              aria-label="Kapat"
            >
              <ChevronDown className="w-5 h-5 rotate-180" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 text-text-primary">
            {history.map((item, i) => (
              <div key={i} className="mb-1">
                {item.type === "input" ? (
                  <div className="text-accent-green">
                    {item.text}
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap break-words text-text-secondary text-[12px] leading-relaxed">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center gap-1 mt-1">
              <span className="text-accent-green shrink-0">{PROMPT}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-text-primary text-[12px]"
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal komutu"
              />
            </form>
            <div ref={outputEndRef} />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onToggle}
        className="h-8 flex-shrink-0 w-full flex items-center gap-2 px-3 bg-bg-secondary border-t border-border-muted hover:bg-bg-hover/50 transition-colors text-left"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Terminali kapat" : "Terminali aç"}
      >
        <span className="p-1 rounded-md bg-bg-hover/50 border border-border-muted/50">
          <ChevronDown
            className={`w-5 h-5 text-text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
        <TerminalIcon className="w-4 h-4 text-accent-green" />
        <span className="text-[11px] font-medium text-text-secondary">TERMINAL</span>
      </button>
    </>
  );
};

export default AppTerminal;

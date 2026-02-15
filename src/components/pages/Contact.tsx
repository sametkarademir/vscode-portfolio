"use client";

import React, { useRef, useState, useEffect } from "react";
import { Mail } from "lucide-react";

const command = "curl -X GET /api/v1/contact";

const contactData = {
  status: "Available_for_Hire",
  email: "sametkarademir244@gmail.com",
  location: "Istanbul, Türkiye",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/samet-karademir-8988b6198/" },
    { name: "GitHub", url: "https://github.com/sametkarademir" },
    { name: "Medium", url: "https://medium.com/@sametkarademir244" },
  ],
  message: "Kahve içip projeler hakkında konuşalım!",
};

const jsonLines = [
  "{",
  `  "status": "${contactData.status}",`,
  `  "email": "${contactData.email}",`,
  `  "location": "${contactData.location}",`,
  `  "socials": [${contactData.socials.map((s) => `"${s.name}"`).join(", ")}],`,
  `  "message": "${contactData.message}"`,
  "}",
];

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [typedCommand, setTypedCommand] = useState("");
  const [showJson, setShowJson] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setHasAnimated(true);
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let commandIndex = 0;
    const commandInterval = setInterval(() => {
      if (commandIndex < command.length) {
        setTypedCommand(command.slice(0, commandIndex + 1));
        commandIndex++;
      } else {
        clearInterval(commandInterval);
        setTimeout(() => {
          setShowJson(true);
          let lineIndex = 0;
          const jsonInterval = setInterval(() => {
            if (lineIndex < jsonLines.length) {
              setVisibleLines(lineIndex + 1);
              lineIndex++;
            } else {
              clearInterval(jsonInterval);
            }
          }, 150);
        }, 400);
      }
    }, 40);

    return () => clearInterval(commandInterval);
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [hasAnimated]);

  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 pb-40 w-full">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-green/10">
              <Mail className="w-5 h-5 text-accent-green" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              İletişim
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-default to-transparent" />
        </div>

        <div ref={ref} className="w-full rounded-xl border border-border-muted overflow-hidden bg-bg-secondary shadow-xl">
          <div className="flex items-center justify-between border-b border-border-muted bg-bg-tertiary/80 px-4 py-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full border border-red-500/40 bg-red-500/20" />
              <div className="h-3 w-3 rounded-full border border-accent-yellow/40 bg-accent-yellow/20" />
              <div className="h-3 w-3 rounded-full border border-accent-green/40 bg-accent-green/20" />
            </div>
            <span className="font-mono text-[10px] tracking-tight text-text-muted">
              bash — server_v1.0.4
            </span>
          </div>

          <div className="p-6 font-mono text-sm sm:text-base">
            <div className="mb-4 flex items-center flex-wrap">
              <span className="text-accent-green">guest@portfolio:</span>
              <span className="text-accent-blue">~</span>
              <span className="text-text-primary">$ </span>
              <span className="text-text-primary">{typedCommand}</span>
              {showCursor && typedCommand.length < command.length && (
                <span className="ml-1 inline-block h-5 w-2 flex-shrink-0 bg-accent-blue" />
              )}
            </div>

            {showJson && (
              <div className="space-y-2 rounded border border-border-muted bg-bg-primary/60 p-6 text-text-secondary">
                {jsonLines.slice(0, visibleLines).map((line, index) => {
                  if (line === "{" || line === "}") {
                    return (
                      <p key={index} className="text-accent-pink">
                        {line}
                      </p>
                    );
                  }
                  if (line.includes('"status"')) {
                    return (
                      <p
                        key={index}
                        className="pl-6 font-semibold underline decoration-accent-blue underline-offset-2"
                      >
                        "status": "{contactData.status}",
                      </p>
                    );
                  }
                  if (line.includes('"email"')) {
                    return (
                      <p key={index} className="pl-6">
                        "email":{" "}
                        <span className="text-accent-green">
                          "{contactData.email}"
                        </span>
                        ,
                      </p>
                    );
                  }
                  if (line.includes('"location"')) {
                    return (
                      <p key={index} className="pl-6">
                        "location":{" "}
                        <span className="text-accent-green">
                          "{contactData.location}"
                        </span>
                        ,
                      </p>
                    );
                  }
                  if (line.includes('"socials"')) {
                    return (
                      <p key={index} className="pl-6">
                        "socials": [
                        {contactData.socials.map((s, i) => (
                          <span key={s.name}>
                            {i > 0 && ", "}
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-cyan hover:underline focus:outline-none focus:underline"
                            >
                              "{s.name}"
                            </a>
                          </span>
                        ))}
                        ],
                      </p>
                    );
                  }
                  if (line.includes('"message"')) {
                    return (
                      <p key={index} className="pl-6">
                        "message":{" "}
                        <span className="text-accent-green">
                          "{contactData.message}"
                        </span>
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {showJson && visibleLines === jsonLines.length && (
              <div className="mt-6 flex items-center flex-wrap">
                <span className="text-accent-green">guest@portfolio:</span>
                <span className="text-accent-blue">~</span>
                <span className="text-text-primary">$ </span>
                <span className="text-text-muted">
                  ping -c 1 future_teammate
                </span>
                {showCursor && (
                  <span className="ml-2 inline-block h-5 w-2 flex-shrink-0 animate-pulse bg-accent-blue" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

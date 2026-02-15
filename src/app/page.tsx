"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import NavBar from "@/components/navbar/NavBar";
import Header from "@/components/pages/Header";
import About from "@/components/pages/About";
import Projects from "@/components/pages/Projects";
import Resume from "@/components/pages/Resume";
import Contact from "@/components/pages/Contact";
import MobileMenu from "@/components/sidebar/MobileMenu";
import FileView from "@/components/FileView";
import AppTerminal from "@/components/terminal/AppTerminal";
import { GITIGNORE_CONTENT, ENV_CONTENT, PACKAGE_JSON_CONTENT } from "@/constants/content";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [visibleTabs, setVisibleTabs] = useState<string[]>(["home"]);
  const [terminalOpen, setTerminalOpen] = useState(true);

  const setActiveTabAndShow = (tab: string) => {
    setActiveTab(tab);
    setVisibleTabs((prev) => (prev.includes(tab) ? prev : [...prev, tab]));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      <div className="hidden lg:block w-[260px] flex-shrink-0">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTabAndShow} />
      </div>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <MobileMenu activeTab={activeTab} setActiveTab={setActiveTabAndShow} />
        <div className="hidden lg:block h-[42px] flex-shrink-0">
          <NavBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            visibleTabs={visibleTabs}
            setVisibleTabs={setVisibleTabs}
          />
        </div>

        <main className="flex-1 overflow-y-auto">
          {activeTab === "home" && (
            <div>
              <Header />
              <About />
              <Resume />
              <Projects />
              <Contact />
            </div>
          )}
          {activeTab === "header" && <Header />}
          {activeTab === "about" && <About />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "resume" && <Resume />}
          {activeTab === "contact" && <Contact />}
          {activeTab === "gitignore" && (
            <FileView
              filename=".gitignore"
              content={GITIGNORE_CONTENT}
            />
          )}
          {activeTab === "env" && (
            <FileView
              filename=".env"
              content={ENV_CONTENT}
            />
          )}
          {activeTab === "packagejson" && (
            <FileView
              filename="package.json"
              content={PACKAGE_JSON_CONTENT}
            />
          )}
        </main>

        <AppTerminal
          isOpen={terminalOpen}
          onToggle={() => setTerminalOpen((prev) => !prev)}
          onClose={() => setTerminalOpen(false)}
          activeTab={activeTab}
          onNavigate={setActiveTabAndShow}
        />

        <div className="h-6 flex-shrink-0 bg-bg-secondary border-t border-border-muted flex items-center px-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-accent-green" />
              <span className="text-[11px] text-text-muted">Ready</span>
            </div>
            <span className="text-[11px] text-text-muted hidden sm:inline">
              main*
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-text-muted hidden sm:inline">
              TypeScript React
            </span>
            <span className="text-[11px] text-text-muted">UTF-8</span>
            <span className="text-[11px] text-text-muted hidden sm:inline">
              Ln 1, Col 1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

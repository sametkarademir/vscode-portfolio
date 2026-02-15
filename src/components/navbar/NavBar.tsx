"use client";

import React from "react";
import { X, FileCode2, FileText } from "lucide-react";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  visibleTabs: string[];
  setVisibleTabs: React.Dispatch<React.SetStateAction<string[]>>;
}

const tabs = [
  { id: "home", label: "Home.tsx", color: "text-accent-cyan" },
  { id: "header", label: "Header.tsx", color: "text-accent-orange", closable: true },
  { id: "gitignore", label: ".gitignore", color: "text-text-muted", closable: true },
  { id: "env", label: ".env", color: "text-accent-green", closable: true },
  { id: "readme", label: "README.md", color: "text-accent-blue", closable: true },
  { id: "packagejson", label: "package.json", color: "text-accent-orange", closable: true },
  { id: "about", label: "About.tsx", color: "text-accent-blue", closable: true },
  { id: "projects", label: "Projects.tsx", color: "text-accent-pink", closable: true },
  { id: "resume", label: "Resume.tsx", color: "text-accent-yellow", closable: true },
  { id: "contact", label: "Contact.tsx", color: "text-accent-green", closable: true },
];

const CONFIG_FILE_IDS = ["gitignore", "env", "readme", "packagejson"];

function getTabIcon(tab: (typeof tabs)[number]) {
  const iconClass = `w-4 h-4 flex-shrink-0 ${tab.color}`;
  const isConfigFile = CONFIG_FILE_IDS.includes(tab.id);
  return isConfigFile ? (
    <FileText className={iconClass} />
  ) : (
    <FileCode2 className={iconClass} />
  );
}

const NavBar: React.FC<NavBarProps> = ({
  activeTab,
  setActiveTab,
  visibleTabs,
  setVisibleTabs,
}) => {
  const handleClose = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    setVisibleTabs((prev) => prev.filter((id) => id !== tabId));
    if (activeTab === tabId) {
      setActiveTab("home");
    }
  };

  return (
    <div className="flex items-end h-full bg-tab-bg border-b border-border-muted overflow-x-auto">
      {tabs.map((tab) => {
        if (!visibleTabs.includes(tab.id)) return null;

        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`group relative flex items-center gap-2 px-4 h-[42px] text-sm font-medium transition-all duration-150 border-r border-border-muted min-w-fit whitespace-nowrap ${
              isActive
                ? "bg-bg-primary text-text-primary"
                : "bg-tab-bg text-text-muted hover:text-text-secondary hover:bg-bg-secondary"
            }`}
          >
            {isActive && (
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-blue rounded-b-sm" />
            )}

            {getTabIcon(tab)}
            <span>{tab.label}</span>

            {tab.closable && (
              <span
                onClick={(e) => handleClose(e, tab.id)}
                className="ml-1 p-0.5 rounded opacity-0 group-hover:opacity-100 hover:bg-bg-hover transition-all duration-150"
              >
                <X className="w-3.5 h-3.5" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default NavBar;

"use client";

import React, { useState } from "react";
import { Menu, X, FileText, FileCode2 } from "lucide-react";
import RootFileItem from "@/components/sidebar/RootFileItem";
import SidebarFolder from "@/components/sidebar/SidebarFolder";

interface MobileMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const componentItems = [
  { name: "Header.tsx", tab: "header", color: "text-accent-orange" },
  { name: "About.tsx", tab: "about", color: "text-accent-blue" },
  { name: "Projects.tsx", tab: "projects", color: "text-accent-pink" },
  { name: "Resume.tsx", tab: "resume", color: "text-accent-yellow" },
  { name: "Contact.tsx", tab: "contact", color: "text-accent-green" },
];

const rootFiles = [
  { filename: ".gitignore", tabId: "gitignore", iconColor: "text-text-muted" },
  { filename: ".env", tabId: "env", iconColor: "text-accent-green" },
  { filename: "README.md", tabId: "readme", iconColor: "text-accent-blue" },
  { filename: "package.json", tabId: "packagejson", iconColor: "text-accent-orange" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary border-b border-border-muted">
        <span className="text-sm font-semibold text-text-secondary tracking-wide">
          Portfolio
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-text-secondary hover:bg-bg-hover transition-colors duration-150"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-bg-secondary border-b border-border-muted ${
          isOpen ? "max-h-[70vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <div className="px-4 py-3">
          <div className="text-sm font-semibold text-text-secondary py-1">
            Portfolio
          </div>

          <SidebarFolder
            label="public"
            iconColor="text-accent-green"
            buttonClassName="mt-1"
          >
            <div className="ml-6">
              <a
                href="/cv/samet-karademir-cv.pdf"
                download="samet-karademir-cv.pdf"
                className="flex items-center w-full px-2 py-1.5 text-sm text-text-secondary hover:bg-bg-hover/40 rounded-md transition-colors duration-150 group"
              >
                <FileText className="w-4 h-4 mr-2 flex-shrink-0 text-accent-orange" />
                <span className="truncate">samet-karademir-cv.pdf</span>
              </a>
            </div>
          </SidebarFolder>

          <SidebarFolder
            label="src"
            iconColor="text-accent-cyan"
            buttonClassName="mt-1"
            defaultOpen
          >
            <div className="ml-3">
              <SidebarFolder
                label="pages"
                iconColor="text-accent-blue"
                defaultOpen
              >
                <div className="ml-6">
                  <RootFileItem
                    filename="Home.tsx"
                    tabId="home"
                    activeTab={activeTab}
                    setActiveTab={handleTabChange}
                    iconColor="text-accent-cyan"
                    Icon={FileCode2}
                  />
                </div>
              </SidebarFolder>

              <SidebarFolder
                label="components"
                iconColor="text-accent-purple"
                buttonClassName="mt-1"
              >
                <div className="ml-6">
                  {componentItems.map((item) => (
                    <RootFileItem
                      key={item.tab}
                      filename={item.name}
                      tabId={item.tab}
                      activeTab={activeTab}
                      setActiveTab={handleTabChange}
                      iconColor={item.color}
                      Icon={FileCode2}
                    />
                  ))}
                </div>
              </SidebarFolder>
            </div>
          </SidebarFolder>

          <div className="mt-1">
            {rootFiles.map((file) => (
              <RootFileItem
                key={file.tabId}
                filename={file.filename}
                tabId={file.tabId}
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                iconColor={file.iconColor}
                alignIconWithFolder
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

"use client";

import React from "react";
import { FileCode2, FileText, Image } from "lucide-react";
import RootFileItem from "@/components/sidebar/RootFileItem";
import SidebarFolder from "@/components/sidebar/SidebarFolder";
import SidebarSocialLinks from "@/components/sidebar/SidebarSocialLinks";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const fileItems = [
  { name: "Header.tsx", tab: "header", color: "text-accent-orange" },
  { name: "About.tsx", tab: "about", color: "text-accent-blue" },
  { name: "Projects.tsx", tab: "projects", color: "text-accent-pink" },
  { name: "Resume.tsx", tab: "resume", color: "text-accent-yellow" },
  { name: "Contact.tsx", tab: "contact", color: "text-accent-green" },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const renderPublicFolderContent = () => (
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
  );

  return (
    <aside className="flex flex-col h-full bg-sidebar-bg border-r border-border-muted">
      <div className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-text-muted select-none">
        Explorer
      </div>

      <div className="flex-1 overflow-y-auto px-1">
        <SidebarFolder
          label="Portfolio"
          iconColor="text-accent-yellow"
          buttonClassName="font-semibold"
          defaultOpen
        >
          <div className="ml-3">
            <SidebarFolder
              label="public"
              iconColor="text-accent-green"
              buttonClassName="mt-1"
            >
              {renderPublicFolderContent()}
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
                      setActiveTab={setActiveTab}
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
                    {fileItems.map((file) => (
                      <RootFileItem
                        key={file.tab}
                        filename={file.name}
                        tabId={file.tab}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        iconColor={file.color}
                        Icon={FileCode2}
                      />
                    ))}
                  </div>
                </SidebarFolder>
              </div>
            </SidebarFolder>

            <div className="mt-1">
              <RootFileItem
                filename=".gitignore"
                tabId="gitignore"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                iconColor="text-text-muted"
                alignIconWithFolder
              />
              <RootFileItem
                filename=".env"
                tabId="env"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                iconColor="text-accent-green"
                alignIconWithFolder
              />
              <RootFileItem
                filename="package.json"
                tabId="packagejson"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                iconColor="text-accent-orange"
                alignIconWithFolder
              />
            </div>
          </div>
        </SidebarFolder>
      </div>

      <SidebarSocialLinks />
    </aside>
  );
};

export default Sidebar;

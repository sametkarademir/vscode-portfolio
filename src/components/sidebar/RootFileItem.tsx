"use client";

import React from "react";
import { FileText, type LucideIcon } from "lucide-react";

interface RootFileItemProps {
  filename: string;
  tabId: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  iconColor?: string;
  Icon?: LucideIcon;
  alignIconWithFolder?: boolean;
}

const RootFileItem: React.FC<RootFileItemProps> = ({
  filename,
  tabId,
  activeTab,
  setActiveTab,
  iconColor = "text-text-muted",
  Icon = FileText,
  alignIconWithFolder = false,
}) => {
  const isActive = activeTab === tabId;

  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center w-full px-2 py-1.5 text-sm rounded-md transition-all duration-150 group ${
        isActive
          ? "bg-bg-hover/70 text-text-primary"
          : "text-text-secondary hover:bg-bg-hover/40 hover:text-text-primary"
      }`}
    >
      {alignIconWithFolder && (
        <span className="w-4 h-4 mr-1 flex-shrink-0" aria-hidden />
      )}
      <Icon className={`w-4 h-4 mr-2 flex-shrink-0 ${iconColor}`} />
      <span className="truncate">{filename}</span>
      {isActive && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-blue" />
      )}
    </button>
  );
};

export default RootFileItem;

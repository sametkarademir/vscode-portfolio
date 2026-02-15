"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, FolderOpen, Folder } from "lucide-react";

export interface SidebarFolderProps {
  label: string;
  iconColor: string;
  buttonClassName?: string;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

const baseButtonClass =
  "flex items-center w-full px-2 py-1.5 text-sm text-text-secondary hover:bg-bg-hover/50 rounded-md transition-colors duration-150";

const SidebarFolder: React.FC<SidebarFolderProps> = ({
  label,
  iconColor,
  buttonClassName = "",
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${baseButtonClass} ${buttonClassName}`.trim()}
      >
        {isOpen ? (
          <ChevronDown className="w-4 h-4 mr-1 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 mr-1 flex-shrink-0" />
        )}
        {isOpen ? (
          <FolderOpen
            className={`w-4 h-4 mr-2 flex-shrink-0 ${iconColor}`}
          />
        ) : (
          <Folder className={`w-4 h-4 mr-2 flex-shrink-0 ${iconColor}`} />
        )}
        <span className="truncate">{label}</span>
      </button>
      {isOpen && children}
    </>
  );
};

export default SidebarFolder;

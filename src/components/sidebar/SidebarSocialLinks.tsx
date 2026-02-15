"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const MediumIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const SidebarSocialLinks: React.FC = () => (
  <div className="p-4 border-t border-border-muted">
    <a
      href="https://github.com/sametkarademir"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-3 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-bg-hover/50 hover:text-text-primary transition-all duration-200"
      aria-label="GitHub"
    >
      <Github className="w-4 h-4 flex-shrink-0" />
      <span>GitHub</span>
    </a>
    <div className="flex items-center justify-around">
      <a
        href="https://www.linkedin.com/in/samet-karademir-8988b6198/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-text-muted hover:text-accent-blue hover:bg-bg-hover/50 transition-all duration-200 hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://medium.com/@sametkarademir244"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-text-muted hover:text-accent-purple hover:bg-bg-hover/50 transition-all duration-200 hover:scale-110"
        aria-label="Medium"
      >
        <MediumIcon />
      </a>
      <a
        href="mailto:sametkarademir244@gmail.com"
        className="p-2 rounded-lg text-text-muted hover:text-accent-green hover:bg-bg-hover/50 transition-all duration-200 hover:scale-110"
        aria-label="E-posta"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  </div>
);

export default SidebarSocialLinks;

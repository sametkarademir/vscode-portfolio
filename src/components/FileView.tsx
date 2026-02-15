"use client";

import React, { useState, useRef, useEffect } from "react";
import { tokenizeJsonLine } from "@/libs/jsonSyntax";

interface FileViewProps {
  filename: string;
  content: string;
}

const LINE_HEIGHT_CLASS = "leading-7";
const LINE_HEIGHT_PX = 28;

const FileView: React.FC<FileViewProps> = ({
  filename,
  content,
}) => {
  const [userInput, setUserInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const staticLines = content.trim().split("\n");
  const userLineCount = userInput ? userInput.split("\n").length : 1;
  const totalStatic = staticLines.length;
  const totalLines = totalStatic + userLineCount;
  const isJson = filename.toLowerCase().endsWith(".json");

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="flex h-full min-h-[calc(100vh-120px)] flex-col bg-bg-primary">
      <div className="flex-shrink-0 border-b border-border-muted bg-bg-secondary px-4 py-2">
        <span className="font-mono text-sm text-text-secondary">{filename}</span>
      </div>

      <div className="flex flex-1 overflow-auto font-mono text-sm">
        <div
          className="flex-shrink-0 select-none border-r border-border-muted bg-bg-secondary/50 py-4 px-4 text-right text-text-muted"
          aria-hidden
        >
          {Array.from({ length: totalLines }, (_, i) => (
            <div key={i} className={LINE_HEIGHT_CLASS}>
              {i + 1}
            </div>
          ))}
        </div>

        <div className="min-w-0 flex-1 py-4 pl-4">
          <pre className="text-text-primary">
            {staticLines.map((line, i) => (
              <div key={i} className={LINE_HEIGHT_CLASS}>
                {isJson ? (
                  tokenizeJsonLine(line || " ").map((seg, j) => (
                    <span key={j} className={seg.className}>
                      {seg.text}
                    </span>
                  ))
                ) : (
                  line || " "
                )}
              </div>
            ))}
          </pre>
          <div className="relative flex items-start">
            <textarea
              ref={textareaRef}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="min-h-[28px] w-full flex-1 resize-none border-0 bg-transparent py-0 pl-0 pr-8 font-mono text-sm leading-7 text-text-primary outline-none placeholder:text-text-muted"
              placeholder=" "
              rows={1}
              spellCheck={false}
              style={{
                minHeight: LINE_HEIGHT_PX,
                height: Math.max(LINE_HEIGHT_PX, (userInput.split("\n").length || 1) * LINE_HEIGHT_PX),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileView;

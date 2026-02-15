"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownSplitViewProps {
  filename: string;
  content: string;
}

const MarkdownSplitView: React.FC<MarkdownSplitViewProps> = ({
  filename,
  content,
}) => {
  const lines = content.split("\n");

  return (
    <div className="flex h-full min-h-[calc(100vh-120px)] flex-col bg-bg-primary">
      <div className="flex-shrink-0 border-b border-border-muted bg-bg-secondary px-4 py-2">
        <span className="font-mono text-sm text-text-secondary">{filename}</span>
      </div>

      <div className="flex flex-1 min-h-0">
        <div className="flex w-1/2 flex-col border-r border-border-muted">
          <div className="flex-shrink-0 border-b border-border-muted bg-bg-secondary/50 px-3 py-1.5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
              Markdown
            </span>
          </div>
          <div className="flex flex-1 overflow-auto font-mono text-sm">
            <div className="flex-shrink-0 select-none border-r border-border-muted bg-bg-secondary/30 py-4 px-4 text-right text-text-muted">
              {lines.map((_, i) => (
                <div key={i} className="leading-7">
                  {i + 1}
                </div>
              ))}
            </div>
            <pre className="min-w-0 flex-1 py-4 pl-4 text-text-primary">
              {lines.map((line, i) => (
                <div key={i} className="leading-7">
                  {line || " "}
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex-shrink-0 border-b border-border-muted bg-bg-secondary/50 px-3 py-1.5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
              Önizleme
            </span>
          </div>
          <div className="flex-1 overflow-auto p-6 text-text-secondary">
            <article className="markdown-preview space-y-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-text-primary [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-primary [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-primary [&_p]:leading-relaxed [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-1 [&_ol]:list-inside [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-text-primary [&_a]:text-accent-blue [&_a]:underline [&_a:hover]:no-underline [&_blockquote]:border-l-4 [&_blockquote]:border-accent-blue [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-bg-hover [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-accent-cyan [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border-muted [&_pre]:bg-bg-secondary [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border-muted [&_th]:bg-bg-secondary [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:border [&_td]:border-border-muted [&_td]:px-3 [&_td]:py-2 [&_hr]:border-border-muted">
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:underline"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={src as string}
                      alt={alt ?? ""}
                      className="inline-block max-h-6 align-middle"
                    />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownSplitView;

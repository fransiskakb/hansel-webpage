// Minimal Markdown renderer for the local-data blog posts.
// Handles the shape our scraper produces: paragraphs separated by blank lines,
// **bold**, *italics*, [text](url), and a few section markers. Not a general
// CommonMark implementation — keep it dependency-free and small.

import * as React from "react";
import Link from "next/link";

type InlineNode = string | React.ReactElement;

function renderInline(text: string, keyBase: string): InlineNode[] {
  // Tokenize in this order: bold → italic → link.
  const nodes: InlineNode[] = [];
  let i = 0;
  let buf = "";
  let kCounter = 0;
  const flush = () => {
    if (buf) {
      nodes.push(buf);
      buf = "";
    }
  };

  while (i < text.length) {
    // Bold: **...**
    const boldStart = text.indexOf("**", i);
    if (boldStart !== -1 && (boldStart === i || boldStart < i + 200)) {
      const boldEnd = text.indexOf("**", boldStart + 2);
      if (boldEnd !== -1) {
        buf += text.slice(i, boldStart);
        flush();
        nodes.push(
          <strong key={`${keyBase}-b-${kCounter++}`}>
            {text.slice(boldStart + 2, boldEnd)}
          </strong>,
        );
        i = boldEnd + 2;
        continue;
      }
    }
    // Italic: *...*  (single asterisks, not part of **)
    const italStart = text.indexOf("*", i);
    if (
      italStart !== -1 &&
      text[italStart + 1] !== "*" &&
      text[italStart - 1] !== "*"
    ) {
      const italEnd = text.indexOf("*", italStart + 1);
      if (italEnd !== -1 && text[italEnd + 1] !== "*") {
        buf += text.slice(i, italStart);
        flush();
        nodes.push(
          <em key={`${keyBase}-i-${kCounter++}`}>
            {text.slice(italStart + 1, italEnd)}
          </em>,
        );
        i = italEnd + 1;
        continue;
      }
    }
    // Link: [text](url)
    const linkStart = text.indexOf("[", i);
    if (linkStart !== -1) {
      const linkTextEnd = text.indexOf("]", linkStart);
      if (linkTextEnd !== -1 && text[linkTextEnd + 1] === "(") {
        const urlEnd = text.indexOf(")", linkTextEnd + 2);
        if (urlEnd !== -1) {
          buf += text.slice(i, linkStart);
          flush();
          const linkText = text.slice(linkStart + 1, linkTextEnd);
          const url = text.slice(linkTextEnd + 2, urlEnd);
          const isExternal = /^https?:\/\//.test(url);
          nodes.push(
            isExternal ? (
              <a
                key={`${keyBase}-l-${kCounter++}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                {linkText}
              </a>
            ) : (
              <Link
                key={`${keyBase}-l-${kCounter++}`}
                href={url}
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                {linkText}
              </Link>
            ),
          );
          i = urlEnd + 1;
          continue;
        }
      }
    }
    // No more markers — drain
    buf += text[i];
    i += 1;
  }
  flush();
  return nodes;
}

export function MarkdownBody({ markdown }: { markdown: string }) {
  const paragraphs = markdown.split(/\n{2,}/);
  return (
    <div className="prose-body">
      {paragraphs.map((p, idx) => {
        const trimmed = p.trim();
        if (!trimmed) return null;

        // Headings
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="display-3 mt-12 mb-3 text-balance"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-xl font-display mt-8 mb-2">
              {trimmed.slice(4)}
            </h3>
          );
        }
        // Bullet list (lines starting with "- ")
        if (trimmed.split("\n").every((line) => line.trim().startsWith("- "))) {
          return (
            <ul
              key={idx}
              className="mt-4 list-disc list-outside ml-6 space-y-2 text-foreground/90"
            >
              {trimmed.split("\n").map((line, i) => (
                <li key={i}>{renderInline(line.trim().slice(2), `${idx}-${i}`)}</li>
              ))}
            </ul>
          );
        }
        // Horizontal divider (5+ underscores on their own)
        if (/^_{5,}$/.test(trimmed)) {
          return <hr key={idx} className="my-10 border-border" />;
        }
        return (
          <p
            key={idx}
            className="mt-4 leading-relaxed text-foreground/90"
          >
            {renderInline(trimmed, `${idx}`)}
          </p>
        );
      })}
    </div>
  );
}

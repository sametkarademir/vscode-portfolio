export function tokenizeJsonLine(
  line: string
): { text: string; className: string }[] {
  const segments: { text: string; className: string }[] = [];
  const keyClass = "text-accent-cyan";
  const stringClass = "text-accent-green";
  const numberClass = "text-accent-orange";
  const keywordClass = "text-accent-purple";
  const defaultClass = "text-text-primary";

  let remaining = line;
  while (remaining.length > 0) {
    const spaceMatch = remaining.match(/^\s+/);
    if (spaceMatch) {
      segments.push({ text: spaceMatch[0], className: defaultClass });
      remaining = remaining.slice(spaceMatch[0].length);
      continue;
    }
    const keyMatch = remaining.match(/^"([^"\\]*(?:\\.[^"\\]*)*)"\s*:/);
    if (keyMatch) {
      segments.push({ text: '"', className: defaultClass });
      segments.push({ text: keyMatch[1], className: keyClass });
      segments.push({
        text: '"' + keyMatch[0].slice(1 + keyMatch[1].length + 1),
        className: defaultClass,
      });
      remaining = remaining.slice(keyMatch[0].length);
      continue;
    }
    const stringMatch = remaining.match(/^"([^"\\]*(?:\\.[^"\\]*)*)"/);
    if (stringMatch) {
      segments.push({ text: '"', className: defaultClass });
      segments.push({ text: stringMatch[1], className: stringClass });
      segments.push({ text: '"', className: defaultClass });
      remaining = remaining.slice(stringMatch[0].length);
      continue;
    }
    const numMatch = remaining.match(/^-?\d+\.?\d*([eE][+-]?\d+)?/);
    if (numMatch) {
      segments.push({ text: numMatch[0], className: numberClass });
      remaining = remaining.slice(numMatch[0].length);
      continue;
    }
    const kwMatch = remaining.match(/^(true|false|null)\b/);
    if (kwMatch) {
      segments.push({ text: kwMatch[1], className: keywordClass });
      remaining = remaining.slice(kwMatch[1].length);
      continue;
    }

    segments.push({ text: remaining[0], className: defaultClass });
    remaining = remaining.slice(1);
  }
  return segments;
}

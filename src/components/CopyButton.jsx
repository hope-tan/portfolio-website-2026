import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] transition hover:scale-[1.02] card-hover hover:shadow-[0_0_10px_hsl(var(--primary))] ml-auto hidden lg:flex"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
};

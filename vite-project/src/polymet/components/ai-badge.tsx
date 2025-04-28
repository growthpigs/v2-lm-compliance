import { SparklesIcon } from "lucide-react";

interface AIBadgeProps {
  className?: string;
}

export default function AIBadge({ className = "" }: AIBadgeProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 gap-1.5">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
          NEW:
        </span>
        <div className="flex items-center gap-1">
          <div className="bg-yellow-400/90 rounded-full h-4 w-4 flex items-center justify-center">
            <SparklesIcon className="h-3 w-3 text-gray-900" />
          </div>
          <span className="text-xs font-medium text-white">
            AI Content & Plagiarism Check
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

interface ComplianceScoreDisplayProps {
  score: number;
  className?: string;
}

export default function ComplianceScoreDisplay({
  score,
  className = "",
}: ComplianceScoreDisplayProps) {
  // Determine color based on score
  const getScoreColor = () => {
    if (score < 40) return "text-red-500";
    if (score < 70) return "text-amber-500";
    return "text-green-500";
  };

  return (
    <div className={`flex items-baseline ${className}`}>
      <span className={`text-5xl font-bold ${getScoreColor()}`}>{score}%</span>
      <span className="ml-2 text-xl text-gray-600 dark:text-gray-300">
        Compliance Score
      </span>
    </div>
  );
}

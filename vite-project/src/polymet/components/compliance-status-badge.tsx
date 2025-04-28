import React from "react";
import { XIcon, CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ComplianceStatusBadgeProps {
  status: "compliant" | "non-compliant" | "partially-compliant";
  issuesCount?: number;
  className?: string;
}

export default function ComplianceStatusBadge({
  status,
  issuesCount,
  className = "",
}: ComplianceStatusBadgeProps) {
  // Determine badge styling based on status
  const getBadgeStyles = () => {
    switch (status) {
      case "compliant":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "partially-compliant":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "non-compliant":
      default:
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    }
  };

  // Get appropriate icon based on status
  const getIcon = () => {
    switch (status) {
      case "compliant":
        return <CheckIcon className="h-5 w-5 mr-1" />;
      default:
        return <XIcon className="h-5 w-5 mr-1" />;
    }
  };

  // Format status text for display
  const getStatusText = () => {
    return status
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");
  };

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <Badge
        variant="outline"
        className={`flex items-center px-3 py-1.5 text-sm font-medium rounded-full ${getBadgeStyles()}`}
      >
        {getIcon()}
        {getStatusText()}
      </Badge>
      {issuesCount !== undefined && status !== "compliant" && (
        <span className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
          {issuesCount} compliance {issuesCount === 1 ? "issue" : "issues"}{" "}
          identified
        </span>
      )}
    </div>
  );
}

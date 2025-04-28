import React from "react";
import { Button } from "@/components/ui/button";
import {
  AlertCircleIcon,
  AlertOctagonIcon,
  AlertTriangleIcon,
} from "lucide-react";

interface RequiredActionItemProps {
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  onGetHelp?: () => void;
  className?: string;
}

export default function RequiredActionItem({
  title,
  description,
  severity,
  onGetHelp,
  className = "",
}: RequiredActionItemProps) {
  // Define styling based on severity
  const getSeverityConfig = () => {
    switch (severity) {
      case "high":
        return {
          icon: (
            <AlertOctagonIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
          ),

          borderColor: "border-l-red-600 dark:border-l-red-500",
        };
      case "medium":
        return {
          icon: (
            <AlertTriangleIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          ),

          borderColor: "border-l-amber-600 dark:border-l-amber-500",
        };
      case "low":
      default:
        return {
          icon: (
            <AlertCircleIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          ),

          borderColor: "border-l-blue-600 dark:border-l-blue-500",
        };
    }
  };

  const { icon, borderColor } = getSeverityConfig();

  return (
    <div
      className={`flex items-start p-4 border-l-4 bg-white dark:bg-gray-800 rounded-md shadow-sm ${borderColor} ${className}`}
    >
      <div className="mr-4">{icon}</div>
      <div className="flex-1">
        <h4 className="text-base font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onGetHelp}
        className="whitespace-nowrap ml-4"
      >
        Get help
      </Button>
    </div>
  );
}

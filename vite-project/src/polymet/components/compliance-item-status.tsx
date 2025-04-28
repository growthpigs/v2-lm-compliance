import React from "react";
import {
  CheckIcon,
  XIcon,
  AlertCircleIcon,
  HelpCircleIcon,
} from "lucide-react";

interface ComplianceItemStatusProps {
  status: "present" | "missing" | "specified" | "warning";
  className?: string;
}

export default function ComplianceItemStatus({
  status,
  className = "",
}: ComplianceItemStatusProps) {
  // Define styling and icon based on status
  const getStatusConfig = () => {
    switch (status) {
      case "present":
        return {
          icon: <CheckIcon className="h-4 w-4" />,
          text: "Present",
          textColor: "text-green-600 dark:text-green-400",
          bgColor: "bg-green-100 dark:bg-green-900/30",
        };
      case "specified":
        return {
          icon: <CheckIcon className="h-4 w-4" />,
          text: "Specified",
          textColor: "text-green-600 dark:text-green-400",
          bgColor: "bg-green-100 dark:bg-green-900/30",
        };
      case "warning":
        return {
          icon: <AlertCircleIcon className="h-4 w-4" />,
          text: "Warning",
          textColor: "text-amber-600 dark:text-amber-400",
          bgColor: "bg-amber-100 dark:bg-amber-900/30",
        };
      case "missing":
      default:
        return {
          icon: <XIcon className="h-4 w-4" />,
          text: "Missing",
          textColor: "text-red-600 dark:text-red-400",
          bgColor: "bg-red-100 dark:bg-red-900/30",
        };
    }
  };

  const { icon, text, textColor, bgColor } = getStatusConfig();

  return (
    <div
      className={`inline-flex items-center px-2 py-1 rounded-md ${bgColor} ${textColor} ${className}`}
    >
      {icon}
      <span className="ml-1 text-sm font-medium">{text}</span>
    </div>
  );
}

interface ComplianceItemInfoButtonProps {
  info?: string;
  className?: string;
}

export function ComplianceItemInfoButton({
  info,
  className = "",
}: ComplianceItemInfoButtonProps) {
  if (!info) return null;

  return (
    <div className={`relative group ${className}`}>
      <HelpCircleIcon className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 cursor-help" />
      <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
        {info}
      </div>
    </div>
  );
}

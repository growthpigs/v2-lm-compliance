import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, FileTextIcon } from "lucide-react";

interface ActionButtonsProps {
  onFixProblems?: () => void;
  onGetReport?: () => void;
  className?: string;
}

export default function ActionButtons({
  onFixProblems,
  onGetReport,
  className = "",
}: ActionButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button
        onClick={onFixProblems}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6"
      >
        Fix These Problems <ArrowRightIcon className="ml-2 h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        onClick={onGetReport}
        className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 py-6"
      >
        <FileTextIcon className="mr-2 h-5 w-5" />
        Get Free Report
      </Button>
    </div>
  );
}

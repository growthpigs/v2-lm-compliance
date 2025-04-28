import React from "react";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";

interface GetReportSectionProps {
  onGetReport?: () => void;
  className?: string;
}

export default function GetReportSection({
  onGetReport,
  className = "",
}: GetReportSectionProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-5 ${className}`}>
      <h3 className="text-lg font-semibold mb-2">Get the report</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        View the report and get more info on our remediation solutions
      </p>
      <Button
        variant="outline"
        onClick={onGetReport}
        className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
      >
        <FileTextIcon className="mr-2 h-4 w-4" />
        Get Free Report
      </Button>
    </div>
  );
}

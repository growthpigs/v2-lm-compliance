import React from "react";
import Image from "next/image";

interface WebsiteScreenshotPreviewProps {
  url: string;
  screenshotUrl: string;
  className?: string;
}

export default function WebsiteScreenshotPreview({
  url,
  screenshotUrl,
  className = "",
}: WebsiteScreenshotPreviewProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm ${className}`}
    >
      <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center">
        <div className="flex space-x-1.5 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 bg-white dark:bg-gray-600 rounded-md px-3 py-1 text-xs text-gray-600 dark:text-gray-300 truncate">
          {url}
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={screenshotUrl}
          alt={`Screenshot of ${url}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Scanned website preview
        </div>
      </div>
    </div>
  );
}

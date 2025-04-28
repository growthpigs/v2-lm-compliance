import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "lucide-react";

interface UrlScanFormProps {
  className?: string;
}

export default function UrlScanForm({ className = "" }: UrlScanFormProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    // Simulate loading state
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle the form submission here
      console.log("Scanning URL:", url);
    }, 1500);
  };

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <p className="text-white text-sm md:text-base mb-2">
          Enter your website URL to start your free compliance scan:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <Input
              type="url"
              placeholder="Enter your website URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full h-12 pl-4 pr-4 text-base bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading || !url}
            className="h-12 px-6 font-bold tracking-wider bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                <span>SCANNING...</span>
              </div>
            ) : (
              <span className="flex items-center">
                SCAN NOW
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </div>
        <p className="text-gray-300 text-xs mt-2">
          Scan typically takes 20–30 seconds to complete
        </p>
      </form>
    </div>
  );
}

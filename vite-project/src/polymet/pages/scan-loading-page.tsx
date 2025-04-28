import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuroraBackground from "@/polymet/components/aurora-background";
import ScanLoading from "@/polymet/components/scan-loading";
import { mockScanService } from "@/polymet/services/mockScanService";

export default function ScanLoadingPage() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [scanId, setScanId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  // Extract URL from query params
  const urlParams = new URLSearchParams(location.search);
  const url = urlParams.get("url");

  useEffect(() => {
    if (!url) {
      setError("No URL provided");
      return;
    }

    const startScan = async () => {
      try {
        // Start the scan with the real URL
        const result = await mockScanService.scanWebsite(url);
        setScanId(result.scanId);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to start scan. Please try again.");
        console.error(err);
      }
    };

    startScan();
  }, [url]);

  useEffect(() => {
    if (!scanId) return;

    const checkStatus = async () => {
      try {
        const status = await mockScanService.getScanStatus(scanId);
        setProgress(status.progress);

        if (status.status === 'completed' && status.result) {
          // Store the complete result in session storage
          sessionStorage.setItem('scanResult', JSON.stringify(status.result));
          setIsComplete(true);
        } else if (status.status === 'failed') {
          setError("Scan failed. Please try again.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to check scan status. Please try again.");
        console.error(err);
      }
    };

    const interval = setInterval(checkStatus, 2000);
    return () => clearInterval(interval);
  }, [scanId]);

  if (error) {
    return (
      <AuroraBackground>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex justify-center mb-8">
            <div className="max-w-2xl w-full bg-red-50 p-4 rounded-lg">
              <p className="text-red-600 text-center">{error}</p>
              <button
                onClick={() => window.location.href = '/'}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mx-auto block"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  if (isComplete) {
    return <Navigate to="/scan-results" replace />;
  }

  return (
    <AuroraBackground>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-center mb-8">
          <div className="max-w-2xl w-full">
            <ScanLoading url={url || "Scanning website..."} progress={progress} />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

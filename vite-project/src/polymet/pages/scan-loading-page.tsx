import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AuroraBackground from "@/polymet/components/aurora-background";
import ScanLoading from "@/polymet/components/scan-loading";
import { scanService } from "@/polymet/services/scanService";

export default function ScanLoadingPage() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

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
        const result = await scanService.scanWebsite(url);
        sessionStorage.setItem('scanResults', JSON.stringify(result));
        console.log('Saved scanResults:', result);
        navigate('/scan-results');
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to start scan. Please try again.");
        console.error(err);
      }
    };

    startScan();
  }, [url]);

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

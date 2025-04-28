import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/polymet/components/aurora-background";
import ScanResults from "@/polymet/components/scan-results";
import { ScanResult } from "@/polymet/services/scanService";

export default function ScanResultsPage() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedResult = sessionStorage.getItem('scanResult');
    if (storedResult) {
      try {
        const result = JSON.parse(storedResult) as ScanResult;
        setScanResult(result);
      } catch (err) {
        setError("Failed to load scan results. Please try scanning again.");
        console.error(err);
      }
    } else {
      setError("No scan results found. Please start a new scan.");
    }
  }, []);

  if (error) {
    return (
      <AuroraBackground>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex justify-center mb-8">
            <div className="max-w-2xl w-full bg-red-50 p-4 rounded-lg">
              <p className="text-red-600 text-center">{error}</p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mx-auto block"
              >
                Start New Scan
              </button>
            </div>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  if (!scanResult) {
    return (
      <AuroraBackground>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex justify-center mb-8">
            <div className="max-w-2xl w-full">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  return (
    <AuroraBackground>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-center mb-8">
          <div className="max-w-2xl w-full">
            <ScanResults result={scanResult} />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 
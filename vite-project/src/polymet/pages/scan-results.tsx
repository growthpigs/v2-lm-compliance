import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/polymet/components/aurora-background";
import WebsiteScreenshotPreview from "@/polymet/components/website-screenshot-preview";
import GetFreeInstructionsSection from "@/polymet/components/get-free-instructions-section";
import GetReportSection from "@/polymet/components/get-report-section";
import RequiredActionItem from "@/polymet/components/required-action-item";
import ComplianceSection from "@/polymet/components/compliance-section";
import { ScanResult } from "@/polymet/services/scanService";

export default function ScanResults() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const result = sessionStorage.getItem('scanResult');
    if (result) {
      try {
        setScanResult(JSON.parse(result));
        // Clear the result from session storage
        sessionStorage.removeItem('scanResult');
      } catch (err) {
        setError("Failed to load scan results");
        console.error(err);
      }
    } else {
      setError("No scan results found");
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
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Try Again
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
              <p className="text-white text-center">Loading results...</p>
            </div>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  const {
    url,
    jurisdiction,
    summary,
    screenshot,
    requiredActions,
    sections,
    issuesCount,
    complianceScore,
    stateSpecificInfo
  } = scanResult;

  return (
    <AuroraBackground>
      <div className="relative w-full">
        {/* Logomark top right */}
        <div className="absolute top-4 right-8 z-20">
          <img
            src="https://storage.googleapis.com/legal-moustache/Logomark%20Legal%20Moustache.svg"
            alt="Legal Moustache Logomark"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
        </div>

        <div className="container mx-auto px-2 sm:px-4 md:px-8 max-w-7xl">
          {/* Website URL at the top */}
          <div className="flex justify-center mt-8 mb-3">
            <div className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full flex items-center">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-blue-900 font-bold">
                A
              </div>
              <span className="text-white font-medium text-base sm:text-lg">
                {url}
              </span>
            </div>
          </div>

          {/* Compliance Score */}
          <div className="flex justify-start mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-red-500 ml-5">
              {complianceScore}% <span className="text-lg sm:text-xl">Compliance Score</span>
            </h1>
          </div>

          {/* Main Results Container */}
          <div className="bg-white rounded-xl shadow-lg p-3 sm:p-5 mb-4 flex flex-col md:flex-row gap-4 sm:gap-6 items-stretch">
            {/* Screenshot */}
            <div className="w-full md:w-5/12 flex flex-col justify-center">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-2 py-1 flex items-center">
                  <div className="flex gap-1 mr-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-600 truncate">{url}</span>
                </div>
                <img
                  src={screenshot}
                  alt="Website screenshot"
                  className="w-full max-h-[140px] sm:max-h-[180px] md:max-h-[200px] object-cover"
                />
              </div>
            </div>

            {/* Non-compliant area */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
              <div className="flex flex-col items-center md:items-start justify-center h-full">
                {/* Pill-shaped Non-compliant badge */}
                <span className="inline-flex items-center px-5 py-2 mb-2 rounded-full bg-red-50 border border-red-200">
                  <span className="text-red-600 font-semibold text-lg mr-2">
                    Non-compliant
                  </span>
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-red-500 text-base font-medium">
                    {issuesCount} compliance issues identified
                  </span>
                </span>

                {/* Jurisdiction */}
                <div className="text-gray-800 text-lg font-bold mb-2 mt-1">
                  {jurisdiction}
                </div>

                {/* State-specific info */}
                {stateSpecificInfo && (
                  <div className="text-gray-600 text-sm mb-4">
                    <p className="font-semibold">State Regulations:</p>
                    <ul className="list-disc list-inside">
                      {stateSpecificInfo.regulations.map((regulation, index) => (
                        <li key={index}>{regulation}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Required Actions */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Required Actions</h2>
            <div className="space-y-4">
              {requiredActions.map((action) => (
                <RequiredActionItem
                  key={action.id}
                  title={action.title}
                  description={action.description}
                  priority={action.priority}
                />
              ))}
            </div>
          </div>

          {/* Compliance Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <ComplianceSection
                key={section.id}
                title={section.title}
                description={section.description}
                issues={section.issues}
              />
            ))}
          </div>

          {/* Get Free Instructions Section */}
          <GetFreeInstructionsSection />

          {/* Get Report Section */}
          <GetReportSection />
        </div>
      </div>
    </AuroraBackground>
  );
}

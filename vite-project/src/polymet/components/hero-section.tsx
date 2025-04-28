import { SparklesIcon } from "lucide-react";
import FeatureChecklist from "@/polymet/components/feature-checklist";
import UrlScanForm from "@/polymet/components/url-scan-form";
import AIBadge from "@/polymet/components/ai-badge";
import AuroraBackground from "@/polymet/components/aurora-background";
import LegalMoustacheLogo from "@/polymet/components/legal-moustache-logo";

export default function HeroSection() {
  return (
    <AuroraBackground className="w-full pt-0 pb-8 bg-[#001628] dark:bg-[#001628]">
      <div className="max-w-`7`xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Logo with significant top margin to pull it down into view on mobile */}
        <div className="pt-0 mt-16 sm:mt-15  mb-3 flex justify-center">
          <img
            src="https://storage.googleapis.com/legal-moustache/Logo Legal Moustache COLOR.svg"
            alt="Legal Moustache Logo"
            className="w-auto h-[50px] sm:h-[90px] md:h-[110px] lg:h-[120px] max-w-[80%]"
          />
        </div>

        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Is Your Law Firm Website Compliant?
          </h1>
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-blue-200 mb-4 max-w-3xl mx-auto px-4">
            Free Instant Legal & Accessibility Compliance Scan — Now with
            AI-Powered Plagiarism Detection
          </h2>

          <AIBadge className="mb-6" />
        </div>

        {/* URL Scan Form */}
        <div className="w-full max-w-xl mx-auto mb-12">
          <div className="bg-[#4169e1]/20 backdrop-blur-sm p-6 rounded-xl border border-[#4169e1]/30 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <input
                type="text"
                placeholder="Enter your website URL"
                className="flex-1 px-4 py-2 rounded-md border border-blue-800/50 bg-white/10 text-white"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center">
                SCAN & FIX <span className="ml-1">→</span>
              </button>
            </div>
            {/* Scan time text - left-aligned */}
            <div className="text-sm text-blue-200 text-left pl-1">
              Scan typically takes 20–30 seconds to complete. No email required.
              We provide solutions instantly with no strings attached.
            </div>
          </div>
        </div>

        {/* Non-compliant websites paragraph with shortened text */}
        <div className="text-center mb-8">
          <p className="text-gray-200 max-w-3xl mx-auto text-sm md:text-base">
            Non-compliant websites pose significant risks. Bar associations are
            scrutinizing digital marketing more closely, while ADA-related
            lawsuits are increasing. The rise of AI-generated content also
            raises issues of originality and potential plagiarism. Our advanced
            scanner tackles these challenges directly.
          </p>
        </div>

        {/* Feature Checklist - Using table layout for perfect alignment */}
        <div className="flex justify-center mb-12">
          <table className="border-collapse text-sm max-w-xl">
            <tbody>
              <tr>
                <td className="pb-1.5 pr-6">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 8L7 11L12 5"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="text-white">ABA Model Rules 7.1–7.5</span>
                  </div>
                </td>
                <td className="pb-1.5">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 8L7 11L12 5"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="text-white">
                      ADA & WCAG accessibility standards
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pb-1.5 pr-6">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 8L7 11L12 5"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="text-white">
                      FTC advertising guidelines
                    </span>
                  </div>
                </td>
                <td className="pb-1.5">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 8L7 11L12 5"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="text-white">
                      Privacy compliance requirements
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pb-1.5 pr-6">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 8L7 11L12 5"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="text-white">
                      State bar advertising regulations
                    </span>
                  </div>
                </td>
                <td className="pb-1.5">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 8L7 11L12 5"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="text-white">
                      AI-generated and plagiarized content detection
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AuroraBackground>
  );
}

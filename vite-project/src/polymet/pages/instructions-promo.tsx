import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuroraBackground from "@/polymet/components/aurora-background";
import RequiredActionItem from "@/polymet/components/required-action-item";
import { COMPLIANCE_SCAN_RESULTS } from "@/polymet/data/compliance-scan-results-data";

export default function InstructionsPromo() {
  // Get the first required action from the mock data
  const firstAction = COMPLIANCE_SCAN_RESULTS.requiredActions.items[0];

  return (
    <AuroraBackground>
      <div className="container mx-auto px-4 py-0">
        {/* Hero Section with Aurora Background Visible - Reduced top spacing */}
        <div className="relative overflow-hidden mt-6 md:mt-8 lg:mt-10">
          {/* Logo in top right - centered on mobile - fixed visibility */}
          <div className="absolute top-0 left-0 right-0 md:left-auto md:right-8 flex justify-center md:justify-end z-20 pt-4 md:pt-0">
            {/* Second logo removed as requested */}
          </div>

          {/* Two column layout container */}
          <div className="flex flex-col md:flex-row mt-8 md:mt-0 relative z-10">
            {/* Left column - Moustache Man - Anchored to compliance container */}
            <div className="md:w-1/3 flex justify-center md:justify-start relative">
              {/* Gem positioned behind the eyebrow - desktop only - moved right 120px (additional) */}
              <div className="absolute hidden md:block right-[160px] top-[40px] transform -rotate-[25deg] opacity-70 z-0">
                <img
                  src="https://storage.googleapis.com/legal-moustache/250-hidden-gem-icon.png"
                  alt="Hidden Gem"
                  className="w-[100px] md:w-[120px]"
                />
              </div>

              {/* Moustache Man image - desktop only version - Anchored to compliance container - Moved up by 15px */}
              <div className="relative h-full hidden md:block">
                <img
                  src="https://storage.googleapis.com/legal-moustache/moustache-man.png"
                  alt="Legal Moustache Expert"
                  className="max-h-[360px] object-contain relative z-10 mt-[85px] md:ml-4 mb-[-40px]"
                />
              </div>

              {/* Mobile-specific Moustache Man - positioned to extend 10px behind the compliance container */}
              <div className="relative h-full md:hidden">
                <img
                  src="https://storage.googleapis.com/legal-moustache/moustache-man.png"
                  alt="Legal Moustache Expert"
                  className="max-h-[256px] object-contain relative z-10 mt-[-20px] mb-[-10px]"
                />
              </div>
            </div>

            {/* Right column - Promo content - Reduced line height and text size */}
            <div className="md:w-2/3 px-4 md:px-0 py-0 md:py-4 flex flex-col justify-center items-center md:items-start mt-[-80px] md:mt-8 relative z-20">
              {/* Green badge - positioned to act as a base for Moustache Man on mobile */}
              <div className="bg-green-500 text-white text-sm md:text-xs font-bold px-4 py-1.5 rounded-full inline-block mb-3 self-center md:self-start z-30 mt-16 md:mt-0">
                DOUBLE YOUR TRAFFIC OR YOU DON'T PAY
              </div>

              {/* Headline - Size doubled as requested */}
              <div className="text-center md:text-left px-2 md:px-0 mb-3">
                <h1 className="text-[42px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[0.9] md:leading-tight">
                  Unlock{" "}
                  <span className="text-yellow-400">Hidden SEO Gems</span>
                </h1>
                <h2 className="text-[1.5rem] md:text-xl lg:text-[1.7rem] font-bold text-white leading-tight">
                  You Already Rank For
                </h2>
              </div>

              {/* Description - with bold first line and regular second line - Tighter spacing - reduced text size and line height */}
              <div className="max-w-[700px] text-center md:text-left px-2 md:px-0">
                <p className="text-white leading-tight text-[16px] md:text-sm">
                  <span className="font-bold text-[14px] md:text-sm">
                    Did you know your law firm is already ranking for top
                    keywords?
                  </span>{" "}
                  <br className="md:hidden" />
                  <span className="font-normal text-xs md:text-sm block mt-1 leading-snug">
                    Our SEO AI digs deep into your Google data to uncover hidden
                    search traffic, then we <br /> double-down on these keywords
                    in a 2-week sprint bringing real traffic and paying clients.
                  </span>
                </p>
              </div>

              {/* Feature List - Tighter spacing - reduced text size */}
              <ul className="mb-3 space-y-0.5 max-w-[700px] px-2 md:px-0 mt-2 text-[14px] md:text-sm">
                <li className="flex items-start">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M4 8L7 11L12 5"
                      stroke="#4ADE80"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                  <span className="text-white text-xs md:text-sm font-semibold leading-tight">
                    AI SEO Rankings audit for targeted content and technical SEO
                    sprint
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M4 8L7 11L12 5"
                      stroke="#4ADE80"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                  <span className="text-white text-xs md:text-sm font-semibold leading-tight">
                    Instantly boost visibility with existing under exploited
                    keywords
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M4 8L7 11L12 5"
                      stroke="#4ADE80"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                  <span className="text-white text-xs md:text-sm font-semibold leading-tight">
                    Unleash your full traffic potential in weeks, not months
                  </span>
                </li>
              </ul>

              {/* CTA Button - padding top and bottom reduced by 25% */}
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md text-lg self-center md:self-start min-h-[45px] my-1">
                Start for $295 → No Risk, No Lock-In
              </Button>
            </div>
          </div>
        </div>

        {/* Fix Compliance Problems Section - edge-to-edge, very light grey - Moved up by removing padding */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg mb-8 mt-0 relative z-20 w-full">
          <h2 className="text-2xl font-bold text-green-500 mb-4 max-w-[700px] mx-auto md:mx-0">
            Fix Compliance Problems
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-[700px] mx-auto md:mx-0">
            We've identified compliance issues that could expose your firm to
            legal risk or lost business. Here's exactly what to do next — no
            guesswork, no complicated jargon. Simple step-by-step instructions
            to fix it immediately.
            <br />
            <span className="italic">
              If you prefer, we can also do it for you — just click "Get Help"
              next to any item.
            </span>
          </p>

          {/* Required Actions Header - Score badge removed */}
          <div className="flex justify-between items-center mb-4 max-w-[700px] mx-auto md:mx-0">
            <h3 className="text-xl font-semibold">Required Actions</h3>
          </div>

          {/* Required Action Items - full width containers with constrained text */}
          <div className="space-y-6">
            {/* First Required Action - Get help button removed */}
            <div className="border-l-4 border-l-red-600 dark:border-l-red-500 bg-white dark:bg-gray-800 rounded-md shadow-sm p-4 w-full">
              <div className="max-w-[700px] mx-auto md:mx-0">
                <h4 className="text-base font-semibold mb-1">Add ABN</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded mr-2">
                    Business Names Act 2002 · Penalty: Up to $6,600 AUD
                  </span>
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Your website needs to display your ABN (Australian Business
                  Number) to meet business registration laws.
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-green-500 mb-1">
                    How to fix it:
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Add your ABN to your website footer and your Contact page.
                    Make sure it's easy to find and matches your official
                    registration.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Required Actions - Using the component */}
            <RequiredActionItem
              title="Add Legal Advertising Disclaimer"
              description="ABA Model Rule 7.1-7.5 - Penalty: Up to $5,000 USD"
              severity="medium"
              onGetHelp={() => console.log("Get help clicked")}
            />

            <RequiredActionItem
              title="Add Cookie Consent Banner"
              description="CCPA Requirements - Penalty: Potential Liability"
              severity="low"
              onGetHelp={() => console.log("Get help clicked")}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/scan-results">
            <Button variant="outline" className="w-full sm:w-auto">
              Back to Results
            </Button>
          </Link>
          <Link to="/">
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              Return Home <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </AuroraBackground>
  );
}

import React from "react";
import AuroraBackground from "@/polymet/components/aurora-background";
import PromoArea from "@/polymet/components/promo-area";

export default function SeoPromoPage() {
  return (
    <AuroraBackground>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <PromoArea />

            <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our SEO Services for Law Firms
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Local SEO Optimization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dominate local search results with our specialized local SEO
                    strategies designed specifically for law firms. We optimize
                    your Google Business Profile and ensure your firm appears in
                    local map packs.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Content Strategy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our legal content experts create authoritative, practice
                    area-specific content that attracts potential clients and
                    positions your firm as a thought leader in your field.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Technical SEO</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We ensure your website meets all technical requirements for
                    optimal search engine performance, including site speed,
                    mobile optimization, and proper schema markup.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Backlink Building
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gain authority through strategic backlink acquisition from
                    legal directories, local business associations, and other
                    relevant high-authority websites.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to grow your practice?
                </h3>
                <p className="mb-6 text-lg max-w-2xl mx-auto">
                  Schedule a free consultation with our legal SEO specialists to
                  discover how we can help your firm attract more qualified
                  leads.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

import { AlertTriangleIcon, ShieldIcon, BarChartIcon } from "lucide-react";

export default function WhyComplianceSection() {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Compliance Matters
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Legal marketing restrictions are unique and complex. What works for
            other businesses could trigger violations for your firm. Our scanner
            has been trained on the latest regulations and bar association
            guidelines to identify issues human reviews might miss.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
            <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <AlertTriangleIcon className="h-7 w-7 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Risk Mitigation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Avoid costly penalties and legal action by ensuring your website
              meets all regulatory requirements specific to law firms.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
            <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <ShieldIcon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Professional Integrity
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Maintain your firm's reputation and professional standing by
              adhering to bar association rules and ethical guidelines.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BarChartIcon className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Inclusive Access
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ensure your website is accessible to all potential clients,
              including those with disabilities, expanding your reach and
              demonstrating your commitment to equality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

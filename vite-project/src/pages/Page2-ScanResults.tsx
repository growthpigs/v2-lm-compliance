import React from "react";

const Page2ScanResults: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001628] to-[#0c264b] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 relative">
        {/* Logo */}
        <img
          src="https://storage.googleapis.com/legal-moustache/moustache-man.png"
          alt="Legal Moustache"
          className="w-24 absolute top-6 right-6"
        />

        {/* Website and Score */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Website Scanned: apple.com</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-red-100 text-red-600 font-bold py-2 px-4 rounded-full text-sm">
            33% Compliance Score
          </div>
          <div className="text-red-500 font-semibold">Non-Compliant</div>
          <div className="text-gray-600 text-sm">Jurisdiction: California, US</div>
        </div>

        {/* Summary */}
        <p className="text-gray-700 mb-6">
          Your scan indicates that your website has some serious accessibility issues. Make your website accessible and mitigate legal risk now.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
            Fix These Problems
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg">
            Get Free Report
          </button>
        </div>

        {/* Required Actions */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Required Actions</h3>
        <ul className="space-y-4">
          <li className="border-l-4 border-red-500 pl-4">
            <div className="text-gray-800 font-semibold">Add Business Registration</div>
            <div className="text-gray-600 text-sm">Business & Professions Code § 6155 - Penalty: Up to $10,000 USD</div>
            <button className="mt-2 text-blue-600 text-sm hover:underline">Get Help</button>
          </li>
          <li className="border-l-4 border-red-500 pl-4">
            <div className="text-gray-800 font-semibold">Add Unsubscribe Link</div>
            <div className="text-gray-600 text-sm">CAN-SPAM Act - Penalty: Up to $43,792 USD per email</div>
            <button className="mt-2 text-blue-600 text-sm hover:underline">Get Help</button>
          </li>
          <li className="border-l-4 border-red-500 pl-4">
            <div className="text-gray-800 font-semibold">Add Legal Advertising Disclaimer</div>
            <div className="text-gray-600 text-sm">ABA Model Rule 7.1-7.5 - Penalty: Up to $5,000 USD</div>
            <button className="mt-2 text-blue-600 text-sm hover:underline">Get Help</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page2ScanResults;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page1Hero: React.FC = () => {
  const [url, setUrl] = useState("");
  const [isScanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleScan = () => {
    setError(null);
    if (!url) {
      setError("Please enter a website URL.");
      return;
    }
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      navigate("/scan-results"); // 🚀 Go to Page 2
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
        Is Your Law Firm Website Compliant?
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isScanning}
        />
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          onClick={handleScan}
          disabled={isScanning}
        >
          {isScanning ? "Scanning..." : "Scan & Fix"}
        </button>
      </div>
      {error && (
        <div className="mt-4 text-red-600 font-medium">{error}</div>
      )}
      {isScanning && !error && (
        <div className="mt-4 text-blue-600 font-medium">Scanning your website...</div>
      )}
    </div>
  );
};

export default Page1Hero;
export default function StatsSection() {
  return (
    <section className="w-full bg-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-blue-900/50 rounded-full mb-4">
              <span className="text-blue-300 font-medium text-sm">
                Industry Leading
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              100,000+ <span className="text-blue-400">scans</span>
            </h2>
            <p className="text-gray-300">performed for legal professionals</p>
          </div>

          <div className="h-16 w-px bg-gray-700 hidden md:block"></div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="text-red-400">+63%</span>
            </h3>
            <p className="text-gray-300">
              Increase in ADA website lawsuits since 2020
            </p>
          </div>

          <div className="h-16 w-px bg-gray-700 hidden md:block"></div>

          <div className="text-center md:text-right">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="text-green-400">98%</span> Accuracy
            </h3>
            <p className="text-gray-300">in identifying compliance issues</p>
          </div>
        </div>
      </div>
    </section>
  );
}

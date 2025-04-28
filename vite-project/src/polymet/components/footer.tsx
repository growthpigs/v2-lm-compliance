export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Legal Moustache. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms of Use
            </a>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

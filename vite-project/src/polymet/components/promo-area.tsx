import { CheckIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function PromoArea() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Flex container for desktop layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start relative">
          {/* Logo in top right on desktop */}
          <div className="absolute top-0 right-0 hidden md:block">
            <img
              src="https://p129.p0.n0.cdn.zight.com/items/geuQwwwq/f7d9efe4-ed40-4a90-b537-064700bb38ca.svg?source=client&v=2c15211e8cd072bbfc32794cd20c1ab2"
              alt="Legal Moustache Logo"
              className="w-auto h-12"
            />
          </div>

          {/* Left side - Moustache Man with gem */}
          <div className="relative md:w-1/3 mb-6 md:mb-0 md:-ml-8">
            {/* Gem positioned behind the head */}
            <div className="absolute top-0 right-0 md:right-auto md:left-24 md:-top-4 transform rotate-12 z-0">
              <img
                src="https://picsum.photos/seed/gem123/200/200"
                alt="Pink Gem"
                className="w-24 h-24 md:w-32 md:h-32"
                style={{
                  filter: "hue-rotate(320deg) saturate(1.5)",
                  opacity: 0.9,
                }}
              />
            </div>

            {/* Moustache Man image */}
            <img
              src="https://picsum.photos/seed/moustacheman/400/500"
              alt="Man with glasses and moustache"
              className="relative z-10 w-48 md:w-64 lg:w-72 h-auto object-cover object-top"
            />
          </div>

          {/* Right side - Promo content */}
          <div className="md:w-2/3 z-20 text-center md:text-left md:pl-4 lg:pl-8">
            {/* Logo on mobile */}
            <div className="mb-4 md:hidden">
              <img
                src="https://p129.p0.n0.cdn.zight.com/items/geuQwwwq/f7d9efe4-ed40-4a90-b537-064700bb38ca.svg?source=client&v=2c15211e8cd072bbfc32794cd20c1ab2"
                alt="Legal Moustache Logo"
                className="w-auto h-12 mx-auto"
              />
            </div>

            {/* Green badge */}
            <div className="inline-block bg-green-500 text-white font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide">
              DOUBLE YOUR TRAFFIC OR YOU DON'T PAY
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Unlock <span className="text-yellow-300">Hidden SEO Gems</span>{" "}
              You Already Rank For...
            </h2>

            {/* Description paragraph */}
            <p className="text-white font-medium mb-4 max-w-2xl md:max-w-xl mx-auto md:mx-0">
              Did you know your law firm is already ranking for top keywords?
              Our SEO AI digs deep into your Google data to uncover hidden
              search traffic, then we double-down on these keywords in a 2-week
              sprint bringing real traffic and paying clients.
            </p>

            {/* Checklist */}
            <ul className="mb-6 space-y-2 max-w-2xl md:max-w-xl mx-auto md:mx-0">
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm md:text-base">
                  AI SEO Rankings audit for targeted content and technical SEO
                  sprint
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm md:text-base">
                  Instantly boost visibility with existing under exploited
                  keywords
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm md:text-base">
                  Unleash your full traffic potential in weeks, not months
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              to="/seo-service"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md text-center transition-colors duration-200"
            >
              Start for $295 → No Risk, No Lock-In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

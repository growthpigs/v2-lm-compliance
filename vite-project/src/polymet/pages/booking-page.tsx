import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AuroraBackground from "@/polymet/components/aurora-background";
import BookingForm, {
  BookingFormData,
} from "@/polymet/components/booking-form";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContinueToForm = () => {
    setCurrentStep(2);
  };

  const handleBackToCalendar = () => {
    setCurrentStep(1);
  };

  const handleFormSubmit = (formData: BookingFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Booking submitted:", {
        formData,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <AuroraBackground>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-none">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left side - Moustache Man and Info */}
          <div className="lg:w-1/2 w-full relative">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="https://storage.googleapis.com/legal-moustache/Logo Legal Moustache COLOR.svg"
                alt="Legal Moustache Logo"
                className="w-auto h-16 md:h-20"
              />
            </div>

            {/* Heading */}
            <div className="mb-8 w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-normal lg:tracking-wide">
                Book Your 20-Minute{" "}
                <span className="text-white">Free Strategy Call</span>
              </h1>

              {/* Bullet points - smaller on desktop */}
              <ul className="space-y-3 md:space-y-2 lg:space-y-1 text-white flex flex-col md:flex-row md:space-x-4 md:items-center md:flex-wrap">
                <li className="flex items-start md:items-center md:w-auto">
                  <span className="text-green-400 mr-2 flex-shrink-0 mt-1 md:mt-0">
                    •
                  </span>
                  <span className="text-lg md:text-base lg:text-sm">
                    Get a free SEO audit and AI opinion on your website
                  </span>
                </li>
                <li className="flex items-start md:items-center md:w-auto">
                  <span className="text-green-400 mr-2 flex-shrink-0 mt-1 md:mt-0">
                    •
                  </span>
                  <span className="text-lg md:text-base lg:text-sm">
                    Discuss hidden SEO opportunities without pressure
                  </span>
                </li>
                <li className="flex items-start md:items-center md:w-auto">
                  <span className="text-green-400 mr-2 flex-shrink-0 mt-1 md:mt-0">
                    •
                  </span>
                  <span className="text-lg md:text-base lg:text-sm">
                    Decide if our Hidden Gems offer is right for you
                  </span>
                </li>
              </ul>
            </div>

            {/* Moustache Man Image with Badge - moved up */}
            <div className="relative md:max-w-none mt-0 md:-mt-4 lg:-mt-8">
              {/* Gem positioned behind the head */}
              <div className="absolute top-0 right-0 transform rotate-12 z-0">
                <img
                  src="https://storage.googleapis.com/legal-moustache/250-hidden-gem-icon.png"
                  alt="Pink Gem"
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-90"
                />
              </div>

              {/* Moustache Man image */}
              <img
                src="https://storage.googleapis.com/legal-moustache/moustache-man.png"
                alt="Legal Moustache Expert"
                className="relative z-10 max-h-[400px] md:max-h-[500px] lg:max-h-[600px] w-auto object-contain"
              />

              {/* Green pill badge positioned at the bottom of the moustache man */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[120%]">
                <div className="bg-green-500 text-white font-bold text-xs md:text-sm lg:text-base xl:text-lg px-6 py-2.5 rounded-full whitespace-nowrap md:tracking-wider lg:tracking-widest flex justify-center items-center w-full">
                  DOUBLE YOUR TRAFFIC OR IT'S FREE
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Booking Form */}
          <div className="lg:w-1/2 w-full">
            <Card className="w-full bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">
                  Free 20-Minute Strategy Call
                </h2>

                {currentStep === 1 ? (
                  <div className="space-y-8">
                    {/* Calendar Embed Placeholder */}
                    <div className="w-full min-h-[400px] bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center">
                        <p className="text-gray-500 dark:text-gray-400 mb-2">
                          Calendar embed will be placed here
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          Calendly or TidyCal integration
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={handleContinueToForm}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      Continue
                    </Button>
                  </div>
                ) : (
                  <div>
                    {!isSubmitted && (
                      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <h3 className="font-medium mb-1">Selected Time</h3>
                        <p>Thursday, June 20, 2024 at 10:00 AM</p>
                        <Button
                          variant="link"
                          onClick={handleBackToCalendar}
                          className="p-0 h-auto mt-1"
                        >
                          Change time
                        </Button>
                      </div>
                    )}

                    <BookingForm
                      onSubmit={handleFormSubmit}
                      isSubmitting={isSubmitting}
                      isSubmitted={isSubmitted}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

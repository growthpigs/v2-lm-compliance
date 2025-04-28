import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingCalendarProps {
  onDateSelected: (date: Date) => void;
  selectedDate: Date | null;
}

export default function BookingCalendar({
  onDateSelected,
  selectedDate,
}: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get current date info
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonthNum = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get displayed month info
  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();

  // Get number of days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Create array of day numbers for the month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Add empty slots for days before the first day of the month
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

  // Combine empty days and actual days
  const allDays = [...emptyDays, ...days];

  // Format month name
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    currentMonth
  );

  // Go to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  // Go to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  // Check if a date is in the past
  const isPastDate = (day: number) => {
    if (year < currentYear) return true;
    if (year === currentYear && month < currentMonthNum) return true;
    if (year === currentYear && month === currentMonthNum && day < currentDay)
      return true;
    return false;
  };

  // Check if a date is selected
  const isSelectedDate = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  // Handle date selection
  const handleDateClick = (day: number) => {
    if (isPastDate(day)) return;
    const newDate = new Date(year, month, day);
    onDateSelected(newDate);
  };

  // Available dates (for demo purposes - in a real app this would come from an API)
  const availableDates = [3, 5, 8, 10, 14, 15, 17, 20, 22, 25, 28];
  const isAvailableDate = (day: number) => availableDates.includes(day);

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevMonth}
          disabled={month === currentMonthNum && year === currentYear}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </Button>
        <h3 className="text-lg font-medium">
          {monthName} {year}
        </h3>
        <Button variant="ghost" size="icon" onClick={nextMonth}>
          <ChevronRightIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
          <div
            key={day}
            className="text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {allDays.map((day, index) => (
          <div key={index} className="aspect-square">
            {day !== null && (
              <button
                className={`w-full h-full flex items-center justify-center rounded-full text-sm
                  ${
                    isPastDate(day)
                      ? "text-gray-400 cursor-not-allowed"
                      : isSelectedDate(day)
                        ? "bg-blue-600 text-white"
                        : isAvailableDate(day)
                          ? "hover:bg-blue-100 dark:hover:bg-blue-900"
                          : "text-gray-400 cursor-not-allowed"
                  }`}
                disabled={isPastDate(day) || !isAvailableDate(day)}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-right">
        {availableDates.length} time slots available
      </div>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClockIcon } from "lucide-react";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface TimeSlotSelectorProps {
  date: Date | null;
  onTimeSelected: (timeSlot: TimeSlot | null) => void;
  selectedTimeSlot: TimeSlot | null;
}

export default function TimeSlotSelector({
  date,
  onTimeSelected,
  selectedTimeSlot,
}: TimeSlotSelectorProps) {
  // Mock time slots - in a real app, these would be fetched based on the selected date
  const mockTimeSlots: TimeSlot[] = [
    { id: "1", time: "9:00 AM", available: true },
    { id: "2", time: "10:00 AM", available: true },
    { id: "3", time: "11:30 AM", available: true },
    { id: "4", time: "1:00 PM", available: true },
    { id: "5", time: "2:30 PM", available: false },
    { id: "6", time: "4:00 PM", available: true },
    { id: "7", time: "5:30 PM", available: true },
  ];

  const handleTimeSlotClick = (timeSlot: TimeSlot) => {
    if (!timeSlot.available) return;
    onTimeSelected(timeSlot);
  };

  if (!date) {
    return (
      <div className="text-center p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
        <ClockIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Please select a date to view available time slots
        </p>
      </div>
    );
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-3">
        Available times for {formattedDate}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {mockTimeSlots.map((slot, index) => (
          <Button
            key={slot.id}
            variant={selectedTimeSlot?.id === slot.id ? "default" : "outline"}
            className={`
              ${!slot.available ? "opacity-50 cursor-not-allowed" : ""}
              ${selectedTimeSlot?.id === slot.id ? "bg-blue-600 text-white" : ""}
            `}
            disabled={!slot.available}
            onClick={() => handleTimeSlotClick(slot)}
          >
            <ClockIcon className="mr-2 h-4 w-4" />
            {slot.time}
          </Button>
        ))}
      </div>
    </div>
  );
}

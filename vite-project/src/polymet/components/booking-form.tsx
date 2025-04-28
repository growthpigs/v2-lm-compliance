import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon } from "lucide-react";

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

export default function BookingForm({
  onSubmit,
  isSubmitting,
  isSubmitted,
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
          <CheckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We've sent a confirmation email with all the details.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If you need to reschedule or cancel, please use the link in the email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Smith"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website URL</Label>
        <Input
          id="website"
          name="website"
          type="url"
          placeholder="https://yourfirm.com"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">What would you like to discuss?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your website and what you're looking to achieve..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Confirming..." : "Confirm Booking"}
      </Button>

      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
        By booking a call, you agree to our{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

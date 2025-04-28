import { CheckIcon } from "lucide-react";

interface FeatureChecklistProps {
  features: string[];
  className?: string;
}

export default function FeatureChecklist({
  features,
  className = "",
}: FeatureChecklistProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckIcon
            className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
            strokeWidth={3}
          />

          <span className="text-sm md:text-base text-gray-100">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

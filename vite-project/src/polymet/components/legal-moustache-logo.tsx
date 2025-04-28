interface LegalMoustacheLogoProps {
  className?: string;
  height?: number;
  type?: "stacked" | "long" | "mark";
}

export default function LegalMoustacheLogo({
  className = "",
  height = 80,
  type = "stacked",
}: LegalMoustacheLogoProps) {
  const logos = {
    stacked:
      "https://storage.googleapis.com/legal-moustache/Logo%20Legal%20Moustache%20COLOR.svg",
    long: "https://storage.googleapis.com/legal-moustache/Logolong%20Legal%20Moustache%20COLOR.svg",
    mark: "https://storage.googleapis.com/legal-moustache/Logomark%20Legal%20Moustache.svg",
  };

  return (
    <div className={`flex justify-center pt-6 mb-4 ${className}`}>
      <img
        src={logos[type]}
        alt="Legal Moustache Logo"
        height={height}
        className="h-auto w-auto max-h-[80px]"
      />
    </div>
  );
}

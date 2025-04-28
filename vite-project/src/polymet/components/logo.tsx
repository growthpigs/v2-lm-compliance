interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "", height = 94 }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="https://p129.p0.n0.cdn.zight.com/items/geuQwwwq/f7d9efe4-ed40-4a90-b537-064700bb38ca.svg?source=client&v=2c15211e8cd072bbfc32794cd20c1ab2"
        alt="Legal Moustache Logo"
        className="w-auto"
        style={{ height: height ? `${height}px` : "auto" }}
      />
    </div>
  );
}

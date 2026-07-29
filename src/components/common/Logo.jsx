export default function Logo({ light = false, compact = false, className = "" }) {
  const logoColor = light ? "#FFFFFF" : "#856DF3";

  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="ShipNow">
      <span
        aria-hidden="true"
        className={`${compact ? "h-6 w-6" : "h-7 w-7"} shrink-0`}
        style={{
          backgroundColor: logoColor,
          WebkitMaskImage: "url('/assets/shipnow-symbol.png')",
          maskImage: "url('/assets/shipnow-symbol.png')",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      {!compact && (
        <span
          className="text-[20px] font-black italic tracking-[-0.04em]"
          style={{ color: logoColor }}
        >
          SHIPNOW
        </span>
      )}
    </div>
  );
}

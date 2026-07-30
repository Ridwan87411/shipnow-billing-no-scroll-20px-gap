export default function TrackingIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-[1em] w-[1em] ${className}`}
      aria-hidden="true"
    >
      <path
        d="m5.3 17.6 2-3.7m2.7-.9 1.5 1.1m3-.3 4-6.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="4" cy="19" r="2.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.4" cy="11.9" r="2.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="13.3" cy="15.2" r="2.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="20" cy="5" r="2.1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

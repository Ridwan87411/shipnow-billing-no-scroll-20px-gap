export default function IconButton({
  children,
  label,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      aria-label={label}
      onClick={onClick}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white text-[#666] transition hover:bg-[#f8f7ff] hover:text-brand-600 ${className}`}
    >
      {children}
    </button>
  );
}

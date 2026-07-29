export default function FormField({
  label,
  error,
  children,
  className = "",
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[10px] font-medium text-[#555]">{label}</span>
      {children}
      {error && <span className="mt-1 block text-[9px] text-danger">{error}</span>}
    </label>
  );
}

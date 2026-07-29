import { FiSearch } from "react-icons/fi";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search anything",
  className = "",
}) {
  return (
    <label
      className={`flex h-10 min-w-0 items-center gap-2 rounded-lg border border-line bg-white px-3 ${className}`}
    >
      <FiSearch className="shrink-0 text-[#8a8a90]" />
      <input
        aria-label={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-[12px] text-ink placeholder:text-[#aaaab0]"
      />
    </label>
  );
}

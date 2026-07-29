import { FiBox } from "react-icons/fi";

export default function MetricCard({
  label,
  value,
  suffix,
  change,
  note,
  compact = false,
}) {
  return (
    <div className={`card ${compact ? "p-4" : "p-5"} min-w-0`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[11px] text-[#77777f]">{label}</p>
          <div className="mt-2 flex items-end gap-1.5">
            <p
              className={`font-semibold tracking-[-0.035em] text-ink ${
                compact ? "text-[24px]" : "text-[28px]"
              }`}
            >
              {value}
            </p>
            {suffix && (
              <span className="mb-1 text-[10px] text-[#9999a0]">{suffix}</span>
            )}
          </div>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
          <FiBox size={18} />
        </span>
      </div>
      {(change || note) && (
        <div className="mt-3 flex items-center gap-1.5 text-[9px]">
          {change && (
            <span className="rounded-full bg-[#eaf9f1] px-1.5 py-0.5 font-medium text-success">
              {change}
            </span>
          )}
          {note && <span className="text-[#929299]">{note}</span>}
        </div>
      )}
    </div>
  );
}

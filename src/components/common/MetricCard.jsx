import { FiBox, FiChevronUp } from "react-icons/fi";

const iconByLabel = {
  "Active Shipments": "/assets/dashboard/active-shipments.svg",
  "Delivery Performance": "/assets/dashboard/delivery-performance.svg",
  Revenue: "/assets/dashboard/revenue.svg",
};

export default function MetricCard({
  label,
  value,
  suffix,
  change,
  note,
  compact = false,
}) {
  return (
    <div
      className={`card relative min-w-0 ${
        compact ? "p-4" : "h-[94px] px-4 py-[15px] md:h-[115px]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[11px] text-[#77777f] md:text-[10px]">{label}</p>
          <div className="mt-[7px] flex items-end gap-1.5">
            <p
              className={`font-semibold tracking-[-0.035em] text-ink ${
                compact ? "text-[24px]" : "text-[28px] md:text-[27px]"
              }`}
            >
              {value}
            </p>
            {suffix && (
              <span className="mb-1 text-[10px] text-[#9999a0]">{suffix}</span>
            )}
          </div>
        </div>
        <span
          className={`flex shrink-0 items-center justify-center bg-[#856DF3] text-white ${
            compact
              ? "h-10 w-10 rounded-lg"
              : "mt-0 h-[35px] w-[35px] rounded-[7px] md:mt-[17px] md:h-[39px] md:w-[39px]"
          }`}
        >
          {iconByLabel[label] ? (
            <img
              src={iconByLabel[label]}
              alt=""
              className="h-[21px] w-[21px]"
              aria-hidden="true"
            />
          ) : (
            <FiBox size={18} />
          )}
        </span>
      </div>
      {(change || note) && (
        <div className="absolute bottom-[19px] right-4 mt-0 flex items-center gap-1.5 text-[8px] md:static md:mt-[8px]">
          {change && (
            <>
              <span
                className="flex h-[16px] w-[16px] shrink-0 items-center justify-center bg-[#dff8e9] text-[#218d59]"
                style={{
                  clipPath:
                    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)",
                }}
              >
                <FiChevronUp size={9} strokeWidth={2.2} />
              </span>
              <span className="font-medium text-[#38ad73]">{change}</span>
            </>
          )}
          {note && <span className="text-[#929299]">{note}</span>}
        </div>
      )}
    </div>
  );
}

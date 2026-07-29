import { FiArrowDown, FiArrowUp, FiMoreHorizontal } from "react-icons/fi";

const iconByLabel = {
  "Total Shipments": "/assets/shipments/total.png",
  Pending: "/assets/shipments/pending.png",
  Delivery: "/assets/shipments/delivery.png",
  Completed: "/assets/shipments/completed.png",
};

const trendByLabel = {
  "Total Shipments": { direction: "up", percent: "4.6%", suffix: "this week" },
  Pending: { direction: "up", percent: "8.7%", suffix: "this week" },
  Delivery: { direction: "down", percent: "4.2%", suffix: "from last week" },
  Completed: { direction: "up", percent: "3.9%", suffix: "this week" },
};

export default function ShipmentSummaryCard({ item }) {
  const trend = trendByLabel[item.label];
  const isDown = trend.direction === "down";

  return (
    <article className="min-h-[96px] rounded-[11px] border border-[#ececef] bg-white px-3.5 py-3 shadow-card sm:min-h-[100px] md:min-h-[104px] md:px-4 md:py-3.5 xl:min-h-[109px]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] bg-[#efeaff] md:h-6 md:w-6">
            <img
              src={iconByLabel[item.label]}
              alt=""
              className="h-[14px] w-[14px] object-contain md:h-4 md:w-4"
            />
          </span>
          <p className="truncate text-[8px] font-normal text-[#77777e] sm:text-[9px] md:text-[10px]">
            {item.label}
          </p>
        </div>

        <button
          type="button"
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-[#f5f5f6] text-[#a2a2a8]"
          aria-label={`${item.label} options`}
        >
          <FiMoreHorizontal size={12} />
        </button>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2 md:mt-3.5">
        <p className="text-[23px] font-semibold leading-none tracking-[-0.035em] text-[#2d2d31] md:text-[25px] xl:text-[26px]">
          {item.value}
        </p>

        <div className="mb-0.5 flex min-w-0 items-start gap-1 text-[7px] leading-[1.25] text-[#99999f] sm:text-[8px]">
          <span
            className={`mt-[1px] flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full ${
              isDown
                ? "bg-[#f1efff] text-brand-600"
                : "bg-[#e9fbf2] text-[#39b97a]"
            }`}
          >
            {isDown ? <FiArrowDown size={8} /> : <FiArrowUp size={8} />}
          </span>
          <span className="whitespace-nowrap">
            {isDown ? "Down" : "Up by"}{" "}
            <strong
              className={`rounded-[3px] px-0.5 font-medium ${
                isDown
                  ? "bg-[#ece8ff] text-brand-700"
                  : "bg-[#ddf7ea] text-[#249c63]"
              }`}
            >
              {trend.percent}
            </strong>
            <span className="hidden sm:inline"> {trend.suffix}</span>
            <span className="block sm:hidden">{trend.suffix}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

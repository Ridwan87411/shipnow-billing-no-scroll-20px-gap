import { useState } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

const months = [
  { label: "Jan", x: 41.25 },
  { label: "Feb", x: 79.75 },
  { label: "Mar", x: 118.25 },
  { label: "Apr", x: 156.75 },
  { label: "May", x: 195.25 },
  { label: "Jun", x: 233.75 },
  { label: "Jul", x: 272.25 },
  { label: "Aug", x: 310.75 },
];

const ticks = [
  { label: "4.8K", y: 7 },
  { label: "3.6K", y: 34 },
  { label: "2.4K", y: 61 },
  { label: "1.2K", y: 88 },
  { label: "0K", y: 115 },
];

const chartBars = [
  { x: 22, y: 83, value: 1450 },
  { x: 60.5, y: 68, value: 1850 },
  { x: 99, y: 91, value: 1180 },
  { x: 137.5, y: 71, value: 1640 },
  { x: 176, y: 47, value: 3124 },
  { x: 214.5, y: 55, value: 2680 },
  { x: 253, y: 35, value: 3550 },
  { x: 291.5, y: 19, value: 4352 },
];

const periods = [
  { label: "Last 3 Months", count: 3 },
  { label: "Last 6 Months", count: 6 },
  { label: "Last 8 Months", count: 8 },
];

export default function ShipmentStatistic() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [period, setPeriod] = useState(periods[2]);
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleStart = chartBars.length - period.count;
  const activeBar = chartBars[activeIndex];
  const activeMonth = months[activeIndex];
  const totalShipments = chartBars
    .slice(visibleStart)
    .reduce((total, bar) => total + bar.value, 0);

  return (
    <section className="flex h-full min-h-[259px] min-w-0 flex-col overflow-visible rounded-[12px] bg-white p-[16px] shadow-card sm:min-h-[320px]">
      <div className="flex h-[28px] items-center justify-between">
        <h2
          className="font-medium text-[#2f2f34]"
          style={{ fontSize: "16px" }}
        >
          Shipment Statistic
        </h2>
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center justify-center gap-1 text-[#3f3f44]"
            style={{
              width: "105px",
              height: "28px",
              borderRadius: "8px",
              backgroundColor: "#F2F2F3",
              fontSize: "10px",
            }}
            aria-expanded={menuOpen}
            aria-haspopup="listbox"
          >
            {period.label}
            <FiChevronDown className={`transition ${menuOpen ? "rotate-180" : ""}`} size={10} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-[32px] z-30 w-[125px] overflow-hidden rounded-lg border border-line bg-white p-1 shadow-float" role="listbox">
              {periods.map((item) => (
                <button
                  key={item.count}
                  type="button"
                  onClick={() => {
                    setPeriod(item);
                    setActiveIndex(item.count >= 6 ? 4 : chartBars.length - 1);
                    setMenuOpen(false);
                  }}
                  className={`w-full rounded-md px-2.5 py-2 text-left text-[10px] ${
                    period.count === item.count ? "bg-brand-50 font-medium text-brand-700" : "text-[#555] hover:bg-[#f5f5f6]"
                  }`}
                  role="option"
                  aria-selected={period.count === item.count}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-[10px] flex h-[26px] items-center gap-[6px]">
        <span
          className="font-semibold leading-none tracking-[-0.025em] text-[#2d2d31]"
          style={{ fontSize: "26px" }}
        >
          {totalShipments.toLocaleString()}
        </span>
        <span
          className="inline-flex items-center font-medium text-[#29945f]"
          style={{
            height: "18px",
            gap: "3px",
            borderRadius: "999px",
            backgroundColor: "#E0F8EB",
            paddingInline: "6px",
            fontSize: "10px",
          }}
        >
          <FiArrowUpRight
            className="shrink-0 text-[#00A85A]"
            style={{ width: "12px", height: "12px" }}
            strokeWidth={2}
            aria-hidden="true"
          />
          +8.7%
        </span>
      </div>

      <div className="relative mt-auto h-[145px] w-full shrink-0 overflow-visible">
        <div
          className="absolute z-10 flex flex-col items-center"
          style={{
            left: `${((activeBar.x + 19.25) / 337) * 100}%`,
            top: `${Math.max(-15, activeBar.y - 62)}px`,
            width: "63px",
            height: "51px",
            borderRadius: "9px",
            backgroundColor: "#E3DDFF",
            transform: "translateX(-50%)",
          }}
        >
          <span className="mt-[7px] text-[9px] leading-none text-[#85858c]">
            {activeMonth.label} 2030
          </span>
          <strong className="mt-[7px] text-[13px] font-semibold leading-none text-[#333338]">
            {activeBar.value.toLocaleString()}
          </strong>
        </div>

        <svg
          viewBox="0 0 337 145"
          className="h-full w-full overflow-visible"
          role="img"
          aria-label="Shipment statistics from January through August, with May highlighted at 3,124 shipments"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="shipmentGrayArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9f9fa4" stopOpacity="0.78" />
              <stop offset="48%" stopColor="#d7d7da" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f5f5f6" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="shipmentMayArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8066F0" stopOpacity="1" />
              <stop offset="100%" stopColor="#e8e3ff" stopOpacity="0.38" />
            </linearGradient>
          </defs>

          {ticks.map((tick) => (
            <g key={tick.label}>
              <line
                x1="27"
                y1={tick.y}
                x2="330"
                y2={tick.y}
                stroke="#e9e9ec"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <text
                x="0"
                y={tick.y + 3}
                fill="#929298"
                fontSize="9"
                fontFamily="Inter, sans-serif"
              >
                {tick.label}
              </text>
            </g>
          ))}

          {chartBars.map((bar, index) => {
            if (index < visibleStart) return null;
            const highlighted = activeIndex === index;

            return (
            <g
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer"
              role="button"
              tabIndex="0"
              aria-label={`${months[index].label}: ${bar.value.toLocaleString()} shipments`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setActiveIndex(index);
              }}
            >
              <rect
                x={bar.x}
                y={bar.y}
                width="38.5"
                height={115 - bar.y}
                fill={
                  highlighted
                    ? "url(#shipmentMayArea)"
                    : "url(#shipmentGrayArea)"
                }
              />
              <line
                x1={bar.x}
                y1={bar.y}
                x2={bar.x + 38.5}
                y2={bar.y}
                stroke={highlighted ? "#8066F0" : "#29292d"}
                strokeWidth="1.6"
              />
              <rect x={bar.x} y="5" width="38.5" height="110" fill="transparent" />
            </g>
          )})}

          <circle
            cx={activeBar.x + 19.25}
            cy={activeBar.y}
            r="5.5"
            fill="#29292d"
            stroke="white"
            strokeWidth="1.6"
          />

          {months.map((month, index) => index >= visibleStart && (
            <text
              key={`${month.label}-${month.x}`}
              x={month.x}
              y="139"
              textAnchor="middle"
              fill="#8f8f95"
              fontSize="9"
              fontFamily="Inter, sans-serif"
            >
              {month.label}
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}

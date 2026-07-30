import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

const months = [
  { label: "Jan", x: 41.25 },
  { label: "Feb", x: 79.75 },
  { label: "Mar", x: 118.25 },
  { label: "Apr", x: 156.75 },
  { label: "May", x: 195.25 },
  { label: "Jan", x: 233.75 },
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
  { x: 22, y: 83 },
  { x: 60.5, y: 68 },
  { x: 99, y: 91 },
  { x: 137.5, y: 71 },
  { x: 176, y: 47, highlighted: true },
  { x: 214.5, y: 55 },
  { x: 253, y: 35 },
  { x: 291.5, y: 19 },
];

export default function ShipmentStatistic() {
  return (
    <section className="flex h-full min-h-[259px] min-w-0 flex-col overflow-hidden rounded-[12px] bg-white p-[16px] shadow-card sm:min-h-[320px]">
      <div className="flex h-[28px] items-center justify-between">
        <h2
          className="font-medium text-[#2f2f34]"
          style={{ fontSize: "16px" }}
        >
          Shipment Statistic
        </h2>
        <button
          type="button"
          className="flex items-center justify-center gap-1 text-[#3f3f44]"
          style={{
            width: "89px",
            height: "28px",
            borderRadius: "8px",
            backgroundColor: "#F2F2F3",
            fontSize: "10px",
          }}
        >
          Last Year
          <FiChevronDown size={10} />
        </button>
      </div>

      <div className="mt-[10px] flex h-[26px] items-center gap-[6px]">
        <span
          className="font-semibold leading-none tracking-[-0.025em] text-[#2d2d31]"
          style={{ fontSize: "26px" }}
        >
          4,352
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
            left: "48.59%",
            top: "-15px",
            width: "63px",
            height: "51px",
            borderRadius: "9px",
            backgroundColor: "#E3DDFF",
          }}
        >
          <span className="mt-[7px] text-[9px] leading-none text-[#85858c]">
            May 2030
          </span>
          <strong className="mt-[7px] text-[13px] font-semibold leading-none text-[#333338]">
            3,124
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
              <stop offset="0%" stopColor="#d8d8da" stopOpacity="0.52" />
              <stop offset="100%" stopColor="#f5f5f6" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="shipmentMayArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8066F0" />
              <stop offset="100%" stopColor="#d9d1ff" stopOpacity="0.2" />
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

          {chartBars.map((bar, index) => (
            <g key={index}>
              <rect
                x={bar.x}
                y={bar.y}
                width="38.5"
                height={115 - bar.y}
                fill={
                  bar.highlighted
                    ? "url(#shipmentMayArea)"
                    : "url(#shipmentGrayArea)"
                }
              />
              <line
                x1={bar.x}
                y1={bar.y}
                x2={bar.x + 38.5}
                y2={bar.y}
                stroke={bar.highlighted ? "#8066F0" : "#29292d"}
                strokeWidth="1.6"
              />
            </g>
          ))}

          <circle
            cx="195.25"
            cy="47"
            r="5.5"
            fill="#29292d"
            stroke="white"
            strokeWidth="1.6"
          />

          {months.map((month) => (
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

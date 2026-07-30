import { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { profitData } from "../../data/dashboard";
import SectionCard from "./SectionCard";

const periods = [
  { label: "Last 3 Months", count: 3 },
  { label: "Last 6 Months", count: 6 },
  { label: "Last 8 Months", count: 8 },
];

function ProfitTooltip({ item }) {
  if (!item) return null;

  return (
    <div className="w-[145px] -translate-y-8 rounded-[8px] border border-[#e5e5e8] bg-white px-3 py-2.5 text-[10px] shadow-float">
      <p className="mb-2 font-semibold text-[#333338]">{item.month} Summary</p>
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 text-[#77777d]">
          <i className="h-[7px] w-[7px] rounded-[2px] bg-[#856DF3]" />
          Revenue
        </span>
        <strong className="text-[#333338]">${item.revenue.toLocaleString()}</strong>
      </div>
      <div className="mt-1.5 flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 text-[#77777d]">
          <i className="h-[7px] w-[7px] rounded-[2px] bg-[#2d2d31]" />
          Cost
        </span>
        <strong className="text-[#333338]">${item.cost.toLocaleString()}</strong>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-[#ededf0] pt-2">
        <span className="font-medium text-[#77777d]">Profit</span>
        <strong className="text-[#29945f]">${(item.revenue - item.cost).toLocaleString()}</strong>
      </div>
    </div>
  );
}

export default function ProfitSummary() {
  const [period, setPeriod] = useState(periods[2]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(4);
  const visibleData = profitData.slice(-period.count);
  const selectedItem = visibleData[activeIndex];
  const totalProfit = visibleData.reduce(
    (total, item) => total + item.revenue - item.cost,
    0,
  );

  return (
    <SectionCard
      title="Profit Summary"
      className="h-full min-h-[259px] sm:min-h-[320px] [&_h2]:text-[16px]"
      action={
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-[28px] items-center gap-1 rounded-[8px] bg-[#f2f2f3] px-3 text-[10px] text-[#3f3f44]"
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
                    setMenuOpen(false);
                    setActiveIndex(null);
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
      }
    >
      <div className="mb-1 flex h-[30px] items-center gap-2">
        <span className="text-[26px] font-semibold leading-none">${totalProfit.toLocaleString()}</span>
        <span className="inline-flex h-[18px] items-center gap-1 rounded-full bg-[#e0f8eb] px-[6px] text-[10px] font-medium text-[#29945f]">
          <FiArrowUpRight size={11} />
          5.62%
        </span>
      </div>
      <div className="relative mt-1 h-[150px] sm:h-[180px]">
        <div className="absolute right-1 top-0 z-10 flex items-center gap-4 text-[9px] text-[#77777d]">
          <span className="flex items-center gap-1.5">
            <i className="h-[6px] w-[6px] rounded-[2px] bg-[#856DF3]" />
            Revenue
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-[6px] w-[6px] rounded-[2px] bg-[#2d2d31]" />
            Cost
          </span>
        </div>

        {selectedItem && (
          <div
            className="pointer-events-none absolute top-[18px] z-20"
            style={{
              left: `${((activeIndex + 0.5) / visibleData.length) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <ProfitTooltip item={selectedItem} />
          </div>
        )}

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={visibleData}
            margin={{ top: 36, right: 0, left: -16, bottom: 0 }}
            barGap={5}
          >
            <CartesianGrid stroke="#eeeeef" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 9, fill: "#88888e" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100000]}
              ticks={[0, 25000, 50000, 75000, 100000]}
              tick={{ fontSize: 8, fill: "#88888e" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${Math.round(v / 1000)}K`}
            />
            <Bar dataKey="revenue" radius={[4, 4, 0, 0]} barSize={20}>
              {visibleData.map((entry, index) => (
                <Cell
                  key={`revenue-${entry.month}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  fill={activeIndex === index ? "#856DF3" : "#DDD7FF"}
                  fillOpacity={activeIndex === null || activeIndex === index ? 1 : 0.55}
                />
              ))}
            </Bar>
            <Bar dataKey="cost" radius={[4, 4, 0, 0]} barSize={20}>
              {visibleData.map((entry, index) => (
                <Cell
                  key={`cost-${entry.month}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  fill={activeIndex === index ? "#2D2D31" : "#ECECEE"}
                  fillOpacity={activeIndex === null || activeIndex === index ? 1 : 0.55}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

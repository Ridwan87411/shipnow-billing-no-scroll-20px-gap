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

export default function ProfitSummary() {
  return (
    <SectionCard
      title="Profit Summary"
      className="h-full min-h-[259px] sm:min-h-[320px]"
      action={
        <button
          type="button"
          className="flex h-[28px] items-center gap-1 rounded-[8px] bg-[#f2f2f3] px-3 text-[10px] text-[#3f3f44]"
        >
          Last 8 Months
          <FiChevronDown size={10} />
        </button>
      }
    >
      <div className="mb-1 flex h-[30px] items-center gap-2">
        <span className="text-[26px] font-semibold leading-none">$624,550</span>
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

        <div
          className="absolute left-1/2 top-[24px] z-20 w-[125px] rounded-[8px] bg-[#F0F0F0] px-2.5 py-2 text-[9px] shadow-card"
          style={{ marginLeft: "10px" }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[#77777d]">
              <i className="h-[6px] w-[6px] rounded-[2px] bg-[#856DF3]" />
              Revenue
            </span>
            <strong className="text-[#333338]">$87,524</strong>
          </div>
          <div className="mt-1.5 flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[#77777d]">
              <i className="h-[6px] w-[6px] rounded-[2px] bg-[#2d2d31]" />
              Cost
            </span>
            <strong className="text-[#333338]">$45,680</strong>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={profitData}
            margin={{ top: 36, right: 0, left: -16, bottom: 0 }}
            barGap={5}
          >
            <CartesianGrid stroke="#eeeeef" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 9, fill: "#88888e" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(month) => (month === "Jun" ? "Jan" : month)}
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
              {profitData.map((entry) => (
                <Cell
                  key={`revenue-${entry.month}`}
                  fill={entry.month === "May" ? "#856DF3" : "#DDD7FF"}
                  fillOpacity={entry.month === "May" ? 1 : 0.72}
                />
              ))}
            </Bar>
            <Bar dataKey="cost" radius={[4, 4, 0, 0]} barSize={20}>
              {profitData.map((entry) => (
                <Cell
                  key={`cost-${entry.month}`}
                  fill={entry.month === "May" ? "#2D2D31" : "#ECECEE"}
                  fillOpacity={entry.month === "May" ? 1 : 0.82}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { profitData } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function ProfitSummary() {
  return (
    <SectionCard
      title="Profit Summary"
      action={
        <select className="rounded-md border border-line bg-[#f8f8f9] px-2 py-1 text-[9px] text-[#666]">
          <option>Last 8 Months</option>
        </select>
      }
    >
      <div className="mb-1 flex items-center gap-2">
        <span className="text-[22px] font-semibold">$624,550</span>
        <span className="rounded-full bg-[#eaf9f1] px-1.5 py-0.5 text-[9px] text-success">
          +5.62%
        </span>
      </div>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={profitData} margin={{ top: 8, right: 0, left: -12, bottom: 0 }}>
            <CartesianGrid stroke="#eeeeef" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#999" }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fontSize: 8, fill: "#aaa" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${Math.round(v / 1000)}K`}
            />
            <Tooltip
              formatter={(value) => `$${value.toLocaleString()}`}
              contentStyle={{ border: "1px solid #ececf0", borderRadius: 8, fontSize: 10 }}
            />
            <Legend iconSize={6} wrapperStyle={{ fontSize: 9, top: -26, right: 0 }} />
            <Bar dataKey="revenue" fill="#8268ef" radius={[2, 2, 0, 0]} />
            <Bar dataKey="cost" fill="#e2ddff" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

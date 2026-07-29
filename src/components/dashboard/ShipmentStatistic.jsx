import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { shipmentStats } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function ShipmentStatistic() {
  return (
    <SectionCard
      title="Shipment Statistic"
      action={
        <select className="rounded-md border border-line bg-[#f8f8f9] px-2 py-1 text-[9px] text-[#666]">
          <option>Last Year</option>
        </select>
      }
    >
      <div className="mb-1 flex items-center gap-2">
        <span className="text-[22px] font-semibold">4,352</span>
        <span className="rounded-full bg-[#eaf9f1] px-1.5 py-0.5 text-[9px] text-success">
          +8.7%
        </span>
      </div>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={shipmentStats} margin={{ top: 12, right: 4, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="#eeeeef" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#999" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 8, fill: "#aaa" }} axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ fill: "#f7f5ff" }}
              contentStyle={{
                border: "1px solid #ececf0",
                borderRadius: 8,
                fontSize: 10,
              }}
            />
            <Bar dataKey="value" fill="#d8d8da" radius={[2, 2, 0, 0]} />
            <Bar dataKey="value" fill="#8268ef" radius={[2, 2, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

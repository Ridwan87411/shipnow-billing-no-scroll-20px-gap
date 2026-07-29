import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { shipmentTypes } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function ShipmentType() {
  return (
    <SectionCard title="Shipment Type" className="h-full">
      <div className="relative mx-auto h-[180px] w-full max-w-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={shipmentTypes}
              dataKey="value"
              innerRadius={58}
              outerRadius={80}
              paddingAngle={0}
              stroke="none"
            >
              {shipmentTypes.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[9px] text-[#999]">Total Shipment</span>
          <span className="text-[24px] font-semibold">2,500</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {shipmentTypes.map((item) => (
          <div key={item.name} className="flex min-w-0 gap-2">
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[8px] font-semibold text-white"
              style={{ background: item.color }}
            >
              {item.percent}%
            </span>
            <div className="min-w-0">
              <p className="truncate text-[9px] font-medium">{item.name}</p>
              <p className="text-[8px] text-[#999]">{item.value.toLocaleString()} shipments</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

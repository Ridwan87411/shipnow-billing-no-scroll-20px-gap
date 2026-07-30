import { FiMoreHorizontal } from "react-icons/fi";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { shipmentTypes } from "../../data/dashboard";

export default function ShipmentType() {
  return (
    <section className="h-full min-w-0 rounded-[12px] border border-[#ececef] bg-white p-5 shadow-card">
      <div className="flex h-[38px] items-start justify-between">
        <h2 className="text-[20px] font-medium leading-[38px] text-[#303034]">
          Shipment Type
        </h2>
        <button
          type="button"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#f2f2f3] text-[#77777d]"
          aria-label="Shipment Type options"
        >
          <FiMoreHorizontal size={18} />
        </button>
      </div>

      <div className="relative mx-auto mt-4 h-[260px] w-full max-w-[290px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={shipmentTypes}
              dataKey="value"
              innerRadius="70%"
              outerRadius="91%"
              paddingAngle={0}
              startAngle={90}
              endAngle={-270}
              stroke="none"
              isAnimationActive={false}
            >
              {shipmentTypes.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[14px] text-[#8b8b91]">Total Shipment</span>
          <span className="mt-1 text-[32px] font-semibold leading-none tracking-[-0.025em] text-[#29292d]">
            2,500
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-5">
        {shipmentTypes.map((item) => (
          <div key={item.name} className="flex min-w-0 items-center gap-3">
            <span
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[8px] text-[13px] font-semibold"
              style={{
                backgroundColor: item.color,
                color: item.name === "Rail Freight" ? "#333338" : "#FFFFFF",
              }}
            >
              {item.percent}%
            </span>

            <div className="min-w-0">
              <p className="truncate text-[14px] font-medium leading-tight text-[#333338]">
                {item.name}
              </p>
              <p className="mt-1 whitespace-nowrap text-[12px] text-[#929298]">
                {item.value.toLocaleString()} shipments
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { FiMoreHorizontal } from "react-icons/fi";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { shipmentTypes } from "../../data/dashboard";

export default function ShipmentType() {
  return (
    <section className="h-[415px] min-w-0 overflow-hidden rounded-[12px] border border-[#ececef] bg-white p-4 shadow-card sm:h-full sm:p-5">
      <div className="flex h-7 items-start justify-between sm:h-[38px]">
        <h2 className="text-[16px] font-medium leading-7 text-[#303034] sm:text-[20px] sm:leading-[38px]">
          Shipment Type
        </h2>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#f2f2f3] text-[#77777d] sm:h-[38px] sm:w-[38px] sm:rounded-[10px]"
          aria-label="Shipment Type options"
        >
          <FiMoreHorizontal size={18} />
        </button>
      </div>

      <div className="relative mx-auto mt-3 h-[232px] w-full max-w-[250px] sm:mt-4 sm:h-[260px] sm:max-w-[290px]">
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

      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-4 sm:gap-x-5 sm:gap-y-5">
        {shipmentTypes.map((item) => (
          <div key={item.name} className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] text-[11px] font-semibold sm:h-[42px] sm:w-[42px] sm:rounded-[8px] sm:text-[13px]"
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

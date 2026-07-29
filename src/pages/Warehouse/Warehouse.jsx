import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MetricCard from "../../components/common/MetricCard";
import PageHeader from "../../components/common/PageHeader";
import WarehouseMap from "../../components/warehouse/WarehouseMap";
import { packageStatus, storageRows, storageTrend, warehouseActivity, warehouseMetrics } from "../../data/warehouse";

export default function Warehouse() {
  return (
    <div>
      <PageHeader title="Warehouse" breadcrumb="Warehouse" />

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {warehouseMetrics.map((item) => (
          <MetricCard key={item.label} label={item.label} value={item.value} note={item.sub} compact />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
        <section className="card p-4">
          <h2 className="section-title">Storage Utilization</h2>
          <div className="mt-3 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={storageTrend}>
                <CartesianGrid stroke="#eeeeef" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#999" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#999" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #ececf0", fontSize: 10 }} />
                <Bar dataKey="occupied" stackId="a" fill="#8068ef" />
                <Bar dataKey="available" stackId="a" fill="#e2ddff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="card p-4">
          <h2 className="section-title">Package Status</h2>
          <div className="relative h-[210px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={packageStatus} dataKey="value" innerRadius={55} outerRadius={80} stroke="none">
                  {packageStatus.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[9px] text-[#999]">Total Packages</span>
              <span className="text-[24px] font-semibold">8,742</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {packageStatus.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-[9px]">
                <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
                <span className="text-[#777]">{item.name}</span>
                <span className="ml-auto font-medium">{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <WarehouseMap />

        <section className="card p-4">
          <h2 className="section-title">Activity Log</h2>
          <div className="mt-4 space-y-3">
            {warehouseActivity.map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eee9ff] text-[9px] text-brand-700">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[10px] text-[#555]">{item}</p>
                  <p className="mt-1 text-[8px] text-[#aaa]">{10 + index}:2{index} AM</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="card mt-4 overflow-hidden">
        <div className="p-4"><h2 className="section-title">Storage Zones</h2></div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[700px] text-left text-[10px]">
            <thead className="bg-[#f8f8f9] text-[#777]">
              <tr>
                <th className="px-4 py-3 font-medium">Zone</th>
                <th className="px-4 py-3 font-medium">Storage Type</th>
                <th className="px-4 py-3 font-medium">Capacity</th>
                <th className="px-4 py-3 font-medium">Utilization</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {storageRows.map((row) => (
                <tr key={row.zone} className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-brand-600">{row.zone}</td>
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3">{row.capacity}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-28 rounded-full bg-[#ececef]">
                        <div className="h-full rounded-full bg-brand-600" style={{ width: `${row.used}%` }} />
                      </div>
                      {row.used}%
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-1 text-[9px] ${row.status === "High" ? "bg-[#fff1e4] text-[#a8611f]" : "bg-[#eaf9f1] text-success"}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

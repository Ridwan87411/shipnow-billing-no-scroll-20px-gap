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
import {
  FiAlertTriangle,
  FiArrowDown,
  FiArrowUp,
  FiBox,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiMapPin,
  FiPackage,
  FiTruck,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";
import WarehouseMap from "../../components/warehouse/WarehouseMap";
import {
  packageStatus,
  storageRows,
  storageTrend,
  warehouseMetrics,
} from "../../data/warehouse";

const metricIcons = [FiLayers, FiPackage, FiArrowUp, FiArrowDown];
const metricColors = [
  "bg-brand-50 text-brand-600",
  "bg-[#edf5ff] text-[#3370cf]",
  "bg-[#fff5e9] text-[#b96a22]",
  "bg-[#eaf9f1] text-[#248d5b]",
];

const dockStatus = [
  { dock: "Dock 01", task: "Unloading", shipment: "SH-9283746", progress: 72, tone: "blue" },
  { dock: "Dock 02", task: "Loading", shipment: "SH-9283791", progress: 48, tone: "purple" },
  { dock: "Dock 03", task: "Available", shipment: "Ready for assignment", progress: 0, tone: "green" },
  { dock: "Dock 04", task: "Inspection", shipment: "SH-9283814", progress: 88, tone: "orange" },
];

const dockColors = {
  blue: "bg-[#4d8df7]",
  purple: "bg-brand-600",
  green: "bg-success",
  orange: "bg-[#ee9b45]",
};

const liveActivities = [
  { title: "Inbound shipment received", detail: "148 packages received and verified", location: "Dock 04", reference: "SH-9283746", type: "Inbound", time: "2 min ago", tone: "blue" },
  { title: "Inventory count completed", detail: "920 occupied slots checked with no mismatch", location: "Zone A-01", reference: "INV-2035-184", type: "Inventory", time: "6 min ago", tone: "green" },
  { title: "Picking wave released", detail: "12 operators assigned to 86 customer orders", location: "Floor 1", reference: "PW-2035-071", type: "Picking", time: "11 min ago", tone: "purple" },
  { title: "Moved to outbound staging", detail: "64 parcels prepared for carrier handover", location: "Outbound Bay 02", reference: "Batch 7842", type: "Outbound", time: "18 min ago", tone: "orange" },
  { title: "Temperature check completed", detail: "Cold storage stable at 3.8°C with no exceptions", location: "Zone C-01", reference: "TEMP-0642", type: "Safety", time: "24 min ago", tone: "green" },
];

const activityStyles = {
  blue: "border-[#cfe2ff] bg-[#edf5ff] text-[#3370cf]",
  green: "border-[#cceedd] bg-[#eaf9f1] text-[#248d5b]",
  purple: "border-brand-200 bg-brand-50 text-brand-700",
  orange: "border-[#ffe0bd] bg-[#fff5e9] text-[#b96a22]",
};

function WarehouseMetric({ item, index }) {
  const Icon = metricIcons[index];

  return (
    <article className="card p-3 sm:p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-medium text-muted sm:text-[12px]">{item.label}</p>
          <p className="mt-2 text-[23px] font-semibold tracking-[-0.03em] text-ink sm:text-[27px]">{item.value}</p>
        </div>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${metricColors[index]}`}>
          <Icon className="text-[17px] sm:text-[20px]" />
        </span>
      </div>
      <p className="mt-2 truncate text-[9px] text-muted sm:text-[10px]">{item.sub}</p>
    </article>
  );
}

function UtilizationBar({ value }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#ececef]">
        <div
          className={`h-full rounded-full ${value >= 85 ? "bg-[#ee9b45]" : "bg-brand-600"}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-8 text-right text-[11px] font-semibold text-[#555]">{value}%</span>
    </div>
  );
}

export default function Warehouse() {
  return (
    <div>
      <PageHeader title="Warehouse" breadcrumb="Warehouse" />

      <div className="mb-4 md:hidden">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Warehouse</h1>
        <p className="mt-1 text-[12px] text-muted">Inventory, capacity, and dock operations</p>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {warehouseMetrics.map((item, index) => (
          <WarehouseMetric key={item.label} item={item} index={index} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.7fr)]">
        <section className="card min-w-0 p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-[15px] font-semibold text-ink sm:text-[17px]">Storage Utilization</h2>
              <p className="mt-1 text-[10px] text-muted sm:text-[11px]">Occupied and available capacity over six months</p>
            </div>
            <div className="flex gap-3 text-[9px] text-muted sm:text-[10px]">
              <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-brand-600" /> Occupied</span>
              <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-brand-200" /> Available</span>
            </div>
          </div>
          <div className="mt-4 h-[230px] sm:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={storageTrend} barSize={24}>
                <CartesianGrid stroke="#eeeeef" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#888" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#999" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #ececf0", fontSize: 11 }} />
                <Bar dataKey="occupied" stackId="a" fill="#7c63ef" radius={[0, 0, 3, 3]} />
                <Bar dataKey="available" stackId="a" fill="#ddd5ff" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="card p-3 sm:p-4">
          <div>
            <h2 className="text-[15px] font-semibold text-ink sm:text-[17px]">Package Status</h2>
            <p className="mt-1 text-[10px] text-muted sm:text-[11px]">Current warehouse processing stages</p>
          </div>
          <div className="relative h-[205px] sm:h-[225px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={packageStatus} dataKey="value" innerRadius={58} outerRadius={82} stroke="none">
                  {packageStatus.map((item) => <Cell key={item.name} fill={item.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] text-muted">Total Packages</span>
              <span className="mt-1 text-[25px] font-semibold text-ink">8,742</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {packageStatus.map((item) => (
              <div key={item.name} className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: item.color }} />
                  <span className="truncate text-[10px] text-muted">{item.name}</span>
                </div>
                <p className="ml-[18px] mt-1 text-[12px] font-semibold text-[#444]">{item.value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
        <div className="min-w-0 xl:col-span-2">
          <WarehouseMap />
        </div>

        <section className="card min-w-0 overflow-hidden xl:col-span-2">
          <div className="flex items-center justify-between border-b border-[#dfe7fb] bg-gradient-to-r from-[#f1f5ff] to-brand-50 p-4 sm:p-5">
            <div>
              <h2 className="text-[19px] font-semibold text-ink sm:text-[22px]">Live Activity</h2>
              <p className="mt-1 text-[12px] text-[#667085] sm:text-[13px]">Detailed real-time warehouse operations</p>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-[#eaf9f1] px-3 py-1.5 text-[11px] font-semibold text-success">
              <i className="h-2 w-2 animate-pulse rounded-full bg-success" /> Live
            </span>
          </div>

          <div className="grid gap-3 p-3 md:hidden">
            {liveActivities.map((item) => (
              <article key={item.reference} className={`rounded-xl border p-4 ${activityStyles[item.tone]}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide">{item.type}</span>
                    <h3 className="mt-1 text-[15px] font-semibold text-ink">{item.title}</h3>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 text-[11px] font-medium"><FiClock /> {item.time}</span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-[#555]">{item.detail}</p>
                <div className="mt-3 flex flex-wrap justify-between gap-2 border-t border-current/15 pt-3 text-[11px] font-medium">
                  <span className="flex items-center gap-1"><FiMapPin /> {item.location}</span>
                  <span>{item.reference}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block scrollbar-thin">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-[#f7f9ff] text-[11px] uppercase tracking-wide text-[#65749a]">
                <tr>
                  <th className="px-5 py-4 font-semibold">Activity</th>
                  <th className="px-5 py-4 font-semibold">Details</th>
                  <th className="px-5 py-4 font-semibold">Location</th>
                  <th className="px-5 py-4 font-semibold">Reference</th>
                  <th className="px-5 py-4 font-semibold">Type</th>
                  <th className="px-5 py-4 font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                {liveActivities.map((item) => (
                  <tr key={item.reference} className="border-t border-line text-[13px] transition hover:bg-[#fafbff]">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-[14px] text-ink">{item.title}</p>
                    </td>
                    <td className="max-w-[290px] px-5 py-4 leading-relaxed text-[#5d5d63]">{item.detail}</td>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-1.5 whitespace-nowrap font-medium text-[#555]"><FiMapPin className="text-brand-600" /> {item.location}</span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-brand-600">{item.reference}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex rounded-full border px-3 py-1.5 text-[11px] font-semibold ${activityStyles[item.tone]}`}>{item.type}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-1.5 whitespace-nowrap font-medium text-muted"><FiClock /> {item.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="card mt-4 overflow-hidden">
        <div className="flex flex-col gap-2 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[15px] font-semibold text-ink sm:text-[17px]">Storage Zones</h2>
            <p className="mt-1 text-[10px] text-muted">Capacity and utilization by warehouse zone</p>
          </div>
          <span className="self-start rounded-full bg-[#fff5e9] px-2.5 py-1 text-[9px] font-semibold text-[#b96a22]">
            2 high-capacity alerts
          </span>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-2 md:hidden">
          {storageRows.map((row) => (
            <article key={row.zone} className="rounded-xl border border-line p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[15px] font-semibold text-brand-600">{row.zone}</p>
                  <p className="mt-1 text-[10px] text-muted">{row.type}</p>
                </div>
                <span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${row.status === "High" ? "bg-[#fff1e4] text-[#a8611f]" : "bg-[#eaf9f1] text-success"}`}>
                  {row.status}
                </span>
              </div>
              <p className="mt-3 text-[10px] text-muted">Capacity <span className="float-right font-medium text-[#555]">{row.capacity}</span></p>
              <div className="mt-2"><UtilizationBar value={row.used} /></div>
            </article>
          ))}
        </div>

        <div className="hidden overflow-x-auto md:block scrollbar-thin">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-[#f8f8f9] text-[10px] uppercase tracking-wide text-[#777]">
              <tr>
                <th className="px-4 py-3 font-semibold">Zone</th>
                <th className="px-4 py-3 font-semibold">Storage Type</th>
                <th className="px-4 py-3 font-semibold">Capacity</th>
                <th className="px-4 py-3 font-semibold">Utilization</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {storageRows.map((row) => (
                <tr key={row.zone} className="border-t border-line text-[12px] transition hover:bg-brand-50/40">
                  <td className="px-4 py-4 font-semibold text-brand-600">{row.zone}</td>
                  <td className="px-4 py-4 font-medium text-[#555]">{row.type}</td>
                  <td className="px-4 py-4 text-muted">{row.capacity}</td>
                  <td className="w-[260px] px-4 py-4"><UtilizationBar value={row.used} /></td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${row.status === "High" ? "bg-[#fff1e4] text-[#a8611f]" : "bg-[#eaf9f1] text-success"}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="card p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-ink sm:text-[17px]">Dock Operations</h2>
              <p className="mt-1 text-[10px] text-muted">Real-time loading bay status</p>
            </div>
            <FiTruck className="text-[20px] text-brand-600" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {dockStatus.map((dock) => (
              <article key={dock.dock} className="rounded-xl border border-line p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] font-semibold text-ink">{dock.dock}</p>
                    <p className="mt-1 text-[10px] text-muted">{dock.shipment}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#555]">
                    <i className={`h-2 w-2 rounded-full ${dockColors[dock.tone]}`} /> {dock.task}
                  </span>
                </div>
                {dock.progress > 0 ? (
                  <div className="mt-3">
                    <div className="mb-1.5 flex justify-between text-[9px] text-muted"><span>Progress</span><span>{dock.progress}%</span></div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#ececef]">
                      <div className={`h-full rounded-full ${dockColors[dock.tone]}`} style={{ width: `${dock.progress}%` }} />
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-success"><FiCheckCircle /> Ready for next vehicle</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="card p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff5e9] text-[#b96a22]"><FiAlertTriangle /></span>
            <div>
              <h2 className="text-[15px] font-semibold text-ink">Operational Alerts</h2>
              <p className="mt-0.5 text-[10px] text-muted">Items requiring attention</p>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-[#ffe0bd] bg-[#fffaf4] p-3">
              <p className="text-[11px] font-semibold text-[#8e551e]">Zone A-01 at 92% capacity</p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#9b744e]">Move overflow inventory to Zone B-02.</p>
            </div>
            <div className="rounded-xl border border-[#ffe0bd] bg-[#fffaf4] p-3">
              <p className="text-[11px] font-semibold text-[#8e551e]">Zone C-01 temperature review</p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#9b744e]">Next sensor inspection due in 45 minutes.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

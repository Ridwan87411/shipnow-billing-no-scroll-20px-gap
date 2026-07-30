import { useState } from "react";
import {
  Area,
  AreaChart,
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
  FiArrowDownRight,
  FiArrowUpRight,
  FiBox,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiDownload,
  FiMap,
  FiTruck,
  FiTrendingUp,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";

const summary = [
  { label: "Total Revenue", value: "$248.6K", change: "+12.8%", direction: "up", note: "vs previous period", icon: FiDollarSign, tone: "purple" },
  { label: "Total Shipments", value: "18,429", change: "+8.4%", direction: "up", note: "1,426 more shipments", icon: FiBox, tone: "blue" },
  { label: "On-Time Delivery", value: "94.7%", change: "+2.1%", direction: "up", note: "Above 92% target", icon: FiCheckCircle, tone: "green" },
  { label: "Average Transit", value: "2.8 days", change: "-6.3%", direction: "down", note: "4.5 hours faster", icon: FiClock, tone: "orange" },
];

const performanceData = [
  { month: "Jan", revenue: 156, shipments: 1120 },
  { month: "Feb", revenue: 171, shipments: 1280 },
  { month: "Mar", revenue: 168, shipments: 1350 },
  { month: "Apr", revenue: 194, shipments: 1490 },
  { month: "May", revenue: 211, shipments: 1630 },
  { month: "Jun", revenue: 205, shipments: 1580 },
  { month: "Jul", revenue: 236, shipments: 1810 },
  { month: "Aug", revenue: 249, shipments: 1920 },
  { month: "Sep", revenue: 261, shipments: 2040 },
  { month: "Oct", revenue: 278, shipments: 2190 },
  { month: "Nov", revenue: 291, shipments: 2320 },
  { month: "Dec", revenue: 318, shipments: 2689 },
];

const weeklyDelivery = [
  { day: "Mon", onTime: 94, delayed: 6 },
  { day: "Tue", onTime: 91, delayed: 9 },
  { day: "Wed", onTime: 96, delayed: 4 },
  { day: "Thu", onTime: 93, delayed: 7 },
  { day: "Fri", onTime: 97, delayed: 3 },
  { day: "Sat", onTime: 95, delayed: 5 },
  { day: "Sun", onTime: 92, delayed: 8 },
];

const routeDistribution = [
  { name: "Dhaka–Chattogram", value: 32, color: "#7c63ef" },
  { name: "Dhaka–Sylhet", value: 24, color: "#4d8df7" },
  { name: "Dhaka–Rajshahi", value: 18, color: "#2fbd77" },
  { name: "Dhaka–Khulna", value: 15, color: "#ee9b45" },
  { name: "Other Routes", value: 11, color: "#c4b5ff" },
];

const carriers = [
  { name: "ShipNow Express", shipments: "4,862", onTime: 97.8, cost: "$8.42", rating: "4.9", status: "Excellent" },
  { name: "Rapid Freight", shipments: "3,748", onTime: 95.4, cost: "$9.16", rating: "4.7", status: "Excellent" },
  { name: "Delta Logistics", shipments: "3,105", onTime: 92.8, cost: "$7.94", rating: "4.5", status: "Good" },
  { name: "Eastern Cargo", shipments: "2,849", onTime: 90.6, cost: "$8.78", rating: "4.3", status: "Good" },
  { name: "City Transport", shipments: "2,214", onTime: 86.9, cost: "$7.68", rating: "4.0", status: "Review" },
];

const toneStyles = {
  purple: "bg-brand-50 text-brand-600",
  blue: "bg-[#edf5ff] text-[#3370cf]",
  green: "bg-[#eaf9f1] text-[#248d5b]",
  orange: "bg-[#fff5e9] text-[#b96a22]",
};

const statusStyles = {
  Excellent: "bg-[#eaf9f1] text-[#248d5b]",
  Good: "bg-[#edf5ff] text-[#3370cf]",
  Review: "bg-[#fff5e9] text-[#b96a22]",
};

function SummaryCard({ item }) {
  const Icon = item.icon;
  const ChangeIcon = item.direction === "up" ? FiArrowUpRight : FiArrowDownRight;

  return (
    <article className="card p-3 sm:p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium text-muted sm:text-[12px]">{item.label}</p>
          <p className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-ink sm:text-[27px]">{item.value}</p>
        </div>
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${toneStyles[item.tone]}`}><Icon /></span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[9px] sm:text-[10px]">
        <span className={`flex items-center gap-0.5 font-semibold ${item.direction === "up" || item.label === "Average Transit" ? "text-success" : "text-danger"}`}><ChangeIcon /> {item.change}</span>
        <span className="text-muted">{item.note}</span>
      </div>
    </article>
  );
}

export default function Analytics() {
  const [range, setRange] = useState("12 Months");
  const visiblePerformance = range === "3 Months"
    ? performanceData.slice(-3)
    : range === "6 Months" ? performanceData.slice(-6) : performanceData;

  return (
    <div>
      <PageHeader
        title="Analytics"
        breadcrumb="Analytics"
        action={<button className="flex h-9 items-center gap-2 rounded-lg bg-brand-600 px-4 text-[11px] font-medium text-white"><FiDownload /> Export Report</button>}
      />

      <div className="mb-4 flex flex-col gap-3 md:hidden">
        <div>
          <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Analytics</h1>
          <p className="mt-1 text-[12px] text-muted">Business and delivery performance</p>
        </div>
        <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 text-[12px] font-medium text-white"><FiDownload /> Export Report</button>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {summary.map((item) => <SummaryCard key={item.label} item={item} />)}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(290px,0.6fr)]">
        <section className="card min-w-0 p-3 sm:p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[16px] font-semibold text-ink sm:text-[18px]">Revenue & Shipment Growth</h2>
              <p className="mt-1 text-[10px] text-muted sm:text-[11px]">Monthly operational performance</p>
            </div>
            <div className="flex rounded-lg bg-[#f3f3f4] p-1">
              {["3 Months", "6 Months", "12 Months"].map((item) => (
                <button
                  key={item}
                  onClick={() => setRange(item)}
                  className={`flex-1 whitespace-nowrap rounded-md px-2.5 py-1.5 text-[9px] font-medium sm:text-[10px] ${range === item ? "bg-white text-brand-700 shadow-sm" : "text-muted"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 h-[250px] sm:h-[310px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={visiblePerformance}>
                <defs>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c63ef" stopOpacity={0.32} /><stop offset="100%" stopColor="#7c63ef" stopOpacity={0.02} /></linearGradient>
                </defs>
                <CartesianGrid stroke="#eeeeef" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#888" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#999" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #ececf0", fontSize: 11 }} />
                <Area type="monotone" dataKey="revenue" stroke="#7c63ef" strokeWidth={2.5} fill="url(#revenueFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-5 text-[10px] text-muted"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-brand-600" /> Revenue ($K)</span></div>
        </section>

        <section className="card p-3 sm:p-4">
          <div>
            <h2 className="text-[16px] font-semibold text-ink sm:text-[18px]">Route Distribution</h2>
            <p className="mt-1 text-[10px] text-muted sm:text-[11px]">Shipment volume by major route</p>
          </div>
          <div className="relative h-[210px] sm:h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={routeDistribution} dataKey="value" innerRadius={58} outerRadius={86} paddingAngle={2} stroke="none">
                  {routeDistribution.map((item) => <Cell key={item.name} fill={item.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <FiMap className="text-[18px] text-brand-600" />
              <span className="mt-1 text-[22px] font-semibold text-ink">42</span>
              <span className="text-[9px] text-muted">Active routes</span>
            </div>
          </div>
          <div className="space-y-2.5">
            {routeDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-[10px]">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                <span className="min-w-0 flex-1 truncate text-muted">{item.name}</span>
                <span className="font-semibold text-[#444]">{item.value}%</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="card min-w-0 p-3 sm:p-4">
          <h2 className="text-[16px] font-semibold text-ink sm:text-[18px]">Weekly Delivery Performance</h2>
          <p className="mt-1 text-[10px] text-muted sm:text-[11px]">On-time versus delayed delivery percentage</p>
          <div className="mt-4 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyDelivery} barSize={22}>
                <CartesianGrid stroke="#eeeeef" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#888" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#999" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #ececf0", fontSize: 11 }} />
                <Bar dataKey="onTime" stackId="delivery" fill="#2fbd77" radius={[0, 0, 3, 3]} />
                <Bar dataKey="delayed" stackId="delivery" fill="#f0b15d" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-5 text-[10px] text-muted">
            <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-success" /> On time</span>
            <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#f0b15d]" /> Delayed</span>
          </div>
        </section>

        <section className="card p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><FiTrendingUp /></span>
            <div>
              <h2 className="text-[17px] font-semibold text-ink">Performance Insights</h2>
              <p className="mt-0.5 text-[10px] text-muted">Automated operational highlights</p>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <article className="rounded-xl border border-[#cceedd] bg-[#f5fcf8] p-3">
              <p className="text-[12px] font-semibold text-[#247c52]">Delivery performance improved</p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#5b7f6d]">On-time delivery increased by 2.1%, led by Dhaka–Chattogram routes.</p>
            </article>
            <article className="rounded-xl border border-brand-200 bg-brand-50 p-3">
              <p className="text-[12px] font-semibold text-brand-800">Revenue growth remains strong</p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#7367a8]">Express freight contributed 38% of this period’s revenue increase.</p>
            </article>
            <article className="rounded-xl border border-[#ffe0bd] bg-[#fffaf4] p-3">
              <p className="text-[12px] font-semibold text-[#9b5a1c]">Carrier review recommended</p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#9b744e]">City Transport is 5.4% below the on-time performance target.</p>
            </article>
          </div>
        </section>
      </div>

      <section className="card mt-4 overflow-hidden">
        <div className="flex items-center justify-between border-b border-line p-4 sm:p-5">
          <div>
            <h2 className="text-[16px] font-semibold text-ink sm:text-[18px]">Carrier Performance</h2>
            <p className="mt-1 text-[10px] text-muted sm:text-[11px]">Shipment volume, cost, and service quality</p>
          </div>
          <FiTruck className="text-[21px] text-brand-600" />
        </div>

        <div className="grid gap-3 p-3 md:hidden">
          {carriers.map((carrier) => (
            <article key={carrier.name} className="rounded-xl border border-line p-3">
              <div className="flex items-start justify-between gap-2">
                <div><p className="text-[13px] font-semibold text-ink">{carrier.name}</p><p className="mt-1 text-[10px] text-muted">{carrier.shipments} shipments</p></div>
                <span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${statusStyles[carrier.status]}`}>{carrier.status}</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-line pt-3 text-center">
                <div><p className="text-[9px] text-muted">On time</p><p className="mt-1 text-[12px] font-semibold">{carrier.onTime}%</p></div>
                <div><p className="text-[9px] text-muted">Avg. cost</p><p className="mt-1 text-[12px] font-semibold">{carrier.cost}</p></div>
                <div><p className="text-[9px] text-muted">Rating</p><p className="mt-1 text-[12px] font-semibold">{carrier.rating}</p></div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden overflow-x-auto md:block scrollbar-thin">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-[#f8f8f9] text-[10px] uppercase tracking-wide text-muted">
              <tr><th className="px-5 py-3 font-semibold">Carrier</th><th className="px-5 py-3 font-semibold">Shipments</th><th className="px-5 py-3 font-semibold">On-Time Rate</th><th className="px-5 py-3 font-semibold">Average Cost</th><th className="px-5 py-3 font-semibold">Rating</th><th className="px-5 py-3 font-semibold">Performance</th></tr>
            </thead>
            <tbody>
              {carriers.map((carrier) => (
                <tr key={carrier.name} className="border-t border-line text-[12px] hover:bg-brand-50/30">
                  <td className="px-5 py-4 font-semibold text-ink">{carrier.name}</td>
                  <td className="px-5 py-4 text-[#555]">{carrier.shipments}</td>
                  <td className="px-5 py-4"><span className="font-semibold text-success">{carrier.onTime}%</span></td>
                  <td className="px-5 py-4 text-[#555]">{carrier.cost}</td>
                  <td className="px-5 py-4 font-semibold text-[#555]">{carrier.rating} / 5</td>
                  <td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${statusStyles[carrier.status]}`}>{carrier.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import {
  FiAlertTriangle,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiPackage,
  FiSettings,
  FiTruck,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";

const initialNotifications = [
  { id: 1, title: "Shipment delivered successfully", detail: "Shipment SH9283852 was delivered to Gazipur Business Park and signed by M. Rahman.", time: "8 minutes ago", category: "Delivery", unread: true, icon: FiCheckCircle, tone: "green" },
  { id: 2, title: "Delivery delay detected", detail: "Shipment SH9283814 is delayed by approximately 45 minutes due to traffic near Rangpur.", time: "24 minutes ago", category: "Alert", unread: true, icon: FiAlertTriangle, tone: "orange" },
  { id: 3, title: "New shipment assigned", detail: "Shipment SH9283901 has been assigned to driver Arif Hossain and vehicle DHA-18-4582.", time: "1 hour ago", category: "Assignment", unread: true, icon: FiTruck, tone: "purple" },
  { id: 4, title: "Package arrived at warehouse", detail: "A batch of 148 packages arrived at Dhaka Warehouse Dock 04 and is ready for inspection.", time: "2 hours ago", category: "Warehouse", unread: true, icon: FiPackage, tone: "blue" },
  { id: 5, title: "Maintenance reminder", detail: "Fleet vehicle FLT-208 is scheduled for its preventive maintenance inspection tomorrow at 9:00 AM.", time: "Yesterday", category: "Maintenance", unread: true, icon: FiSettings, tone: "gray" },
];

const tones = {
  green: "border-[#cceedd] bg-[#eaf9f1] text-[#248d5b]",
  orange: "border-[#ffe0bd] bg-[#fff5e9] text-[#b96a22]",
  purple: "border-brand-200 bg-brand-50 text-brand-700",
  blue: "border-[#cfe2ff] bg-[#edf5ff] text-[#3370cf]",
  gray: "border-[#e1e1e4] bg-[#f3f3f4] text-[#666]",
};

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("All");
  const visible = filter === "Unread" ? notifications.filter((item) => item.unread) : notifications;
  const unreadCount = notifications.filter((item) => item.unread).length;

  const markRead = (id) => setNotifications((items) => items.map((item) => item.id === id ? { ...item, unread: false } : item));
  const markAllRead = () => setNotifications((items) => items.map((item) => ({ ...item, unread: false })));

  return (
    <div>
      <PageHeader
        title="Notifications"
        breadcrumb="Notifications"
        action={<button onClick={markAllRead} className="flex h-9 items-center gap-2 rounded-lg bg-brand-600 px-4 text-[11px] font-medium text-white"><FiCheck /> Mark all as read</button>}
      />
      <div className="mb-4 flex flex-col gap-3 md:hidden">
        <div><h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Notifications</h1><p className="mt-1 text-[12px] text-muted">Five recent operational updates</p></div>
        <button onClick={markAllRead} className="flex h-10 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 text-[12px] font-medium text-white"><FiCheck /> Mark all as read</button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="card overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div><h2 className="text-[17px] font-semibold text-ink">Recent Notifications</h2><p className="mt-1 text-[11px] text-muted">{notifications.length} total · {unreadCount} unread</p></div>
            <div className="flex rounded-lg bg-[#f3f3f4] p-1">
              {["All", "Unread"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`flex-1 rounded-md px-4 py-1.5 text-[10px] font-medium ${filter === item ? "bg-white text-brand-700 shadow-sm" : "text-muted"}`}>{item}</button>)}
            </div>
          </div>
          <div className="divide-y divide-line">
            {visible.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.id} className={`relative flex flex-col gap-3 p-4 transition sm:flex-row sm:items-start sm:gap-4 sm:p-5 ${item.unread ? "bg-brand-50/35" : "bg-white"}`}>
                  {item.unread && <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-brand-600 sm:left-2 sm:right-auto sm:top-1/2 sm:-translate-y-1/2" />}
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-[18px] ${tones[item.tone]}`}><Icon /></span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div><h3 className="text-[14px] font-semibold text-ink sm:text-[15px]">{item.title}</h3><span className={`mt-1.5 inline-flex rounded-full border px-2 py-1 text-[9px] font-semibold ${tones[item.tone]}`}>{item.category}</span></div>
                      <span className="flex shrink-0 items-center gap-1.5 text-[10px] text-muted"><FiClock /> {item.time}</span>
                    </div>
                    <p className="mt-2 text-[12px] leading-relaxed text-[#606067] sm:text-[13px]">{item.detail}</p>
                    {item.unread && <button onClick={() => markRead(item.id)} className="mt-3 text-[10px] font-semibold text-brand-600 hover:text-brand-800">Mark as read</button>}
                  </div>
                </article>
              );
            })}
            {!visible.length && <div className="p-12 text-center"><FiCheckCircle className="mx-auto text-[28px] text-success" /><p className="mt-3 text-[13px] font-semibold text-ink">You’re all caught up</p><p className="mt-1 text-[10px] text-muted">There are no unread notifications.</p></div>}
          </div>
        </section>

        <aside className="space-y-4">
          <section className="card p-4">
            <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><FiBell /></span><div><p className="text-[22px] font-semibold text-ink">{unreadCount}</p><p className="text-[10px] text-muted">Unread notifications</p></div></div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#ececef]"><div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${(unreadCount / notifications.length) * 100}%` }} /></div>
          </section>
          <section className="card p-4">
            <h2 className="text-[15px] font-semibold text-ink">Notification Summary</h2>
            <div className="mt-4 space-y-3">
              {["Delivery", "Alert", "Assignment", "Warehouse", "Maintenance"].map((category, index) => <div key={category} className="flex items-center justify-between text-[11px]"><span className="text-muted">{category}</span><span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#f3f3f4] px-2 font-semibold text-[#555]">{notifications.filter((item) => item.category === category).length}</span></div>)}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

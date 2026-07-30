import { useState } from "react";
import {
  FiBox,
  FiCheck,
  FiClock,
  FiCopy,
  FiMapPin,
  FiNavigation,
  FiPackage,
  FiPhone,
  FiSearch,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";

const shipments = [
  {
    tracking: "SH9283746",
    status: "In Transit",
    progress: 72,
    eta: "Today, 4:30 PM",
    origin: "Dhaka Distribution Hub",
    destination: "Chattogram Central Hub",
    currentLocation: "Cumilla Highway Checkpoint",
    updated: "8 minutes ago",
    package: "Electronics · 4 cartons",
    weight: "86.5 kg",
    service: "Express Freight",
    driver: "Arif Hossain",
    vehicle: "DHA-18-4582",
    phone: "+880 1712-345678",
  },
  {
    tracking: "SH9283791",
    status: "Out for Delivery",
    progress: 90,
    eta: "Today, 2:15 PM",
    origin: "Sylhet Regional Hub",
    destination: "Mymensingh City Center",
    currentLocation: "Mymensingh Bypass",
    updated: "4 minutes ago",
    package: "Apparel · 8 cartons",
    weight: "124 kg",
    service: "Priority Delivery",
    driver: "Fahim Islam",
    vehicle: "SYL-13-2859",
    phone: "+880 1918-996378",
  },
  {
    tracking: "SH9283814",
    status: "At Warehouse",
    progress: 45,
    eta: "Tomorrow, 11:00 AM",
    origin: "Rajshahi North Depot",
    destination: "Rangpur Logistics Center",
    currentLocation: "Rajshahi Warehouse",
    updated: "22 minutes ago",
    package: "Home & Kitchen · 12 cartons",
    weight: "208 kg",
    service: "Standard Freight",
    driver: "Nayeem Uddin",
    vehicle: "RAJ-19-7316",
    phone: "+880 1619-107489",
  },
  {
    tracking: "SH9283852",
    status: "Delivered",
    progress: 100,
    eta: "Delivered at 10:42 AM",
    origin: "Dhaka Central Hub",
    destination: "Gazipur Business Park",
    currentLocation: "Gazipur Business Park",
    updated: "1 hour ago",
    package: "Perishables · 6 cartons",
    weight: "74 kg",
    service: "Cold Chain",
    driver: "Sohel Rana",
    vehicle: "DHA-22-1649",
    phone: "+880 1623-541823",
  },
];

const statusStyles = {
  "In Transit": "bg-brand-50 text-brand-700",
  "Out for Delivery": "bg-[#edf5ff] text-[#3370cf]",
  "At Warehouse": "bg-[#fff5e9] text-[#b96a22]",
  Delivered: "bg-[#eaf9f1] text-[#248d5b]",
};

function createTimeline(shipment) {
  const complete = shipment.progress === 100;
  return [
    { title: "Shipment created", detail: `Order registered at ${shipment.origin}`, time: "Mar 20 · 8:20 AM", done: true },
    { title: "Package received", detail: "Package scanned and verified at origin warehouse", time: "Mar 20 · 10:05 AM", done: true },
    { title: "Departed origin facility", detail: `Vehicle ${shipment.vehicle} assigned to shipment`, time: "Mar 20 · 1:30 PM", done: shipment.progress >= 45 },
    { title: shipment.status === "Delivered" ? "Delivered successfully" : "In transit to destination", detail: shipment.currentLocation, time: shipment.updated, done: shipment.progress >= 70, active: shipment.status !== "Delivered" },
    { title: "Delivery completed", detail: shipment.destination, time: complete ? shipment.eta : `Estimated ${shipment.eta}`, done: complete },
  ];
}

function DetailItem({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f5f4fb] text-brand-600"><Icon /></span>
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-wide text-muted">{label}</p>
        <p className="mt-1 text-[12px] font-semibold text-[#444] sm:text-[13px]">{value}</p>
      </div>
    </div>
  );
}

export default function Tracking() {
  const [selected, setSelected] = useState(shipments[0]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const timeline = createTimeline(selected);

  const findShipment = (event) => {
    event.preventDefault();
    const match = shipments.find((shipment) => shipment.tracking.toLowerCase() === query.trim().toLowerCase());
    if (match) {
      setSelected(match);
      setMessage("");
    } else {
      setMessage("Tracking number not found. Try SH9283746.");
    }
  };

  return (
    <div>
      <PageHeader title="Tracking" breadcrumb="Tracking" />

      <div className="mb-4 md:hidden">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Tracking</h1>
        <p className="mt-1 text-[12px] text-muted">Track shipments and delivery progress</p>
      </div>

      <section className="overflow-hidden rounded-card bg-gradient-to-r from-[#5d46cb] to-[#8b73f4] p-4 text-white shadow-card sm:p-6">
        <div className="mx-auto max-w-[760px] text-center">
          <FiNavigation className="mx-auto text-[26px] text-white/90" />
          <h2 className="mt-2 text-[20px] font-semibold sm:text-[25px]">Track your shipment</h2>
          <p className="mt-1 text-[11px] text-white/75 sm:text-[13px]">Enter a ShipNow tracking number for real-time delivery information.</p>
          <form onSubmit={findShipment} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <label className="relative flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Enter tracking number (e.g. SH9283746)"
                className="h-12 w-full rounded-lg border-0 bg-white pl-10 pr-4 text-[13px] text-ink placeholder:text-[#aaa]"
              />
            </label>
            <button className="h-12 rounded-lg bg-[#272729] px-6 text-[13px] font-semibold text-white transition hover:bg-black">Track Shipment</button>
          </form>
          {message && <p className="mt-2 rounded-lg bg-white/15 px-3 py-2 text-[11px]">{message}</p>}
        </div>
      </section>

      <section className="card mt-4 overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-muted">Tracking number</p>
            <div className="mt-1 flex items-center gap-2">
              <h2 className="text-[18px] font-semibold text-ink sm:text-[22px]">{selected.tracking}</h2>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(selected.tracking)}
                className="flex h-7 w-7 items-center justify-center rounded-md text-muted hover:bg-[#f3f3f4]"
                aria-label="Copy tracking number"
              >
                <FiCopy />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${statusStyles[selected.status]}`}>{selected.status}</span>
            <span className="rounded-full bg-[#f3f3f4] px-3 py-1.5 text-[11px] font-medium text-[#666]">ETA: {selected.eta}</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-[10px] font-medium text-muted sm:text-[11px]">
            <span>Shipment progress</span><span className="font-semibold text-brand-600">{selected.progress}%</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#ececef]">
            <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all" style={{ width: `${selected.progress}%` }} />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted">Origin</p>
              <p className="mt-1 text-[13px] font-semibold text-ink">{selected.origin}</p>
            </div>
            <div className="hidden items-center gap-1 text-brand-400 sm:flex"><span className="h-px w-8 bg-brand-200" /><FiTruck /><span className="h-px w-8 bg-brand-200" /></div>
            <div className="sm:text-right">
              <p className="text-[10px] uppercase tracking-wide text-muted">Destination</p>
              <p className="mt-1 text-[13px] font-semibold text-ink">{selected.destination}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
        <section className="card p-4 sm:p-5">
          <h2 className="text-[17px] font-semibold text-ink">Shipment Journey</h2>
          <p className="mt-1 text-[11px] text-muted">Latest scans and delivery milestones</p>
          <div className="relative mt-5">
            <div className="absolute bottom-4 left-[15px] top-4 w-px bg-[#ded9f7]" />
            {timeline.map((item, index) => (
              <div key={`${item.title}-${index}`} className="relative flex gap-3 pb-5 last:pb-0">
                <span className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-white ${
                  item.done ? "bg-brand-600 text-white" : "bg-[#e9e9ec] text-[#aaa]"
                } ${item.active ? "ring-4 ring-brand-100" : ""}`}>
                  {item.done ? <FiCheck size={13} /> : <span className="h-2 w-2 rounded-full bg-[#bbb]" />}
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className={`text-[13px] font-semibold sm:text-[14px] ${item.done ? "text-ink" : "text-[#999]"}`}>{item.title}</h3>
                    <span className="flex items-center gap-1 text-[9px] text-muted sm:text-[10px]"><FiClock /> {item.time}</span>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted sm:text-[12px]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-4">
          <section className="card overflow-hidden">
            <div className="relative h-[190px] overflow-hidden bg-[#eaf0e8]">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(30deg, #bdcdb9 12%, transparent 12.5%, transparent 87%, #bdcdb9 87.5%), linear-gradient(150deg, #bdcdb9 12%, transparent 12.5%, transparent 87%, #bdcdb9 87.5%), linear-gradient(30deg, #bdcdb9 12%, transparent 12.5%, transparent 87%, #bdcdb9 87.5%)", backgroundSize: "70px 120px" }} />
              <div className="absolute left-[18%] top-[65%] h-1 w-[62%] -rotate-12 rounded-full bg-brand-300" />
              <span className="absolute left-[17%] top-[61%] h-4 w-4 rounded-full border-4 border-white bg-[#555] shadow-float" />
              <span className="absolute right-[18%] top-[40%] flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-brand-600 text-white shadow-float"><FiTruck /></span>
              <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 shadow-card">
                <p className="text-[9px] uppercase tracking-wide text-muted">Current location</p>
                <p className="mt-0.5 text-[11px] font-semibold text-ink">{selected.currentLocation}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="flex items-center gap-1.5 text-[10px] text-muted"><FiClock /> Location updated {selected.updated}</p>
            </div>
          </section>

          <section className="card p-4">
            <h2 className="text-[16px] font-semibold text-ink">Shipment Details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <DetailItem icon={FiPackage} label="Package" value={selected.package} />
              <DetailItem icon={FiBox} label="Weight" value={selected.weight} />
              <DetailItem icon={FiNavigation} label="Service" value={selected.service} />
            </div>
          </section>

          <section className="card p-4">
            <h2 className="text-[16px] font-semibold text-ink">Driver & Vehicle</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <DetailItem icon={FiUser} label="Driver" value={selected.driver} />
              <DetailItem icon={FiTruck} label="Vehicle" value={selected.vehicle} />
            </div>
            <a href={`tel:${selected.phone.replaceAll(" ", "")}`} className="mt-4 flex h-10 items-center justify-center gap-2 rounded-lg bg-brand-50 text-[12px] font-semibold text-brand-700 hover:bg-brand-100">
              <FiPhone /> Call Driver
            </a>
          </section>
        </div>
      </div>

      <section className="card mt-4 overflow-hidden">
        <div className="border-b border-line p-4 sm:p-5">
          <h2 className="text-[17px] font-semibold text-ink">Recent Shipments</h2>
          <p className="mt-1 text-[11px] text-muted">Select a shipment to view its tracking details</p>
        </div>
        <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-4">
          {shipments.map((shipment) => (
            <button
              type="button"
              key={shipment.tracking}
              onClick={() => setSelected(shipment)}
              className={`rounded-xl border p-3 text-left transition hover:border-brand-300 hover:bg-brand-50/40 ${
                selected.tracking === shipment.tracking ? "border-brand-400 bg-brand-50" : "border-line"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[12px] font-semibold text-ink">{shipment.tracking}</span>
                <span className={`rounded-full px-2 py-1 text-[8px] font-semibold ${statusStyles[shipment.status]}`}>{shipment.status}</span>
              </div>
              <p className="mt-2 truncate text-[10px] text-muted">{shipment.destination}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e7e7ea]"><div className="h-full rounded-full bg-brand-600" style={{ width: `${shipment.progress}%` }} /></div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

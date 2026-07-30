import { useState } from "react";
import {
  FiActivity,
  FiBox,
  FiDroplet,
  FiMapPin,
  FiSearch,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";

const fleet = [
  { id: "FLT-201", name: "Atlas Cargo 01", model: "Tata LPT 1613", image: "/assets/tata-lpt-1613.jpg", plate: "DHA-18-4582", type: "Box Truck", capacity: "8,500 kg", driver: "Arif Hossain", route: "Dhaka → Chattogram", status: "In Transit", fuel: 74, distance: "62,430 km" },
  { id: "FLT-202", name: "Metro Runner 02", model: "Toyota HiAce", image: "/assets/toyota-hiace.webp", plate: "DHA-15-7294", type: "Cargo Van", capacity: "1,200 kg", driver: "Mehedi Hasan", route: "Dhaka → Sylhet", status: "Available", fuel: 91, distance: "38,240 km" },
  { id: "FLT-203", name: "Highway King 03", model: "Ashok Leyland 1616", image: "/assets/ashok-leyland-1616.avif", plate: "DHA-11-8361", type: "Covered Van", capacity: "10,000 kg", driver: "Rakib Ahmed", route: "Dhaka → Rajshahi", status: "In Transit", fuel: 58, distance: "81,720 km" },
  { id: "FLT-204", name: "City Carrier 04", model: "Isuzu D-Max", image: "/assets/isuzu-d-max.jpg", plate: "DHA-14-3927", type: "Pickup Truck", capacity: "1,100 kg", driver: "Tanvir Rahman", route: "Dhaka → Khulna", status: "Off Duty", fuel: 46, distance: "49,105 km" },
  { id: "FLT-205", name: "Coastal Express 05", model: "JAC X200", image: "/assets/jac-x200.jpg", plate: "CTA-12-6473", type: "Mini Truck", capacity: "2,500 kg", driver: "Sabbir Khan", route: "Chattogram → Cox’s Bazar", status: "Available", fuel: 83, distance: "29,870 km" },
  { id: "FLT-206", name: "Cold Chain 06", model: "Eicher Pro 2059", image: "/assets/eicher-pro-2059.jpg", plate: "DHA-16-5048", type: "Refrigerated", capacity: "4,500 kg", driver: "Imran Chowdhury", route: "Dhaka → Barishal", status: "In Transit", fuel: 65, distance: "55,390 km" },
  { id: "FLT-207", name: "Rapid Move 07", model: "Ford Transit", image: "/assets/ford-transit.jpg", plate: "SYL-13-2859", type: "Cargo Van", capacity: "1,400 kg", driver: "Fahim Islam", route: "Sylhet → Mymensingh", status: "Available", fuel: 88, distance: "33,610 km" },
  { id: "FLT-208", name: "Northern Hauler 08", model: "Tata LPT 1918", image: "/assets/tata-lpt-1918.webp", plate: "RAJ-19-7316", type: "Box Truck", capacity: "12,000 kg", driver: "Nayeem Uddin", route: "Rajshahi → Rangpur", status: "Maintenance", fuel: 31, distance: "96,450 km" },
  { id: "FLT-209", name: "Delta Pickup 09", model: "Mahindra Bolero", image: "/assets/mahindra-bolero.avif", plate: "KHU-17-4265", type: "Pickup Truck", capacity: "1,300 kg", driver: "Shakil Mia", route: "Khulna → Jessore", status: "In Transit", fuel: 69, distance: "41,280 km" },
  { id: "FLT-210", name: "Eastern Carrier 10", model: "Eicher Pro 3015", image: "/assets/eicher-pro-3015.jpg", plate: "DHA-20-9184", type: "Covered Van", capacity: "9,500 kg", driver: "Rifat Karim", route: "Dhaka → Cumilla", status: "Available", fuel: 94, distance: "24,760 km" },
  { id: "FLT-211", name: "Port Shuttle 11", model: "JAC N56", image: "/assets/jac-n56.jpg", plate: "CTA-21-5730", type: "Mini Truck", capacity: "3,000 kg", driver: "Jahidul Alam", route: "Chattogram → Feni", status: "Off Duty", fuel: 52, distance: "67,840 km" },
  { id: "FLT-212", name: "Fresh Freight 12", model: "Isuzu NPR", image: "/assets/isuzu-npr.jpg", plate: "DHA-22-1649", type: "Refrigerated", capacity: "5,000 kg", driver: "Sohel Rana", route: "Dhaka → Gazipur", status: "In Transit", fuel: 77, distance: "44,920 km" },
];

const statusStyles = {
  "In Transit": "bg-brand-600 text-white",
  Available: "bg-success text-white",
  "Off Duty": "bg-[#77777d] text-white",
  Maintenance: "bg-[#e99a3d] text-white",
};

const typeStyles = {
  "Box Truck": "border-brand-200 bg-brand-50 text-brand-700",
  "Cargo Van": "border-[#cfe2ff] bg-[#edf5ff] text-[#3370cf]",
  "Covered Van": "border-[#cceedd] bg-[#eaf9f1] text-[#248d5b]",
  "Pickup Truck": "border-[#ffe0bd] bg-[#fff5e9] text-[#b96a22]",
  "Mini Truck": "border-[#ffd5e1] bg-[#fff0f4] text-[#bd4b6c]",
  Refrigerated: "border-[#cce8ed] bg-[#eaf8fa] text-[#277b88]",
};

function FleetCard({ vehicle }) {
  return (
    <article className="card group overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-float">
      <div className="relative h-[150px] overflow-hidden bg-[#e9e9ec] sm:h-[165px]">
        <img
          src={vehicle.image || "/assets/delivery-truck.png"}
          alt={`${vehicle.name} delivery vehicle`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
        <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 shadow-card">
          <img src="/assets/shipnow-symbol.png" alt="ShipNow" className="h-5 w-5 object-contain" />
        </div>
        <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[9px] font-semibold shadow-card ${statusStyles[vehicle.status]}`}>
          {vehicle.status}
        </span>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-white">
          <div className="min-w-0">
            <h2 className="truncate text-[15px] font-semibold sm:text-[16px]">{vehicle.name}</h2>
            <p className="mt-0.5 text-[10px] text-white/80">{vehicle.id} · {vehicle.plate}</p>
          </div>
          <span className={`shrink-0 rounded-full border bg-white/95 px-2 py-1 text-[9px] font-semibold ${typeStyles[vehicle.type]}`}>
            {vehicle.type}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-muted">Vehicle model</p>
            <p className="mt-1 text-[12px] font-semibold text-[#444]">{vehicle.model}</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-medium uppercase tracking-wide text-muted">Capacity</p>
            <p className="mt-1 flex items-center justify-end gap-1 text-[12px] font-semibold text-[#444]">
              <FiBox /> {vehicle.capacity}
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2.5">
          <div className="flex items-center gap-2 text-[11px] text-[#606067]">
            <FiUser className="shrink-0 text-brand-600" />
            <span className="text-muted">Driver</span>
            <span className="ml-auto truncate font-medium text-[#444]">{vehicle.driver}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[#606067]">
            <FiMapPin className="shrink-0 text-brand-600" />
            <span className="text-muted">Route</span>
            <span className="ml-auto truncate font-medium text-[#444]">{vehicle.route}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[#606067]">
            <FiActivity className="shrink-0 text-brand-600" />
            <span className="text-muted">Mileage</span>
            <span className="ml-auto font-medium text-[#444]">{vehicle.distance}</span>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-[#f7f7f8] p-3">
          <div className="flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1.5 font-medium text-[#666]"><FiDroplet /> Fuel level</span>
            <span className="font-semibold text-ink">{vehicle.fuel}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e3e3e7]">
            <div
              className={`h-full rounded-full ${vehicle.fuel < 40 ? "bg-warning" : "bg-brand-600"}`}
              style={{ width: `${vehicle.fuel}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Fleets() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleFleet = normalizedQuery
    ? fleet.filter((vehicle) =>
        [vehicle.name, vehicle.id, vehicle.plate, vehicle.type, vehicle.driver, vehicle.route, vehicle.status]
          .some((value) => value.toLowerCase().includes(normalizedQuery)),
      )
    : fleet;

  return (
    <div>
      <PageHeader title="Fleets" breadcrumb="Fleets" />

      <div className="mb-4 md:hidden">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Fleets</h1>
        <p className="mt-1 text-[12px] text-muted">Monitor every ShipNow vehicle</p>
      </div>

      <section className="card mb-4 p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div>
              <p className="text-[18px] font-semibold text-ink sm:text-[22px]">{fleet.length}</p>
              <p className="text-[9px] text-muted sm:text-[11px]">Total Vehicles</p>
            </div>
            <div className="border-l border-line pl-3 sm:pl-4">
              <p className="text-[18px] font-semibold text-success sm:text-[22px]">{fleet.filter((item) => item.status === "Available").length}</p>
              <p className="text-[9px] text-muted sm:text-[11px]">Available</p>
            </div>
            <div className="border-l border-line pl-3 sm:pl-4">
              <p className="text-[18px] font-semibold text-brand-600 sm:text-[22px]">{fleet.filter((item) => item.status === "In Transit").length}</p>
              <p className="text-[9px] text-muted sm:text-[11px]">In Transit</p>
            </div>
          </div>

          <label className="relative block w-full lg:w-[320px]">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[15px] text-muted" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search vehicle, driver, route or plate"
              className="h-10 w-full rounded-lg border border-line bg-[#fafafa] pl-9 pr-3 text-[12px] text-[#444] placeholder:text-[#aaa]"
            />
          </label>
        </div>
      </section>

      {visibleFleet.length ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleFleet.map((vehicle) => <FleetCard key={vehicle.id} vehicle={vehicle} />)}
        </div>
      ) : (
        <section className="card flex min-h-[260px] items-center justify-center p-8 text-center">
          <div>
            <FiTruck className="mx-auto text-[30px] text-brand-400" />
            <p className="mt-3 text-[14px] font-semibold text-ink">No vehicles found</p>
            <p className="mt-1 text-[11px] text-muted">Try another vehicle, driver, route, or registration.</p>
          </div>
        </section>
      )}
    </div>
  );
}

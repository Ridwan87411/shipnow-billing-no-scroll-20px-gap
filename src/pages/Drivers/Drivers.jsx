import { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import PageHeader from "../../components/common/PageHeader";

const drivers = [
  { id: "DRV-1001", name: "Arif Hossain", phone: "+880 1712-345678", email: "arif@shipnow.com", route: "Dhaka → Chattogram", vehicle: "Box Truck", plate: "DHA-18-4582", status: "On Route", experience: "6 years", color: "purple" },
  { id: "DRV-1002", name: "Mehedi Hasan", phone: "+880 1813-447821", email: "mehedi@shipnow.com", route: "Dhaka → Sylhet", vehicle: "Cargo Van", plate: "DHA-15-7294", status: "Available", experience: "4 years", color: "blue" },
  { id: "DRV-1003", name: "Rakib Ahmed", phone: "+880 1914-550932", email: "rakib@shipnow.com", route: "Dhaka → Rajshahi", vehicle: "Covered Van", plate: "DHA-11-8361", status: "On Route", experience: "8 years", color: "green" },
  { id: "DRV-1004", name: "Tanvir Rahman", phone: "+880 1615-663045", email: "tanvir@shipnow.com", route: "Dhaka → Khulna", vehicle: "Pickup Truck", plate: "DHA-14-3927", status: "Off Duty", experience: "5 years", color: "orange" },
  { id: "DRV-1005", name: "Sabbir Khan", phone: "+880 1716-774156", email: "sabbir@shipnow.com", route: "Chattogram → Cox’s Bazar", vehicle: "Mini Truck", plate: "CTA-12-6473", status: "Available", experience: "3 years", color: "blue" },
  { id: "DRV-1006", name: "Imran Chowdhury", phone: "+880 1817-885267", email: "imran@shipnow.com", route: "Dhaka → Barishal", vehicle: "Refrigerated", plate: "DHA-16-5048", status: "On Route", experience: "7 years", color: "green" },
  { id: "DRV-1007", name: "Fahim Islam", phone: "+880 1918-996378", email: "fahim@shipnow.com", route: "Sylhet → Mymensingh", vehicle: "Cargo Van", plate: "SYL-13-2859", status: "Available", experience: "4 years", color: "purple" },
  { id: "DRV-1008", name: "Nayeem Uddin", phone: "+880 1619-107489", email: "nayeem@shipnow.com", route: "Rajshahi → Rangpur", vehicle: "Box Truck", plate: "RAJ-19-7316", status: "Maintenance", experience: "9 years", color: "orange" },
  { id: "DRV-1009", name: "Shakil Mia", phone: "+880 1720-218590", email: "shakil@shipnow.com", route: "Khulna → Jessore", vehicle: "Pickup Truck", plate: "KHU-17-4265", status: "On Route", experience: "5 years", color: "green" },
  { id: "DRV-1010", name: "Rifat Karim", phone: "+880 1821-329601", email: "rifat@shipnow.com", route: "Dhaka → Cumilla", vehicle: "Covered Van", plate: "DHA-20-9184", status: "Available", experience: "6 years", color: "blue" },
  { id: "DRV-1011", name: "Jahidul Alam", phone: "+880 1922-430712", email: "jahidul@shipnow.com", route: "Chattogram → Feni", vehicle: "Mini Truck", plate: "CTA-21-5730", status: "Off Duty", experience: "10 years", color: "purple" },
  { id: "DRV-1012", name: "Sohel Rana", phone: "+880 1623-541823", email: "sohel@shipnow.com", route: "Dhaka → Gazipur", vehicle: "Refrigerated", plate: "DHA-22-1649", status: "On Route", experience: "7 years", color: "orange" },
];

const vehicleStyles = {
  purple: "border-brand-200 bg-brand-50 text-brand-700",
  blue: "border-[#cfe2ff] bg-[#edf5ff] text-[#3370cf]",
  green: "border-[#cceedd] bg-[#eaf9f1] text-[#248d5b]",
  orange: "border-[#ffe0bd] bg-[#fff5e9] text-[#b96a22]",
};

const statusStyles = {
  "On Route": "bg-[#eee9ff] text-brand-700",
  Available: "bg-[#eaf9f1] text-[#248d5b]",
  "Off Duty": "bg-[#f1f1f3] text-[#777]",
  Maintenance: "bg-[#fff5e9] text-[#b96a22]",
};

function DriverCard({ driver }) {
  const initials = driver.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="card overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-float">
      <div className="border-b border-line bg-gradient-to-r from-[#faf9ff] to-white p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-[15px] font-semibold text-white sm:h-14 sm:w-14 sm:text-[17px]">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h2 className="truncate text-[15px] font-semibold text-ink sm:text-[16px]">{driver.name}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-muted">
                  <FiUser /> {driver.id}
                </p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${statusStyles[driver.status]}`}>
                {driver.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="space-y-3">
          <a href={`tel:${driver.phone.replaceAll(" ", "")}`} className="flex items-center gap-2.5 text-[12px] text-[#5d5d63] hover:text-brand-600">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f6] text-[#777]"><FiPhone /></span>
            <span className="truncate">{driver.phone}</span>
          </a>
          <a href={`mailto:${driver.email}`} className="flex items-center gap-2.5 text-[12px] text-[#5d5d63] hover:text-brand-600">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f6] text-[#777]"><FiMail /></span>
            <span className="truncate">{driver.email}</span>
          </a>
          <div className="flex items-start gap-2.5 text-[12px] text-[#5d5d63]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f6] text-[#777]"><FiMapPin /></span>
            <div>
              <p className="text-[9px] uppercase tracking-wide text-muted">Assigned route</p>
              <p className="mt-0.5 font-medium text-[#444]">{driver.route}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-semibold ${vehicleStyles[driver.color]}`}>
            <FiTruck /> {driver.vehicle}
          </span>
          <div className="text-right">
            <p className="text-[10px] font-medium text-[#555]">{driver.plate}</p>
            <p className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-muted">
              <FiClock /> {driver.experience} experience
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Drivers() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleDrivers = normalizedQuery
    ? drivers.filter((driver) =>
        [driver.name, driver.id, driver.route, driver.vehicle, driver.status]
          .some((value) => value.toLowerCase().includes(normalizedQuery)),
      )
    : drivers;

  return (
    <div>
      <PageHeader title="Drivers" breadcrumb="Drivers" />

      <div className="mb-4 md:hidden">
        <h1 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Drivers</h1>
        <p className="mt-1 text-[12px] text-muted">Manage your active driver team</p>
      </div>

      <section className="card mb-4 p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div>
              <p className="text-[18px] font-semibold text-ink sm:text-[22px]">{drivers.length}</p>
              <p className="text-[9px] text-muted sm:text-[11px]">Total Drivers</p>
            </div>
            <div className="border-l border-line pl-3 sm:pl-4">
              <p className="text-[18px] font-semibold text-success sm:text-[22px]">{drivers.filter((driver) => driver.status === "Available").length}</p>
              <p className="text-[9px] text-muted sm:text-[11px]">Available</p>
            </div>
            <div className="border-l border-line pl-3 sm:pl-4">
              <p className="text-[18px] font-semibold text-brand-600 sm:text-[22px]">{drivers.filter((driver) => driver.status === "On Route").length}</p>
              <p className="text-[9px] text-muted sm:text-[11px]">On Route</p>
            </div>
          </div>

          <label className="relative block w-full lg:w-[300px]">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[15px] text-muted" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search driver, ID, route or vehicle"
              className="h-10 w-full rounded-lg border border-line bg-[#fafafa] pl-9 pr-3 text-[12px] text-[#444] placeholder:text-[#aaa]"
            />
          </label>
        </div>
      </section>

      {visibleDrivers.length ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleDrivers.map((driver) => <DriverCard key={driver.id} driver={driver} />)}
        </div>
      ) : (
        <section className="card flex min-h-[260px] items-center justify-center p-8 text-center">
          <div>
            <FiCheckCircle className="mx-auto text-[28px] text-brand-400" />
            <p className="mt-3 text-[14px] font-semibold text-ink">No drivers found</p>
            <p className="mt-1 text-[11px] text-muted">Try another name, ID, route, or vehicle type.</p>
          </div>
        </section>
      )}
    </div>
  );
}

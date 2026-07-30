import {
  PiAirplaneTilt,
  PiBoat,
  PiTrain,
  PiTruck,
} from "react-icons/pi";

const companyLogos = {
  "TechGear Inc.": "/assets/invoices/techgear.png",
  "StyleHub Co.": "/assets/invoices/stylehub.png",
  FreshNest: "/assets/invoices/freshnest.png",
  "FitPlus Gear": "/assets/invoices/fitplus.png",
  "AutoParts Pro": "/assets/invoices/autoparts.png",
  EcoLights: "/assets/invoices/ecolights.png",
  GreenHaven: "/assets/invoices/greenhaven.png",
  ModaWear: "/assets/invoices/modawear.png",
  "SunCore Panels": "/assets/invoices/suncore.png",
  VitaFresh: "/assets/invoices/vitafresh.png",
  StyleDepot: "/assets/invoices/styledepot.svg",
  QuickParts: "/assets/invoices/quickparts.svg",
};

const gridDetails = {
  SH9283746: {
    origin: "Los Angeles, CA",
    destination: "Chicago, IL",
    departure: "Mar 20, 2035 – 10:00 AM",
    arrival: "Mar 23, 2035 – 03:00 PM",
  },
  SH9182635: {
    departure: "Mar 19, 2035 – 11:30 AM",
    arrival: "Mar 22, 2035 – 01:00 PM",
  },
  SH9037821: {
    departure: "Mar 18, 2035 – 09:00 AM",
    arrival: "Mar 21, 2035 – 06:00 PM",
  },
  SH9374652: {
    departure: "Mar 21, 2035 – 08:45 AM",
    arrival: "Mar 25, 2035 – 04:30 PM",
  },
  SH8821349: {
    departure: "Mar 19, 2035 – 12:00 PM",
    arrival: "Mar 21, 2035 – 05:00 PM",
  },
  SH9457830: {
    departure: "Mar 20, 2035 – 07:15 AM",
    arrival: "Mar 26, 2035 – 02:00 PM",
    progress: 100,
  },
  SH8967432: {
    departure: "Mar 18, 2035 – 02:45 PM",
    arrival: "Mar 22, 2035 – 11:00 AM",
    status: "In Transit",
  },
  SH8893247: {
    departure: "Mar 20, 2035 – 01:00 PM",
    arrival: "Mar 23, 2035 – 08:00 AM",
    status: "Out for Delivery",
  },
  SH9018723: {
    departure: "Mar 21, 2035 – 09:30 AM",
    arrival: "Mar 24, 2035 – 01:30 PM",
  },
  SH8881190: {
    departure: "Mar 21, 2035 – 06:00 AM",
    arrival: "Mar 22, 2035 – 10:00 AM",
  },
  SH8776103: {
    departure: "Mar 19, 2035 – 10:15 AM",
    arrival: "Mar 22, 2035 – 03:30 PM",
  },
  SH9113471: {
    departure: "Mar 20, 2035 – 04:00 PM",
    arrival: "Mar 23, 2035 – 12:00 PM",
  },
};

const statusStyles = {
  Delivered: "bg-[#dff7e8] text-[#31865a]",
  Processing: "bg-[#fff2b8] text-[#8b7000]",
  "Out for Delivery": "bg-[#ededee] text-[#4f4f54]",
  "In Transit": "bg-[#eee9ff] text-[#7058c9]",
};

function FreightIcon({ mode, className = "h-[14px] w-[14px]" }) {
  if (mode === "Air Freight") return <PiAirplaneTilt className={className} />;
  if (mode === "Ocean Freight") return <PiBoat className={className} />;
  if (mode === "Rail Freight") return <PiTrain className={className} />;
  return <PiTruck className={className} />;
}

export default function ShipmentCard({ item }) {
  const details = gridDetails[item.sourceId || item.id] || {};
  const origin = details.origin || item.origin;
  const destination = details.destination || item.destination;
  const progress = details.progress ?? item.progress;
  const status = details.status || item.status;

  return (
    <article className="h-[350px] min-w-0 rounded-[10px] bg-white p-[16px] shadow-card">
      <div className="flex h-[57px] items-start justify-between border-b border-[#e8e8eb]">
        <div>
          <p className="text-[14px] font-semibold leading-none text-[#343439]">
            #{item.id}
          </p>
          <span
            className={`mt-[7px] inline-flex h-[20px] items-center rounded-full px-[8px] text-[10px] font-medium ${
              statusStyles[status] || statusStyles["In Transit"]
            }`}
          >
            {status}
          </span>
        </div>
        <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#e7e7e8] text-[#55555a]">
          <FreightIcon mode={item.mode} className="h-[20px] w-[20px]" />
        </span>
      </div>

      <div className="flex h-[66px] items-center gap-[12px]">
        <img
          src={companyLogos[item.company]}
          alt=""
          className="h-[31px] w-[31px] shrink-0 object-contain"
        />
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-[#303034]">
            {item.company}
          </p>
          <p className="mt-[3px] truncate text-[11px] text-[#99999f]">
            {item.category}
          </p>
        </div>
      </div>

      <div className="relative h-[116px] rounded-[8px] bg-[#f5f5f6] px-[11px] py-[12px]">
        <span className="absolute bottom-[25px] left-[15px] top-[18px] w-px bg-[#ddd7ff]" />

        <div className="relative grid grid-cols-[10px_1fr_minmax(0,1.5fr)] items-start gap-[5px]">
          <span className="mt-[2px] h-[8px] w-[8px] rounded-full bg-[#8b70ff] ring-[3px] ring-[#e9e4ff]" />
          <span className="text-[10px] text-[#99999f]">Origin</span>
          <div className="min-w-0 text-right">
            <p className="truncate text-[12px] font-medium text-[#333338]">
              {origin}
            </p>
            <p className="mt-[6px] truncate text-[10px] text-[#99999f]">
              {details.departure || `${item.date} – 10:00 AM`}
            </p>
          </div>
        </div>

        <div className="relative mt-[14px] grid grid-cols-[10px_1fr_minmax(0,1.5fr)] items-start gap-[5px]">
          <span className="mt-[2px] h-[8px] w-[8px] rounded-full bg-[#8b70ff] ring-[3px] ring-[#e9e4ff]" />
          <span className="text-[10px] text-[#99999f]">Destination</span>
          <div className="min-w-0 text-right">
            <p className="truncate text-[12px] font-medium text-[#333338]">
              {destination}
            </p>
            <p className="mt-[6px] truncate text-[10px] text-[#99999f]">
              {details.arrival || `${item.eta} – 03:00 PM`}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[17px] flex items-center justify-between text-[11px] text-[#929298]">
        <span>
          Progress{" "}
          <b className="ml-[2px] font-semibold text-[#35353a]">{progress}%</b>
        </span>
        <span>
          Carriers{" "}
          <b className="ml-[2px] font-medium text-[#35353a]">{item.carrier}</b>
        </span>
      </div>
      <div className="mt-[8px] h-[7px] overflow-hidden rounded-full bg-[#ededee]">
        <div
          className="h-full rounded-full bg-[#856DF3]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </article>
  );
}

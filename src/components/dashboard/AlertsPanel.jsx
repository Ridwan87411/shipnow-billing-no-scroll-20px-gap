import { FiArrowUpRight, FiMoreHorizontal } from "react-icons/fi";
import { alerts } from "../../data/dashboard";

const alertSummary = [
  ["5", "Customs", "Clearance", "Delay"],
  ["4", "Incorrect", "Address", "Provided"],
  ["3", "Weather-", "Related", "Hold"],
];

function AlertIcon({ type }) {
  if (type === "Weather-Related Hold") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M7 17h9.2a4.3 4.3 0 0 0 .5-8.6A6 6 0 0 0 5.5 7.2 4.9 4.9 0 0 0 7 17Z" />
        <path d="m12 17-2 3h3l-2 3" />
      </svg>
    );
  }

  if (type === "Incorrect Address Provided") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <path d="m9.5 7.5 5 5m0-5-5 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 2h8l5 5v15H6Z" />
      <path d="M14 2v6h5M9.5 13l5 5m0-5-5 5" />
    </svg>
  );
}

export default function AlertsPanel() {
  return (
    <section className="card h-[430px] min-w-0 overflow-hidden p-4 sm:h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-medium text-[#29292d]">Shipment Alerts</h2>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#f1f1f2] text-[#74747a]"
          aria-label="Shipment alert options"
        >
          <FiMoreHorizontal />
        </button>
      </div>

      <div className="mt-[17px] flex items-baseline gap-2">
        <span className="text-[24px] font-semibold leading-none text-[#29292d]">12</span>
        <span className="text-[14px] text-[#85858b]">Delays Detected</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {alertSummary.map(([value, ...lines]) => (
          <div
            key={value}
            className="flex h-[90px] min-w-0 flex-col items-center justify-center rounded-[9px] bg-[#e3ddff] text-center sm:h-[100px]"
          >
            <p className="text-[23px] font-semibold leading-none text-[#2d2d31]">{value}</p>
            <p className="mt-3 text-[11px] leading-[1.18] text-[#34343a]">
              {lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        {alerts.map((item) => (
          <div key={item.id} className="flex min-h-[50px] items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-[#f1f1f2] text-[#2d2d31]">
              <AlertIcon type={item.type} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium leading-tight text-[#303034]">{item.type}</p>
              <p className="mt-1 truncate text-[10px] leading-none text-[#85858b]">
                <span className="font-medium text-[#8062f2]">{item.shipment}</span>
                <span className="px-1 text-[#d2d2d5]">•</span>
                {(item.displayDetail || item.detail).replace("Â·", "•")}
              </p>
            </div>
            <FiArrowUpRight className="mr-1 shrink-0 text-[17px] text-[#74747a]" />
          </div>
        ))}
      </div>
    </section>
  );
}

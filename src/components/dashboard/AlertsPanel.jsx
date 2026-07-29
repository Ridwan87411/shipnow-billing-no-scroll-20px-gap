import { FiFileText, FiArrowUpRight } from "react-icons/fi";
import { alerts } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function AlertsPanel() {
  return (
    <SectionCard title="Shipment Alerts">
      <p className="mb-3 text-[20px] font-semibold">
        12 <span className="text-[10px] font-normal text-[#8f8f96]">Delays Detected</span>
      </p>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {[
          ["5", "Customs Clearance Delay"],
          ["4", "Incorrect Address Provided"],
          ["3", "Weather-Related Hold"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-lg bg-[#eee9ff] px-2 py-3 text-center">
            <p className="text-[18px] font-semibold">{value}</p>
            <p className="mt-1 text-[8px] leading-tight">{label}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {alerts.map((item) => (
          <div key={item.id} className="flex items-center gap-2 rounded-md px-1 py-2 hover:bg-[#fafaff]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f5f5f6] text-[#666]">
              <FiFileText />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] font-medium">{item.type}</p>
              <p className="truncate text-[8px] text-[#999]">
                <span className="text-brand-600">{item.shipment}</span> · {item.detail}
              </p>
            </div>
            <FiArrowUpRight className="shrink-0 text-[#aaa]" />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

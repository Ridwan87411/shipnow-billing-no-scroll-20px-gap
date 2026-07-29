import { shipmentRecords } from "../../data/shipments";
import StatusBadge from "../common/StatusBadge";
import SectionCard from "./SectionCard";

export default function RecentShipments() {
  const rows = shipmentRecords.slice(0, 5);

  return (
    <SectionCard title="Recent Shipments">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[640px] text-left text-[9px]">
          <thead>
            <tr className="bg-[#eee9ff] text-[#777]">
              <th className="rounded-l-md px-3 py-2 font-medium">Shipping ID</th>
              <th className="px-3 py-2 font-medium">Company</th>
              <th className="px-3 py-2 font-medium">Carrier</th>
              <th className="px-3 py-2 font-medium">Route</th>
              <th className="px-3 py-2 font-medium">Shipping Date</th>
              <th className="rounded-r-md px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id} className="border-b border-line last:border-0">
                <td className="px-3 py-3 font-medium text-brand-600">#{item.id}</td>
                <td className="px-3 py-3">{item.company}</td>
                <td className="px-3 py-3">{item.carrier}</td>
                <td className="px-3 py-3">
                  {item.origin.split(",")[0]} → {item.destination.split(",")[0]}
                </td>
                <td className="px-3 py-3">{item.date}</td>
                <td className="px-3 py-3">
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

import {
  FiBox,
  FiMapPin,
  FiMoreHorizontal,
  FiTruck,
} from "react-icons/fi";
import StatusBadge from "../common/StatusBadge";

export default function ShipmentCard({ item }) {
  return (
    <article className="card min-w-0 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold text-[#555]">#{item.id}</p>
          <div className="mt-1">
            <StatusBadge status={item.status} />
          </div>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5f5f6] text-[#777]">
          <FiMoreHorizontal />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3 border-y border-line py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f7f7f8] text-brand-600">
          <FiBox />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold">{item.company}</p>
          <p className="truncate text-[9px] text-[#999]">{item.category}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-[9px]">
        <div className="grid grid-cols-[18px_1fr_auto] items-center gap-2">
          <FiMapPin className="text-brand-600" />
          <span className="text-[#999]">Origin</span>
          <span className="font-medium">{item.origin}</span>
        </div>
        <div className="grid grid-cols-[18px_1fr_auto] items-center gap-2">
          <FiMapPin className="text-brand-600" />
          <span className="text-[#999]">Destination</span>
          <span className="font-medium">{item.destination}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-[9px]">
        <span>Progress: <b>{item.progress}%</b></span>
        <span>Carrier: <b>{item.carrier}</b></span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[#ededee]">
        <div
          className="h-full rounded-full bg-brand-600"
          style={{ width: `${item.progress}%` }}
        />
      </div>
    </article>
  );
}

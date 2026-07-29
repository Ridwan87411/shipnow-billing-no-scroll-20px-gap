import { FiCalendar, FiFilter, FiPlus, FiSliders, FiSearch } from "react-icons/fi";

const statuses = ["All", "Completed", "Delivery", "Pending"];

export default function ShipmentToolbar({
  status,
  setStatus,
  query,
  setQuery,
  grid = false,
  onAdd,
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-line px-3 py-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex overflow-x-auto rounded-lg bg-[#f1f1f2] p-1 scrollbar-thin">
        {statuses.map((item) => (
          <button
            key={item}
            onClick={() => setStatus(item)}
            className={`h-8 whitespace-nowrap rounded-md px-4 text-[10px] ${
              status === item ? "bg-[#2b2b2d] text-white" : "text-[#777]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2">
        <label className="flex h-9 min-w-[190px] flex-1 items-center gap-2 rounded-lg border border-line bg-white px-3 lg:max-w-[260px]">
          <FiSearch className="shrink-0 text-[#999]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={grid ? "Search by Shipment" : "Search id, company, etc"}
            className="min-w-0 flex-1 bg-transparent text-[10px]"
          />
        </label>
        {onAdd && (
          <button
            onClick={onAdd}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#262628] text-white md:hidden"
            aria-label="New shipment"
          >
            <FiPlus />
          </button>
        )}
        <button className="flex h-9 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-[10px]">
          <FiFilter /> Filter
        </button>
        {grid ? (
          <>
            <span className="hidden text-[9px] text-[#999] sm:inline">Sort by</span>
            <button className="flex h-9 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-[10px]">
              Newest <FiSliders />
            </button>
          </>
        ) : (
          <button className="flex h-9 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-[10px]">
            <FiCalendar /> This Month
          </button>
        )}
      </div>
    </div>
  );
}

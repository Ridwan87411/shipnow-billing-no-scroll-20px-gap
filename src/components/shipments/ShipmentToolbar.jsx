import {
  FiCalendar,
  FiChevronDown,
  FiFilter,
  FiList,
  FiPlus,
  FiSliders,
  FiSearch,
} from "react-icons/fi";

export default function ShipmentToolbar({
  status,
  setStatus,
  query,
  setQuery,
  grid = false,
  onViewChange,
  onAdd,
}) {
  const statuses = grid
    ? ["All", "Delivered", "In Transit", "Processing", "Out for Delivery"]
    : ["All", "Completed", "Delivery", "Pending"];

  return (
    <div className="mx-1 flex h-[114px] flex-col gap-3 rounded-[11px] bg-white px-[14px] py-[14px] md:mx-0 md:h-auto md:flex-row md:items-center md:justify-between md:rounded-none md:bg-transparent md:px-0 md:py-3">
      <div className="order-2 flex w-full overflow-x-auto rounded-[8px] bg-[#f1f1f2] scrollbar-thin md:order-1 md:w-auto md:shrink-0 md:bg-white">
        {statuses.map((item) => (
          <button
            key={item}
            onClick={() => setStatus(item)}
            className={`h-[30px] whitespace-nowrap rounded-[7px] px-3 text-[11px] sm:px-4 md:px-3 md:text-[8px] lg:px-4 ${
              status === item ? "bg-[#2b2b2d] text-white" : "text-[#777]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="order-1 flex h-[43px] w-full min-w-0 items-center justify-end gap-1 rounded-[9px] bg-[#eeeeef] p-[4px] md:order-2 md:h-auto md:w-auto md:flex-1 md:gap-2 md:rounded-none md:bg-transparent md:p-0">
        <label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg px-2 md:h-[30px] md:w-[30px] md:flex-none md:justify-center md:border md:border-line md:bg-white md:px-0 lg:w-[230px] lg:justify-start lg:px-3">
          <FiSearch className="shrink-0 text-[13px] text-[#77777d]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              grid ? "Search id, company, etc" : "Search id, company, etc"
            }
            className="min-w-0 flex-1 bg-transparent text-[12px] md:hidden lg:block lg:text-[9px]"
          />
        </label>
        <button
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] md:h-[30px] md:w-[30px] md:border md:border-line md:bg-white lg:w-auto lg:gap-1.5 lg:px-3"
          aria-label="Filter shipments"
        >
          <FiSliders className="lg:hidden" />
          <FiFilter className="hidden lg:block" />
          <span className="hidden lg:inline">Filter</span>
        </button>
        {onAdd && (
          <button
            type="button"
            onClick={onViewChange}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] text-[#66666c] md:hidden"
            aria-label="Table view"
          >
            <FiList />
          </button>
        )}
        {onAdd && (
          <button
            type="button"
            onClick={onAdd}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#29292b] text-white md:hidden"
            aria-label="New shipment"
          >
            <FiPlus />
          </button>
        )}
        {grid ? (
          <>
            <span className="hidden whitespace-nowrap text-[8px] text-[#999] md:inline">
              Sort by
            </span>
            <button className="hidden h-[30px] items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-[8px] md:flex">
              Newest <FiChevronDown />
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

import {
  FiCalendar,
  FiChevronDown,
  FiFilter,
  FiPlus,
  FiSearch,
  FiSliders,
} from "react-icons/fi";

const statuses = ["All", "Completed", "Delivery", "Pending"];

export default function ShipmentTableToolbar({
  status,
  setStatus,
  query,
  setQuery,
  onAdd,
}) {
  return (
    <div className="px-3 py-3 md:px-4 md:py-[15px]">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="order-2 flex w-full rounded-[7px] bg-[#f0f0f1] md:order-1 md:w-auto">
          {statuses.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`h-[30px] flex-1 whitespace-nowrap rounded-[7px] px-3 text-[9px] transition md:flex-none md:px-[18px] ${
                status === item
                  ? "bg-[#2b2b2d] text-white"
                  : "text-[#76767c] hover:text-[#333338]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="order-1 flex min-w-0 items-center gap-2 md:order-2">
          <label className="flex h-[30px] min-w-0 flex-1 items-center gap-2 rounded-[7px] bg-[#f1f1f2] px-3 md:hidden xl:flex xl:w-[200px] xl:flex-none">
            <FiSearch className="shrink-0 text-[14px] text-[#8f8f95]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search id, company, etc"
              className="min-w-0 flex-1 bg-transparent text-[9px] text-[#55555b] placeholder:text-[#9d9da3]"
              aria-label="Search shipments"
            />
          </label>

          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-[7px] bg-[#f4f4f5] text-[#6f6f75] md:flex xl:hidden"
            aria-label="Search shipments"
          >
            <FiSearch size={14} />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[7px] bg-[#f4f4f5] text-[#66666c] xl:hidden"
            aria-label="Filter shipments"
          >
            <FiSliders size={14} />
          </button>

          <button
            type="button"
            className="hidden h-[30px] items-center gap-1.5 rounded-[7px] bg-[#f1f1f2] px-3 text-[9px] text-[#55555a] xl:flex"
          >
            <FiFilter size={13} />
            Filter
            <FiChevronDown size={11} />
          </button>

          <button
            type="button"
            className="hidden h-[30px] items-center gap-1.5 rounded-[7px] bg-[#f1f1f2] px-3 text-[9px] text-[#55555a] md:flex"
          >
            <FiCalendar size={13} />
            This Month
            <FiChevronDown size={11} />
          </button>

          <button
            type="button"
            onClick={onAdd}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[7px] bg-[#29292b] text-white md:hidden"
            aria-label="Create new shipment"
          >
            <FiPlus size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

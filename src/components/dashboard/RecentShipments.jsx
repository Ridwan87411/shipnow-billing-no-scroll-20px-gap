import { useRef, useState } from "react";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { shipmentRecords } from "../../data/shipments";

const rowOverrides = {
  SH9283746: { origin: "Los Angeles, CA", destination: "Chicago, IL", status: "In Transit" },
  SH9457830: { status: "In Transit" },
};

const statusStyles = {
  "In Transit": { backgroundColor: "#e2e2e3", color: "#39393d" },
  "Out for Delivery": { backgroundColor: "#e3ddff", color: "#8062f2" },
  Delivered: { backgroundColor: "#d9f8e8", color: "#13884f" },
  Processing: { backgroundColor: "#dfebff", color: "#2763c7" },
};

function SortIcon() {
  return (
    <svg viewBox="0 0 12 14" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m3 5 3-3 3 3M9 9l-3 3-3-3" />
    </svg>
  );
}

function SortControlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 6h10M4 11h7M4 16h4M17 5v13m0 0-3-3m3 3 3-3" />
    </svg>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        aria-label={label}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className="flex h-[14px] w-[14px] items-center justify-center rounded-[4px] border transition-colors"
        style={{
          backgroundColor: checked ? "#8062F2" : "#F1F1F2",
          borderColor: checked ? "#8062F2" : "#DEDEE1",
        }}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-[10px] w-[10px]" fill="none" stroke="white" strokeWidth="2">
            <path d="m2.2 6.2 2.2 2.2 5-5" />
          </svg>
        )}
      </span>
    </label>
  );
}

export default function RecentShipments() {
  const [selected, setSelected] = useState(() => new Set());
  const scrollRef = useRef(null);
  const dragRef = useRef({ active: false, x: 0, left: 0 });
  const rows = shipmentRecords.slice(0, 5).map((item) => ({
    ...item,
    ...rowOverrides[item.id],
  }));
  const allSelected = rows.length > 0 && rows.every((item) => selected.has(item.id));

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(rows.map((item) => item.id)));
  };

  const toggleRow = (id) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const startDrag = (event) => {
    if (event.target.closest("button, input, label, a")) return;
    if (event.pointerType === "mouse" && !event.target.closest("tbody")) return;
    const scroller = scrollRef.current;
    if (!scroller) return;
    dragRef.current = {
      active: true,
      x: event.clientX,
      left: scroller.scrollLeft,
    };
    scroller.setPointerCapture?.(event.pointerId);
  };

  const moveDrag = (event) => {
    if (!dragRef.current.active || !scrollRef.current) return;
    scrollRef.current.scrollLeft =
      dragRef.current.left - (event.clientX - dragRef.current.x);
  };

  const stopDrag = () => {
    dragRef.current.active = false;
  };

  return (
    <section className="card h-[414px] min-w-0 overflow-hidden p-4 sm:h-auto">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-[16px] font-semibold text-[#29292d]">
          <span className="sm:hidden">Recent Shipment</span>
          <span className="hidden sm:inline">Recent Shipments</span>
        </h2>
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#f1f1f2] px-0 sm:h-9 sm:w-[220px] sm:justify-start sm:rounded-[9px] sm:px-3">
            <FiSearch className="shrink-0 text-[14px] text-[#29292d] sm:text-[18px]" />
            <input
              type="search"
              aria-label="Search shipment"
              placeholder="Search shipment"
              className="hidden min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#85858b] sm:ml-2 sm:block"
            />
          </label>
          <button
            type="button"
            aria-label="Sort shipments"
            className="hidden h-9 w-9 items-center justify-center rounded-[9px] bg-[#f1f1f2] text-[#29292d] sm:flex"
          >
            <SortControlIcon />
          </button>
          <button
            type="button"
            aria-label="More shipment options"
            className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#f1f1f2] text-[#74747a] sm:h-9 sm:w-9 sm:rounded-[9px]"
          >
            <FiMoreHorizontal />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-thin cursor-grab touch-pan-x overflow-x-auto overscroll-x-contain active:cursor-grabbing md:cursor-auto md:overflow-visible"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        role="region"
        aria-label="Scrollable recent shipments table"
        tabIndex={0}
      >
        <table className="w-full min-w-[790px] table-fixed text-left md:min-w-0">
          <colgroup>
            <col className="w-[17%]" />
            <col className="w-[14%]" />
            <col className="w-[10%]" />
            <col className="w-[27%]" />
            <col className="w-[15%]" />
            <col className="w-[17%]" />
          </colgroup>
          <thead>
            <tr className="h-[42px] bg-[#e3ddff] text-[8px] font-normal text-[#303034] sm:text-[11px]">
              <th className="rounded-l-[9px] px-3 font-normal">
                <span className="flex items-center gap-3">
                  <Checkbox
                    label="Select all recent shipments"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                  <span className="flex items-center gap-1">Shipping ID <SortIcon /></span>
                </span>
              </th>
              {["Company", "Carriers", "Route", "Shipping Date", "Status"].map((label, index) => (
                <th
                  key={label}
                  className={`px-3 font-normal ${index === 4 ? "rounded-r-[9px]" : ""}`}
                >
                  <span className="flex items-center gap-1">{label} <SortIcon /></span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id} className="h-[57px] border-b border-[#dedee0] last:border-b-0">
                <td className="h-[57px] px-3">
                  <span className="flex items-center gap-3">
                    <Checkbox
                      label={`Select shipment ${item.id}`}
                      checked={selected.has(item.id)}
                      onChange={() => toggleRow(item.id)}
                    />
                    <span className="text-[8px] font-medium text-[#8062f2] sm:text-[12px]">#{item.id}</span>
                  </span>
                </td>
                <td className="h-[57px] px-3">
                  <p className="text-[8px] leading-none text-[#303034] sm:text-[12px]">{item.company}</p>
                  <p className="mt-2 text-[7px] leading-none text-[#85858b] sm:text-[10px]">
                    {item.id === "SH9037821" ? "Home & Kitchen" : item.category}
                  </p>
                </td>
                <td className="h-[57px] px-3 text-[8px] text-[#3b3b3f] sm:text-[12px]">{item.carrier}</td>
                <td className="h-[57px] px-3 text-[8px] text-[#3b3b3f] sm:text-[12px]">
                  {item.origin} → {item.destination}
                </td>
                <td className="h-[57px] px-3 text-[8px] text-[#3b3b3f] sm:text-[12px]">{item.date}</td>
                <td className="h-[57px] px-3">
                  <span
                    className="inline-flex min-h-[24px] items-center whitespace-nowrap rounded-full px-[11px] py-[5px] text-[11px] font-medium leading-none"
                    style={statusStyles[item.status]}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

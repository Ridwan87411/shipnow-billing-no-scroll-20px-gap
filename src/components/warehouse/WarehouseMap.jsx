import { useState } from "react";

const floors = ["Floor 1", "Floor 2", "Floor 3"];

export default function WarehouseMap() {
  const [floor, setFloor] = useState("Floor 1");
  const cells = Array.from({ length: 28 }, (_, i) => i);

  return (
    <section className="card min-w-0 p-3 sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-[15px] font-semibold text-ink sm:text-[17px]">Warehouse Map</h2>
          <p className="mt-1 text-[10px] text-muted">Select a floor to view active storage cells</p>
        </div>
        <div className="flex rounded-lg bg-[#f3f3f4] p-1">
          {floors.map((item) => (
            <button
              key={item}
              onClick={() => setFloor(item)}
              className={`rounded-md px-2 py-1.5 text-[10px] sm:px-3 ${
                floor === item ? "bg-white text-brand-700 shadow-sm" : "text-[#777]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 rounded-xl bg-[#f7f7f8] p-3 sm:grid-cols-7 sm:p-4">
        {cells.map((cell) => {
          const active = (cell + floors.indexOf(floor)) % 5 !== 0;
          return (
            <button
              key={cell}
              title={`${floor} zone ${cell + 1}`}
              className={`aspect-square rounded-lg border text-[10px] font-medium transition hover:-translate-y-0.5 hover:shadow-sm sm:text-[11px] ${
                active
                  ? "border-brand-200 bg-brand-100 text-brand-700"
                  : "border-line bg-white text-[#bbb]"
              }`}
            >
              {cell + 1}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-4 text-[9px] text-muted sm:text-[10px]">
        <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-sm border border-brand-200 bg-brand-100" /> Occupied</span>
        <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-sm border border-line bg-white" /> Available</span>
        <span className="ml-auto font-medium text-[#555]">{floor} · 28 cells</span>
      </div>
    </section>
  );
}

import { useState } from "react";

const floors = ["Floor 1", "Floor 2", "Floor 3"];

export default function WarehouseMap() {
  const [floor, setFloor] = useState("Floor 1");
  const cells = Array.from({ length: 28 }, (_, i) => i);

  return (
    <section className="card p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="section-title">Warehouse Map</h2>
        <div className="flex rounded-lg bg-[#f3f3f4] p-1">
          {floors.map((item) => (
            <button
              key={item}
              onClick={() => setFloor(item)}
              className={`rounded-md px-3 py-1.5 text-[9px] ${
                floor === item ? "bg-white text-brand-700 shadow-sm" : "text-[#777]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2 rounded-xl bg-[#f7f7f8] p-4">
        {cells.map((cell) => {
          const active = (cell + floors.indexOf(floor)) % 5 !== 0;
          return (
            <button
              key={cell}
              title={`${floor} zone ${cell + 1}`}
              className={`aspect-square rounded-md border text-[8px] ${
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
    </section>
  );
}

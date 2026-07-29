import { FiGrid, FiList } from "react-icons/fi";

export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex overflow-hidden rounded-lg border border-line bg-white p-1">
      <button
        onClick={() => setView("table")}
        className={`flex h-7 w-8 items-center justify-center rounded-md ${
          view === "table" ? "bg-ink text-white" : "text-[#777]"
        }`}
        aria-label="Table view"
      >
        <FiList />
      </button>
      <button
        onClick={() => setView("grid")}
        className={`flex h-7 w-8 items-center justify-center rounded-md ${
          view === "grid" ? "bg-ink text-white" : "text-[#777]"
        }`}
        aria-label="Grid view"
      >
        <FiGrid />
      </button>
    </div>
  );
}

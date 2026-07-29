import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({
  page,
  pages,
  setPage,
  pageSize,
  setPageSize,
  total,
}) {
  const visible = Array.from({ length: Math.min(pages, 3) }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-3 border-t border-line px-3 py-3 text-[11px] text-[#777] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1);
          }}
          className="rounded-md border border-line bg-white px-2 py-1.5"
          aria-label="Rows per page"
        >
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
        <span>of {total.toLocaleString()} results</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f4f4f5] disabled:opacity-40"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          aria-label="Previous page"
        >
          <FiChevronLeft />
        </button>
        {visible.map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`h-8 min-w-8 rounded-md px-2 ${
              page === item
                ? "bg-brand-600 text-white"
                : "bg-[#f5f5f6] text-[#555]"
            }`}
          >
            {item}
          </button>
        ))}
        {pages > 4 && <span className="px-1">...</span>}
        {pages > 3 && (
          <button
            onClick={() => setPage(pages)}
            className={`h-8 min-w-8 rounded-md px-2 ${
              page === pages
                ? "bg-brand-600 text-white"
                : "bg-[#f5f5f6] text-[#555]"
            }`}
          >
            {pages}
          </button>
        )}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f4f4f5] disabled:opacity-40"
          onClick={() => setPage((p) => Math.min(pages, p + 1))}
          disabled={page === pages}
          aria-label="Next page"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

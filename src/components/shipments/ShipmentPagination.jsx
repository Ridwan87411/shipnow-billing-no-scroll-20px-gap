import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ShipmentPagination({
  page,
  setPage,
  pageSize,
  setPageSize,
  pages = 16,
  total = 1240,
}) {
  const leadingPages = Array.from(
    { length: Math.min(3, pages) },
    (_, index) => index + 1
  );
  const showEllipsis = pages > 4;
  const showLastPage = pages > 3;

  return (
    <div className="flex h-[52px] items-center justify-center border-t border-[#dedee2] px-3 text-[10px] text-[#77777d] md:justify-between md:px-4">
      <div className="hidden items-center gap-2 md:flex">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(event) => {
            setPageSize(Number(event.target.value));
            setPage(1);
          }}
          className="bg-transparent pr-1 text-[10px] font-medium text-[#55555b]"
          aria-label="Rows per page"
        >
          <option value={8}>8</option>
          <option value={11}>11</option>
          <option value={16}>16</option>
        </select>
        <span className="text-[#a0a0a6]">of {total.toLocaleString()} results</span>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page === 1}
          className="flex h-7 w-7 items-center justify-center rounded-[7px] text-[#a0a0a6] disabled:bg-[#f4f4f5] disabled:opacity-45"
          aria-label="Previous page"
        >
          <FiChevronLeft size={13} />
        </button>

        {leadingPages.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setPage(item)}
            className={`h-7 min-w-7 rounded-[7px] px-2 text-[9px] ${
              page === item
                ? "bg-brand-600 text-white"
                : "text-[#55555b]"
            }`}
          >
            {item}
          </button>
        ))}

        {showEllipsis && (
          <span className="px-1 text-[#898990]">...</span>
        )}

        {showLastPage && (
          <button
            type="button"
            onClick={() => setPage(pages)}
            className={`h-7 min-w-7 rounded-[7px] px-2 text-[9px] ${
              page === pages
                ? "bg-brand-600 text-white"
                : "text-[#55555b]"
            }`}
          >
            {pages}
          </button>
        )}

        <button
          type="button"
          onClick={() => setPage((current) => Math.min(pages, current + 1))}
          disabled={page === pages}
          className="flex h-7 w-7 items-center justify-center rounded-[7px] text-[#77777d] disabled:bg-[#f4f4f5] disabled:opacity-45"
          aria-label="Next page"
        >
          <FiChevronRight size={13} />
        </button>
      </div>
    </div>
  );
}

import { FiMoreHorizontal } from "react-icons/fi";

export default function SectionCard({ title, action, children, className = "" }) {
  return (
    <section className={`card min-w-0 p-4 ${className}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="section-title">{title}</h2>
        {action || (
          <button
            className="flex h-7 w-7 items-center justify-center rounded-md bg-[#f5f5f6] text-[#8b8b90]"
            aria-label={`${title} options`}
          >
            <FiMoreHorizontal />
          </button>
        )}
      </div>
      {children}
    </section>
  );
}

import { useLocation } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";

export default function Placeholder() {
  const location = useLocation();
  const title = location.pathname
    .split("/")
    .filter(Boolean)
    .join(" ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <div>
      <PageHeader title={title || "Page"} breadcrumb={title || "Page"} />
      <section className="card flex min-h-[360px] items-center justify-center p-8 text-center">
        <div>
          <p className="text-[16px] font-semibold text-ink">{title}</p>
          <p className="mt-2 max-w-md text-[11px] leading-relaxed text-[#888]">
            This navigation item is intentionally present because the assignment requires
            non-deliverable screens to remain rendered and styled.
          </p>
        </div>
      </section>
    </div>
  );
}

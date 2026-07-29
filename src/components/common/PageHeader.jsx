export default function PageHeader({
  title,
  breadcrumb,
  action,
  right,
}) {
  return (
    <div className="mb-5 hidden flex-col gap-3 md:flex md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-[22px] font-semibold leading-none tracking-[-0.03em] text-ink">
          {title}
        </h1>
        {breadcrumb && (
          <p className="mt-1.5 text-[10px]">
            <span className="text-brand-600">Dashboard</span>
            <span className="mx-1 text-[#aaa]">/</span>
            <span className="text-[#777]">{breadcrumb}</span>
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {right}
        {action}
      </div>
    </div>
  );
}

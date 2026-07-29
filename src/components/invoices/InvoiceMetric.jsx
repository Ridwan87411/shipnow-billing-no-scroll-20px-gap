const iconMap = {
  "Paid Invoices": "/assets/invoices/metric-paid.png",
  "Unpaid Invoices": "/assets/invoices/metric-unpaid.png",
  "Pending Invoices": "/assets/invoices/metric-pending.png",
  "Overdue Invoices": "/assets/invoices/metric-overdue.png",
};

export default function InvoiceMetric({ item }) {
  return (
    <article
      className="
        min-h-[142px] rounded-[11px] border border-[#ececef] bg-white
        px-4 py-4 shadow-[0_1px_1px_rgba(0,0,0,0.02)]

        md:flex md:min-h-[116px] md:items-center md:justify-between md:px-5
        xl:min-h-[119px]
      "
    >
      <span
        className="
          flex h-[42px] w-[42px] shrink-0 items-center justify-center
          rounded-[8px] bg-[#8268F4]

          md:h-[52px] md:w-[52px]
        "
      >
        <img
          src={iconMap[item.label]}
          alt=""
          aria-hidden="true"
          className="h-[22px] w-[22px] object-contain md:h-[25px] md:w-[25px]"
        />
      </span>

      <div className="mt-3 min-w-0 text-left md:mt-0 md:text-right">
        <p className="truncate text-[9px] font-normal text-[#7b7b82] md:text-[10px]">
          {item.label}
        </p>
        <p className="mt-1 whitespace-nowrap text-[25px] font-semibold leading-none tracking-[-0.035em] text-[#29292d] md:text-[30px]">
          {item.value}
        </p>
        <p className="mt-2 whitespace-nowrap text-[8px] text-[#9a9aa0]">
          from{" "}
          <span className="rounded-[4px] bg-[#e6f8ee] px-1.5 py-0.5 font-medium text-[#2d9c67]">
            {item.count}
          </span>{" "}
          invoices
        </p>
      </div>
    </article>
  );
}

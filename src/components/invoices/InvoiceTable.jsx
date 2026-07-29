import { FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";
import StatusBadge from "../common/StatusBadge";

function SortMark() {
  return (
    <span className="ml-1 inline-flex translate-y-[1px] flex-col text-[#77777d]">
      <FiChevronUp className="h-[6px] w-[6px]" />
      <FiChevronDown className="-mt-[2px] h-[6px] w-[6px]" />
    </span>
  );
}

function HeaderLabel({ children }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap">
      {children}
      <SortMark />
    </span>
  );
}

export default function InvoiceTable({
  invoices,
  selectedId,
  onSelect,
  faded = false,
  mobile = false,
}) {
  return (
    <div className={`w-full overflow-hidden ${faded ? "opacity-45" : ""}`}>
      <table
        className={`w-full table-fixed border-collapse text-left text-[9px] text-[#55555b] ${
          mobile ? "" : ""
        }`}
      >
        <colgroup>
          <col className={mobile ? "w-[34px]" : "w-[34px]"} />
          <col className={mobile ? "w-[27%]" : "w-[17%]"} />
          <col className={mobile ? "w-[38%]" : "w-[22%]"} />
          {!mobile && <col className="w-[17%]" />}
          <col className={mobile ? "w-[35%]" : "w-[18%]"} />
          {!mobile && <col className="w-[14%]" />}
          {!mobile && <col className="w-[12%]" />}
        </colgroup>

        <thead>
          <tr className="h-[46px] border-b border-[#e6e6e9] text-[#4f4f55]">
            <th className="px-2 font-medium sm:px-3">
              <span
                className="flex h-[13px] w-[13px] items-center justify-center rounded-[3px] bg-[#8268F4]"
                aria-hidden="true"
              >
                <span className="h-[1.5px] w-[6px] rounded-full bg-white" />
              </span>
            </th>

            <th className="px-1.5 font-medium sm:px-2">
              <HeaderLabel>Invoice ID</HeaderLabel>
            </th>

            <th className="px-1.5 font-medium sm:px-2">
              <HeaderLabel>Company</HeaderLabel>
            </th>

            {!mobile && (
              <th className="px-2 font-medium">
                <HeaderLabel>Shipping ID</HeaderLabel>
              </th>
            )}

            <th className="px-1.5 font-medium sm:px-2">
              <HeaderLabel>Date</HeaderLabel>
            </th>

            {!mobile && (
              <th className="px-2 text-right font-medium">
                <HeaderLabel>Amount</HeaderLabel>
              </th>
            )}

            {!mobile && (
              <th className="px-3 text-right font-medium">
                <HeaderLabel>Status</HeaderLabel>
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => {
            const selected = selectedId === invoice.id;

            return (
              <tr
                key={invoice.id}
                onClick={() => onSelect(invoice.id)}
                className={`cursor-pointer border-b border-[#ececef] transition last:border-0 ${
                  selected ? "bg-[#F1EDFF]" : "hover:bg-[#faf9ff]"
                } ${mobile ? "h-[58px]" : "h-[55px]"}`}
              >
                <td className="px-3 py-2" onClick={(event) => event.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => onSelect(invoice.id)}
                    className="h-[13px] w-[13px] rounded accent-[#8268F4]"
                    aria-label={`Select ${invoice.id}`}
                  />
                </td>

                <td className="min-w-0 overflow-hidden whitespace-nowrap px-1.5 py-2 sm:px-2">
                  <span className="block truncate font-medium text-[#8066F0]">{invoice.id}</span>
                  {!mobile && (
                    <FiFileText className="ml-1 inline text-[11px] text-[#9c9ca2]" />
                  )}
                </td>

                <td className="overflow-hidden px-2 py-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <img
                      src={invoice.logo}
                      alt=""
                      aria-hidden="true"
                      className="h-[17px] w-[17px] shrink-0 object-contain"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-[#3d3d42]">
                        {invoice.company}
                      </p>
                      {mobile && (
                        <p className="truncate text-[7.5px] text-[#99999f]">
                          {invoice.shippingId}
                        </p>
                      )}
                    </div>
                  </div>
                </td>

                {!mobile && (
                  <td className="min-w-0 overflow-hidden truncate whitespace-nowrap px-1.5 py-2 text-[#77777d] sm:px-2">
                    {invoice.shippingId}
                  </td>
                )}

                <td className="min-w-0 overflow-hidden whitespace-nowrap px-1.5 py-2 leading-[1.45] sm:px-2">
                  <p className="truncate">
                    {invoice.issueDate}{" "}
                    {!mobile && <span className="text-[#99999f]">(Issued)</span>}
                  </p>
                  <p className="truncate">
                    {invoice.dueDate}{" "}
                    {!mobile && <span className="text-[#99999f]">(Due)</span>}
                  </p>
                </td>

                {!mobile && (
                  <td className="min-w-0 overflow-hidden truncate whitespace-nowrap px-1.5 py-2 text-right font-medium text-[#444449] sm:px-2">
                    ${invoice.displayAmount}
                  </td>
                )}

                {!mobile && (
                  <td className="min-w-0 overflow-hidden whitespace-nowrap px-1.5 py-2 text-right sm:px-3">
                    <StatusBadge status={invoice.status} />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

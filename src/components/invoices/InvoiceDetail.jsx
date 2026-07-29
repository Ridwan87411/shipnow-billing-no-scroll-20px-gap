import { FiChevronDown, FiChevronLeft, FiChevronUp } from "react-icons/fi";
import StatusBadge from "../common/StatusBadge";

function SortMark() {
  return (
    <span className="ml-1 inline-flex translate-y-[1px] flex-col text-[#77777d]">
      <FiChevronUp className="h-[6px] w-[6px]" />
      <FiChevronDown className="-mt-[2px] h-[6px] w-[6px]" />
    </span>
  );
}

function DetailHeader({ children, align = "left" }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap ${
        align === "right" ? "justify-end" : ""
      }`}
    >
      {children}
      <SortMark />
    </span>
  );
}

export default function InvoiceDetail({ invoice, mobile = false }) {
  if (!invoice) return null;

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#ececef] bg-white">
      <div className="flex min-h-[58px] items-center justify-between gap-2 px-4">
        <h2 className="flex items-center gap-2 text-[14px] font-medium text-[#36363a]">
          {mobile && <FiChevronLeft className="text-[17px]" />}
          Invoice Details
        </h2>
        <div className="hidden gap-2 md:flex">
          <button className="h-[31px] rounded-[7px] bg-[#f1f1f2] px-3 text-[9px] text-[#55555a]">
            Edit
          </button>
          <button className="h-[31px] rounded-[7px] bg-[#f1f1f2] px-3 text-[9px] text-[#55555a]">
            Hold
          </button>
          <button className="h-[31px] whitespace-nowrap rounded-[7px] bg-[#29292b] px-3 text-[9px] text-white">
            Send Invoice
          </button>
        </div>
      </div>

      <div className="mx-3 mb-3 rounded-[10px] border border-[#dedee2] p-3 sm:mx-4 sm:mb-4 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium text-[#444449]">
              Invoice{" "}
              <span className="font-semibold text-[#8066F0]">
                #{invoice.id}
              </span>
            </p>
            <div className="mt-1">
              <StatusBadge status={invoice.status} />
            </div>
          </div>
          <div className="text-right text-[8px] leading-[1.65] text-[#77777d]">
            <p>
              Issue Date{" "}
              <b className="text-[#333338]">{invoice.issueDate}</b>
            </p>
            <p>
              Due Date <b className="text-[#333338]">{invoice.dueDate}</b>
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 rounded-[8px] bg-[#f5f5f6] p-3">
          <div>
            <p className="text-[8px] text-[#99999f]">Bill From</p>
            <p className="mt-1 text-[13px] font-semibold text-[#3d3d42]">
              {invoice.company}
            </p>
            <p className="mt-1 text-[8px] text-[#77777d]">{invoice.email}</p>
            <p className="mt-1 text-[8px] leading-[1.45] text-[#77777d]">
              {invoice.address}
            </p>
            <p className="mt-1 text-[8px] text-[#77777d]">{invoice.phone}</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-[#99999f]">Bill To</p>
            <p className="mt-1 text-[13px] font-semibold text-[#3d3d42]">
              ShipNow Logistics
            </p>
            <p className="mt-1 text-[8px] text-[#77777d]">
              accounts@shipnow.com
            </p>
            <p className="mt-1 text-[8px] leading-[1.45] text-[#77777d]">
              901 Distribution Ave, Charlotte, NC 28217, USA
            </p>
            <p className="mt-1 text-[8px] text-[#77777d]">
              +1 704-555-9911
            </p>
          </div>
        </div>

        <h3 className="mt-4 text-[12px] font-medium text-[#404045]">
          Package Summary
        </h3>

        <div className="mt-2 overflow-x-auto rounded-[7px] border border-[#dedee2] scrollbar-thin">
          <table className="w-full min-w-[440px] text-left text-[8px] text-[#4e4e53]">
            <thead className="h-[36px] bg-[#f5f5f6] text-[#4f4f55]">
              <tr>
                <th className="px-2 font-medium">
                  <DetailHeader>Description</DetailHeader>
                </th>
                <th className="px-2 font-medium">
                  <DetailHeader>Shipment Type</DetailHeader>
                </th>
                <th className="px-2 font-medium">
                  <DetailHeader>Price</DetailHeader>
                </th>
                <th className="px-2 font-medium">
                  <DetailHeader>Qty</DetailHeader>
                </th>
                <th className="px-2 text-right font-medium">
                  <DetailHeader align="right">Amount</DetailHeader>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr
                  key={`${item.description}-${index}`}
                  className="h-[52px] border-t border-[#e8e8eb]"
                >
                  <td className="px-2 py-2">{item.description}</td>
                  <td className="px-2 py-2 leading-[1.35]">{item.type}</td>
                  <td className="px-2 py-2">${item.price.toFixed(2)}</td>
                  <td className="px-2 py-2">{item.qty}</td>
                  <td className="px-2 py-2 text-right">
                    ${(item.price * item.qty).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="ml-auto w-[48%] min-w-[190px] px-2 pb-2 text-[8px]">
            <div className="flex justify-between py-1.5">
              <span className="text-[#77777d]">Sub Total</span>
              <span>${invoice.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#77777d]">Tax (8%)</span>
              <span>${invoice.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#77777d]">Fee</span>
              <span>${invoice.fee.toFixed(2)}</span>
            </div>
            <div className="mt-1 flex justify-between border-t border-[#e7e7ea] py-2 text-[9px] font-semibold">
              <span>Total</span>
              <span>${invoice.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[8px] font-medium text-[#66666c]">Note</p>
          <p className="mt-1 text-[8px] leading-[1.45] text-[#66666c]">
            Please process payment by the due date to avoid delivery disruption.
            Late fees may apply after 3 business days past due.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 px-3 pb-3 md:hidden">
        <button
          type="button"
          className="h-[42px] rounded-[7px] bg-[#f1f1f2] text-[10px] font-medium text-[#55555a]"
        >
          Edit
        </button>
        <button
          type="button"
          className="h-[42px] rounded-[7px] bg-[#f1f1f2] text-[10px] font-medium text-[#55555a]"
        >
          Hold
        </button>
        <button
          type="button"
          className="h-[42px] whitespace-nowrap rounded-[7px] bg-[#29292b] text-[10px] font-medium text-white"
        >
          Send Invoice
        </button>
      </div>
    </section>
  );
}

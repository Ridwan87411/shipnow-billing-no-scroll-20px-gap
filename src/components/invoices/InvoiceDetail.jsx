import { FiChevronDown, FiChevronLeft, FiChevronUp } from "react-icons/fi";

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
    <section className="h-full overflow-hidden rounded-[11px] border border-[#e6e6e9] bg-white">
      <div className="flex h-[48px] items-center justify-between gap-2 px-4">
        <h2 className="flex items-center gap-2 text-[18px] font-medium text-[#303034]">
          {mobile && <FiChevronLeft className="text-[17px]" />}
          Invoice Details
        </h2>
        <div className="hidden gap-2 md:flex">
          <button className="h-[30px] rounded-[8px] bg-[#f1f1f2] px-4 text-[13px] text-[#45454a]">
            Edit
          </button>
          <button className="h-[30px] rounded-[8px] bg-[#f1f1f2] px-4 text-[13px] text-[#45454a]">
            Hold
          </button>
          <button className="h-[30px] whitespace-nowrap rounded-[8px] bg-[#29292b] px-4 text-[13px] text-white">
            Send Invoice
          </button>
        </div>
      </div>

      <div className="mx-3 mb-3 rounded-[10px] border border-[#dedee2] p-[14px] xl:h-[662px]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[16px] font-medium leading-none text-[#343439]">
              Invoice{" "}
              <span className="font-medium text-[#8066F0]">
                #{invoice.id}
              </span>
            </p>
            <span className="mt-[7px] inline-flex h-[18px] items-center rounded-full bg-[#efe9ff] px-[10px] text-[11px] font-medium text-[#6f54cb]">
              {invoice.status}
            </span>
          </div>
          <div className="text-right text-[12px] leading-[1.7] text-[#85858a]">
            <p>
              Issue Date{" "}
              <b className="font-medium text-[#3a3a3f]">{invoice.issueDate}</b>
            </p>
            <p>
              Due Date{" "}
              <b className="font-medium text-[#3a3a3f]">{invoice.dueDate}</b>
            </p>
          </div>
        </div>

        <div className="mt-4 grid min-h-[140px] grid-cols-2 gap-4 rounded-[8px] bg-[#f5f5f6] p-3">
          <div>
            <p className="text-[12px] text-[#99999f]">Bill From</p>
            <p className="mt-2 text-[19px] font-semibold leading-none text-[#35353a]">
              {invoice.company}
            </p>
            <p className="mt-1.5 text-[12px] text-[#77777d]">{invoice.email}</p>
            <p className="mt-2 text-[12px] leading-[1.4] text-[#77777d]">
              {invoice.address}
            </p>
            <p className="mt-2 text-[12px] text-[#77777d]">{invoice.phone}</p>
          </div>
          <div className="text-right">
            <p className="text-[12px] text-[#99999f]">Bill To</p>
            <p className="mt-2 text-[19px] font-semibold leading-none text-[#35353a]">
              ShipNow Logistics
            </p>
            <p className="mt-1.5 text-[12px] text-[#77777d]">
              accounts@shipnow.com
            </p>
            <p className="mt-2 text-[12px] leading-[1.4] text-[#77777d]">
              901 Distribution Ave, Charlotte, NC 28217, USA
            </p>
            <p className="mt-2 text-[12px] text-[#77777d]">
              +1 704-555-9911
            </p>
          </div>
        </div>

        <h3 className="mt-5 text-[17px] font-medium leading-none text-[#404045]">
          Package Summary
        </h3>

        <div className="mt-3 overflow-x-auto rounded-[7px] border border-[#dedee2] scrollbar-thin">
          <table
            className={`w-full table-fixed text-left text-[#4e4e53] ${
              mobile ? "min-w-0 text-[10px]" : "min-w-[360px] text-[11px]"
            }`}
          >
            <colgroup>
              <col className={mobile ? "w-[46%]" : "w-[32%]"} />
              <col className={mobile ? "w-[32%]" : "w-[22%]"} />
              {!mobile && <col className="w-[14%]" />}
              {!mobile && <col className="w-[10%]" />}
              <col className={mobile ? "w-[22%]" : "w-[22%]"} />
            </colgroup>
            <thead className="h-[34px] bg-[#f5f5f6] text-[10px] text-[#4f4f55]">
              <tr>
                <th className="px-2 font-medium">
                  <DetailHeader>Description</DetailHeader>
                </th>
                <th className="px-2 font-medium">
                  <DetailHeader>Shipment Type</DetailHeader>
                </th>
                {!mobile && (
                  <th className="px-2 font-medium">
                    <DetailHeader>Price</DetailHeader>
                  </th>
                )}
                {!mobile && (
                  <th className="px-2 font-medium">
                    <DetailHeader>Qty</DetailHeader>
                  </th>
                )}
                <th className="px-2 text-right font-medium">
                  <DetailHeader align="right">Amount</DetailHeader>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => {
                const typeParts = item.type.split(" ");
                const shipmentType = typeParts.slice(0, 2).join(" ");
                const shipmentSubtype = typeParts.slice(2).join(" ");

                return (
                  <tr
                    key={`${item.description}-${index}`}
                    className={`border-t border-[#e8e8eb] ${mobile ? "h-[54px]" : "h-[46px]"}`}
                  >
                    <td className="px-2 py-2">
                      <p>{item.description}</p>
                      {mobile && (
                        <p className="mt-1 leading-none">
                          <span className="text-[#8066F0]">
                            ${item.price.toFixed(2)}
                          </span>
                          <span className="text-[#85858b]">
                            {" \u00d7 "}
                            {item.qty}
                          </span>
                        </p>
                      )}
                    </td>
                    <td className="px-2 py-2 leading-[1.35]">
                      {mobile ? (
                        <>
                          <p>{shipmentType}</p>
                          {shipmentSubtype && (
                            <p className="text-[#85858b]">{shipmentSubtype}</p>
                          )}
                        </>
                      ) : (
                        item.type
                      )}
                    </td>
                    {!mobile && <td className="px-2 py-2">${item.price.toFixed(2)}</td>}
                    {!mobile && <td className="px-2 py-2">{item.qty}</td>}
                    <td className="px-2 py-2 text-right">
                      ${(item.price * item.qty).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div
            className={`ml-auto px-2 pb-1 text-[11px] ${
              mobile ? "w-[55%] min-w-0" : "w-[66%] min-w-[210px]"
            }`}
          >
            <div className="flex justify-between py-[5px]">
              <span className="text-[#77777d]">Sub Total</span>
              <span>${invoice.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-[5px]">
              <span className="text-[#77777d]">Tax (8%)</span>
              <span>${invoice.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-[5px]">
              <span className="text-[#77777d]">Fee</span>
              <span>${invoice.fee.toFixed(2)}</span>
            </div>
            <div className="mt-1 flex justify-between border-t border-[#e7e7ea] py-[8px] text-[13px] font-semibold">
              <span>Total</span>
              <span>${invoice.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-medium text-[#66666c]">Note</p>
          <p className="mt-2 text-[11px] font-semibold leading-[1.4] text-[#55555a]">
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

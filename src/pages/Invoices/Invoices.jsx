import { useMemo, useState } from "react";
import { FiPlus, FiSearch, FiSliders } from "react-icons/fi";
import InvoiceMetric from "../../components/invoices/InvoiceMetric";
import InvoiceTable from "../../components/invoices/InvoiceTable";
import InvoiceDetail from "../../components/invoices/InvoiceDetail";
import { invoiceMetrics, invoices } from "../../data/invoices";

function InvoiceSearch({ query, setQuery }) {
  return (
    <label className="flex h-[30px] w-[208px] items-center gap-2 rounded-[7px] bg-[#f4f4f5] px-3 lg:w-[214px]">
      <FiSearch className="shrink-0 text-[13px] text-[#68686e]" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search invoices"
        className="min-w-0 flex-1 bg-transparent text-[9px] text-[#55555a] placeholder:text-[#8d8d93]"
      />
    </label>
  );
}

function DesktopToolbar({ query, setQuery }) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <InvoiceSearch query={query} setQuery={setQuery} />
      <button
        className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[#f2f2f3] text-[#55555b]"
        aria-label="Filter invoices"
      >
        <FiSliders size={13} />
      </button>
      <button className="flex h-[30px] items-center gap-1.5 rounded-[7px] bg-[#29292b] px-4 text-[9px] text-white">
        <FiPlus size={12} /> New Invoice
      </button>
    </div>
  );
}

function MobileToolbar() {
  return (
    <div className="flex gap-2">
      <button
        className="flex h-[34px] w-[34px] items-center justify-center rounded-[7px] bg-[#f2f2f3] text-[#38383d]"
        aria-label="Search invoices"
      >
        <FiSearch size={15} />
      </button>
      <button
        className="flex h-[34px] w-[34px] items-center justify-center rounded-[7px] bg-[#f2f2f3] text-[#38383d]"
        aria-label="Filter invoices"
      >
        <FiSliders size={15} />
      </button>
      <button
        className="flex h-[34px] w-[34px] items-center justify-center rounded-[7px] bg-[#29292b] text-white"
        aria-label="New invoice"
      >
        <FiPlus size={17} />
      </button>
    </div>
  );
}

export default function Invoices() {
  const [selectedId, setSelectedId] = useState("INV-1008");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      invoices.filter((invoice) =>
        [invoice.id, invoice.company, invoice.shippingId]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  const selectedInvoice =
    invoices.find((invoice) => invoice.id === selectedId) || invoices[7];

  return (
    <div className="invoice-page xl:-ml-1 xl:w-[calc(100%+4px)]">
      <div className="mb-5 hidden items-start justify-between gap-4 md:flex">
        <div>
          <h1 className="text-[25px] font-semibold leading-none tracking-[-0.03em] text-[#29292d]">
            Invoices & Billing
          </h1>
          <p className="mt-1.5 text-[9px]">
            <span className="text-[#8066F0]">Dashboard</span>
            <span className="mx-1 text-[#aaaab0]">/</span>
            <span className="text-[#66666c]">Invoices & Billing</span>
          </p>
        </div>

        <label className="flex h-[42px] w-[285px] items-center gap-2 rounded-[8px] bg-white px-4">
          <FiSearch className="text-[17px] text-[#77777d]" />
          <input
            placeholder="Search anything"
            className="min-w-0 flex-1 bg-transparent text-[10px] placeholder:text-[#99999f]"
          />
        </label>
      </div>

      <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {invoiceMetrics.map((item) => (
          <InvoiceMetric key={item.label} item={item} />
        ))}
      </section>

      {/* Desktop: list and detail side by side */}
      <section className="mt-4 hidden h-[734px] grid-cols-[minmax(0,1fr)_479px] gap-4 xl:grid">
        <div className="overflow-hidden rounded-[11px] border border-[#ececef] bg-white">
          <div className="flex min-h-[58px] items-center justify-between gap-3 px-4">
            <h2 className="text-[14px] font-medium text-[#36363a]">Invoices</h2>
            <DesktopToolbar query={query} setQuery={setQuery} />
          </div>
          <InvoiceTable
            invoices={filtered}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        <InvoiceDetail invoice={selectedInvoice} />
      </section>

      {/* Tablet: full-width list, then master/detail row from Figma */}
      <div className="mt-4 hidden md:block xl:hidden">
        <section className="overflow-hidden rounded-[11px] border border-[#ececef] bg-white">
          <div className="flex min-h-[58px] items-center justify-between gap-3 px-4">
            <h2 className="text-[14px] font-medium text-[#36363a]">Invoices</h2>
            <DesktopToolbar query={query} setQuery={setQuery} />
          </div>
          <InvoiceTable
            invoices={filtered}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </section>

        <section className="mt-4 grid grid-cols-[minmax(250px,0.7fr)_minmax(420px,1fr)] gap-0 overflow-hidden rounded-[11px] border border-[#ececef] bg-white">
          <div className="min-w-0 overflow-hidden border-r border-[#ececef]">
            <div className="flex h-[58px] items-center px-4 text-[14px] font-medium">
              Invoices
            </div>
            <InvoiceTable
              invoices={filtered}
              selectedId={selectedId}
              onSelect={setSelectedId}
              faded
            />
          </div>
          <InvoiceDetail invoice={selectedInvoice} mobile />
        </section>
      </div>

      {/* Mobile: icon-only toolbar and reduced table columns */}
      <div className="mt-4 md:hidden">
        <section className="overflow-hidden rounded-[11px] border border-[#ececef] bg-white">
          <div className="flex min-h-[62px] items-center justify-between px-3">
            <h2 className="text-[14px] font-medium text-[#333338]">Invoices</h2>
            <MobileToolbar />
          </div>
          <InvoiceTable
            invoices={filtered}
            selectedId={selectedId}
            onSelect={setSelectedId}
            mobile
          />
        </section>

        <div className="mt-4">
          <InvoiceDetail invoice={selectedInvoice} mobile />
        </div>
      </div>
    </div>
  );
}

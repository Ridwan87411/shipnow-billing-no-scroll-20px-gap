import { useMemo, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  PiAirplaneTilt,
  PiBoat,
  PiTrain,
  PiTruck,
} from "react-icons/pi";

const companyLogos = {
  "TechGear Inc.": "/assets/invoices/techgear.png",
  "StyleHub Co.": "/assets/invoices/stylehub.png",
  FreshNest: "/assets/invoices/freshnest.png",
  "FitPlus Gear": "/assets/invoices/fitplus.png",
  "AutoParts Pro": "/assets/invoices/autoparts.png",
  EcoLights: "/assets/invoices/ecolights.png",
  GreenHaven: "/assets/invoices/greenhaven.png",
  ModaWear: "/assets/invoices/modawear.png",
  "SunCore Panels": "/assets/invoices/suncore.png",
  VitaFresh: "/assets/invoices/vitafresh.png",
  StyleDepot: "/assets/invoices/styledepot.svg",
};

const scheduleById = {
  SH9283746: ["10:00 AM", "03:00 PM"],
  SH9182635: ["11:30 AM", "01:00 PM"],
  SH9037821: ["09:00 AM", "06:00 PM"],
  SH9374652: ["08:45 AM", "04:30 PM"],
  SH9457830: ["07:15 AM", "02:00 PM"],
  SH8821349: ["12:00 PM", "05:00 PM"],
  SH8967432: ["02:45 PM", "11:00 AM"],
  SH8893247: ["01:00 PM", "08:00 AM"],
  SH9018723: ["09:30 AM", "01:30 PM"],
  SH8881190: ["06:00 AM", "10:00 AM"],
  SH8776103: ["10:15 AM", "03:30 PM"],
};

const columnWidths = {
  select: "3%",
  id: "9%",
  company: "12%",
  carrier: "8%",
  category: "11%",
  weight: "7%",
  route: "15%",
  date: "17%",
  progress: "11%",
  status: "7%",
};

const desktopColumns = [
  "id",
  "company",
  "carrier",
  "category",
  "weight",
  "route",
  "date",
  "progress",
  "status",
];

const responsiveColumns = [
  "id",
  "company",
  "carrier",
  "route",
  "date",
  "category",
  "weight",
  "progress",
  "status",
];

const columnLabels = {
  id: "Shipping ID",
  company: "Company",
  carrier: "Carriers",
  category: "Product Category",
  weight: "Weight",
  route: "Route",
  date: "Date",
  progress: "Progress",
  status: "Status",
};

const sortKeys = {
  id: "id",
  company: "company",
  carrier: "carrier",
  category: "category",
  weight: "weight",
  route: "origin",
  date: "date",
  progress: "progress",
  status: "status",
};

const displayedStatus = (status, progress) => {
  if (progress === 100) return "Completed";
  if (status === "Processing") return "Pending";
  return "Delivery";
};

function SortMark() {
  return (
    <span className="flex flex-col text-[#9d9da3]">
      <FiChevronUp className="h-[6px] w-[6px]" />
      <FiChevronDown className="-mt-[2px] h-[6px] w-[6px]" />
    </span>
  );
}

function CompanyMark({ company }) {
  const src = companyLogos[company];

  if (src) {
    return (
      <img
        src={src}
        alt=""
        className="h-[22px] w-[22px] shrink-0 object-contain"
      />
    );
  }

  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center">
      <span className="h-[13px] w-[13px] rotate-45 bg-[#2d2d31]" />
    </span>
  );
}

function ShipmentStatus({ status, progress }) {
  const value = displayedStatus(status, progress);
  const completed = value === "Completed";
  const pending = value === "Pending";

  return (
    <span className="inline-flex h-[17px] items-center whitespace-nowrap rounded-full bg-[#f4f4f5] px-[7px] text-[8px] font-medium text-[#45454a]">
      <span
        className={`mr-1.5 h-[6px] w-[6px] rounded-full ${
          completed
            ? "bg-[#23bb70]"
            : pending
              ? "bg-[#7b7b80]"
              : "bg-[#b4a5ff]"
        }`}
      />
      {value}
    </span>
  );
}

function FreightModeIcon({ mode }) {
  const iconClass = "h-[12px] w-[12px] shrink-0";

  if (mode === "Air Freight") {
    return <PiAirplaneTilt className={iconClass} aria-hidden="true" />;
  }

  if (mode === "Ocean Freight") {
    return <PiBoat className={iconClass} aria-hidden="true" />;
  }

  if (mode === "Rail Freight") {
    return <PiTrain className={iconClass} aria-hidden="true" />;
  }

  return <PiTruck className={iconClass} aria-hidden="true" />;
}

function ShipmentDataTable({
  columns,
  rows,
  selected,
  setSelected,
  sort,
  toggleSort,
  toggleAll,
}) {
  const renderHeader = (column) => (
    <th
      key={column}
      className="px-2 font-normal"
      style={{ width: columnWidths[column] }}
    >
      <button
        type="button"
        onClick={() => toggleSort(sortKeys[column])}
        className="flex items-center gap-1 whitespace-nowrap"
      >
        {columnLabels[column]}
        <SortMark />
      </button>
    </th>
  );

  const renderCell = (row, column) => {
    const sourceId = row.sourceId || row.id;
    const [departureTime = "10:00 AM", arrivalTime = "03:00 PM"] =
      scheduleById[sourceId] || [];

    if (column === "id") {
      return (
        <td key={column} className="px-2 align-middle">
          <p className="truncate font-semibold text-brand-700">#{row.id}</p>
          <p className="mt-[5px] flex items-center gap-[4px] truncate text-[7px] text-[#8f8f94]">
            <FreightModeIcon mode={row.mode} />
            <span className="truncate">{row.mode}</span>
          </p>
        </td>
      );
    }

    if (column === "company") {
      return (
        <td key={column} className="px-2 align-middle">
          <div className="flex min-w-0 items-center gap-2">
            <CompanyMark company={row.company} />
            <div className="min-w-0">
              <p className="truncate font-medium text-[#303034]">
                {row.company}
              </p>
              <p className="mt-1 truncate text-[7px] text-[#99999f]">
                {row.category}
              </p>
            </div>
          </div>
        </td>
      );
    }

    if (column === "carrier") {
      return (
        <td key={column} className="px-2 align-middle">
          <p className="truncate font-medium text-[#303034]">{row.carrier}</p>
        </td>
      );
    }

    if (column === "category") {
      return (
        <td key={column} className="px-2 align-middle">
          <p className="truncate">{row.category}</p>
        </td>
      );
    }

    if (column === "weight") {
      return (
        <td key={column} className="px-2 align-middle">
          <p className="truncate">{row.weight}</p>
        </td>
      );
    }

    if (column === "route") {
      return (
        <td key={column} className="px-2 align-middle leading-[1.45]">
          <p className="truncate">
            {row.origin} <span className="text-[#a0a0a6]">(Origin)</span>
          </p>
          <p className="mt-1 truncate font-medium text-brand-700">
            {row.destination}{" "}
            <span className="font-normal text-[#a0a0a6]">(Destination)</span>
          </p>
        </td>
      );
    }

    if (column === "date") {
      return (
        <td key={column} className="px-2 align-middle leading-[1.45]">
          <p className="truncate">
            {row.date} – {departureTime}{" "}
            <span className="text-[#a0a0a6]">(ATD)</span>
          </p>
          <p className="mt-1 truncate font-medium text-brand-700">
            {row.eta} – {arrivalTime}{" "}
            <span className="font-normal text-[#a0a0a6]">(ETA)</span>
          </p>
        </td>
      );
    }

    if (column === "progress") {
      return (
        <td key={column} className="px-2 align-middle">
          <div className="flex items-center gap-2">
            <div className="h-[5px] min-w-0 flex-1 rounded-full bg-[#ededee]">
              <div
                className="h-full rounded-full bg-brand-600"
                style={{ width: `${row.progress}%` }}
              />
            </div>
            <span className="w-7 text-right text-[8px]">
              {row.progress}%
            </span>
          </div>
        </td>
      );
    }

    return (
      <td key={column} className="px-2 align-middle">
        <ShipmentStatus status={row.status} progress={row.progress} />
      </td>
    );
  };

  return (
    <table className="w-full min-w-[1020px] table-fixed text-left text-[9px] text-[#444449]">
      <colgroup>
        <col style={{ width: columnWidths.select }} />
        {columns.map((column) => (
          <col
            key={column}
            style={{ width: columnWidths[column] }}
          />
        ))}
      </colgroup>

      <thead>
        <tr className="h-[38px] border-b border-[#e5e5e8] text-[#55555a]">
          <th className="px-2">
            <input
              type="checkbox"
              checked={
                rows.length > 0 &&
                rows.every((row) => selected.includes(row.id))
              }
              onChange={toggleAll}
              className="h-[11px] w-[11px] accent-brand-600"
              aria-label="Select every visible shipment"
            />
          </th>
          {columns.map(renderHeader)}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr
            key={row.id}
            className="h-[54px] border-b border-[#dedee2] last:border-b-0 hover:bg-[#fcfbff]"
          >
            <td className="px-2 align-middle">
              <input
                type="checkbox"
                checked={selected.includes(row.id)}
                onChange={() =>
                  setSelected((current) =>
                    current.includes(row.id)
                      ? current.filter((id) => id !== row.id)
                      : [...current, row.id]
                  )
                }
                className="h-[11px] w-[11px] accent-brand-600"
                aria-label={`Select ${row.id}`}
              />
            </td>
            {columns.map((column) => renderCell(row, column))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ShipmentsTable({ rows, selected, setSelected }) {
  const [sort, setSort] = useState(null);

  const sortedRows = useMemo(() => {
    if (!sort) return rows;

    return [...rows].sort((first, second) => {
      const a = String(first[sort.key] ?? "");
      const b = String(second[sort.key] ?? "");

      if (sort.key === "progress") {
        return sort.direction === "asc"
          ? Number(first.progress) - Number(second.progress)
          : Number(second.progress) - Number(first.progress);
      }

      return sort.direction === "asc"
        ? a.localeCompare(b)
        : b.localeCompare(a);
    });
  }, [rows, sort]);

  const toggleSort = (key) => {
    setSort((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const toggleAll = () => {
    const ids = rows.map((row) => row.id);
    const everyRowSelected = ids.every((id) => selected.includes(id));
    setSelected(everyRowSelected ? [] : ids);
  };

  const sharedProps = {
    rows: sortedRows,
    selected,
    setSelected,
    sort,
    toggleSort,
    toggleAll,
  };

  return (
    <div
      className="
        w-full overflow-x-scroll overflow-y-hidden pb-1
        scrollbar-thin
        xl:overflow-x-hidden xl:pb-0
      "
    >
      <div className="xl:hidden">
        <ShipmentDataTable columns={responsiveColumns} {...sharedProps} />
      </div>

      <div className="hidden xl:block">
        <ShipmentDataTable columns={desktopColumns} {...sharedProps} />
      </div>
    </div>
  );
}

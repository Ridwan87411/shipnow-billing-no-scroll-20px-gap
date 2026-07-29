import { useEffect, useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import Pagination from "../../components/common/Pagination";
import ShipmentCard from "../../components/shipments/ShipmentCard";
import ShipmentPagination from "../../components/shipments/ShipmentPagination";
import ShipmentSummaryCard from "../../components/shipments/ShipmentSummaryCard";
import ShipmentTableToolbar from "../../components/shipments/ShipmentTableToolbar";
import ShipmentToolbar from "../../components/shipments/ShipmentToolbar";
import ShipmentsTable from "../../components/shipments/ShipmentsTable";
import ViewToggle from "../../components/shipments/ViewToggle";
import {
  gridShipmentRecords,
  shipmentRecords,
  shipmentSummary,
} from "../../data/shipments";

const TABLE_PAGE_COUNT = 16;
const gridStatusOverrides = {
  SH8967432: "In Transit",
  SH8893247: "Out for Delivery",
};

function createTableRecords() {
  return Array.from(
    { length: shipmentRecords.length * TABLE_PAGE_COUNT },
    (_, index) => {
      const source = shipmentRecords[index % shipmentRecords.length];
      const pageIndex = Math.floor(index / shipmentRecords.length);

      if (pageIndex === 0) {
        return source;
      }

      const serial = String(index + 1).padStart(4, "0");

      return {
        ...source,
        sourceId: source.id,
        id: `${source.id.slice(0, 5)}${serial}`,
      };
    }
  );
}

function createGridRecords() {
  return Array.from(
    { length: gridShipmentRecords.length * TABLE_PAGE_COUNT },
    (_, index) => {
      const source = gridShipmentRecords[index % gridShipmentRecords.length];

      if (index < gridShipmentRecords.length) {
        return source;
      }

      const serial = String(index + 1).padStart(4, "0");
      return {
        ...source,
        sourceId: source.id,
        id: `${source.id.slice(0, 5)}${serial}`,
      };
    }
  );
}

export default function Shipments() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const initialView = params.get("view") === "grid" ? "grid" : "table";

  const [view, setViewState] = useState(initialView);
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(view === "grid" ? 12 : 11);
  const [selected, setSelected] = useState([]);

  const tableRecords = useMemo(createTableRecords, []);
  const gridRecords = useMemo(createGridRecords, []);

  const setView = (nextView) => {
    setViewState(nextView);
    setParams(
      nextView === "grid" ? { view: "grid" } : { view: "table" },
      { replace: true }
    );
    setPage(1);
    setPageSize(nextView === "grid" ? 12 : 11);
  };

  useEffect(() => {
    setPage(1);
  }, [status, query]);

  const sourceRecords = view === "table" ? tableRecords : gridRecords;

  const filtered = useMemo(() => {
    return sourceRecords.filter((item) => {
      const sourceId = item.sourceId || item.id;
      const gridStatus = gridStatusOverrides[sourceId] || item.status;
      const matchesQuery = [
        item.id,
        item.company,
        item.carrier,
        item.origin,
        item.destination,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesStatus =
        status === "All" ||
        (view === "grid" && gridStatus === status) ||
        (status === "Completed" && item.progress === 100) ||
        (status === "Delivery" &&
          item.progress < 100 &&
          item.status !== "Processing") ||
        (status === "Pending" && item.status === "Processing");

      return matchesQuery && matchesStatus;
    });
  }, [query, sourceRecords, status, view]);

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, pages);
  const pageRows = filtered.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  return (
    <div>
      <PageHeader
        title="Shipments"
        breadcrumb="Shipments"
        right={<ViewToggle view={view} setView={setView} />}
        action={
          <button
            type="button"
            onClick={() => navigate("/shipments/new")}
            className="flex h-10 items-center gap-2 rounded-[7px] bg-[#29292b] px-4 text-[10px] text-white"
          >
            <FiPlus size={14} />
            <span>New Shipment</span>
          </button>
        }
      />

      {view === "table" && (
        <div className="mb-4 grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-[14px]">
          {shipmentSummary.map((item) => (
            <ShipmentSummaryCard key={item.label} item={item} />
          ))}
        </div>
      )}

      <section
        className={
          view === "table"
            ? "overflow-hidden rounded-[12px] border border-[#e8e8eb] bg-white shadow-card"
            : "bg-transparent"
        }
      >
        {view === "table" ? (
          <ShipmentTableToolbar
            status={status}
            setStatus={setStatus}
            query={query}
            setQuery={setQuery}
            onAdd={() => navigate("/shipments/new")}
          />
        ) : (
          <ShipmentToolbar
            status={status}
            setStatus={setStatus}
            query={query}
            setQuery={setQuery}
            grid
            onAdd={() => navigate("/shipments/new")}
          />
        )}

        {view === "table" ? (
          <ShipmentsTable
            rows={pageRows}
            selected={selected}
            setSelected={setSelected}
          />
        ) : (
          <div className="mt-3 grid gap-4 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
            {pageRows.map((item) => (
              <ShipmentCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {pageRows.length === 0 && (
          <div className="p-10 text-center text-[12px] text-[#88888e]">
            No shipments match the current filters.
          </div>
        )}

        {view === "table" ? (
          <ShipmentPagination
            page={safePage}
            pages={pages}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            total={520}
          />
        ) : (
          <Pagination
            page={safePage}
            pages={pages}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            total={1240}
          />
        )}
      </section>
    </div>
  );
}

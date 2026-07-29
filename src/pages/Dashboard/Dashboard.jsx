import { FiPlus, FiSearch } from "react-icons/fi";
import MetricCard from "../../components/common/MetricCard";
import SearchInput from "../../components/common/SearchInput";
import ShipmentStatistic from "../../components/dashboard/ShipmentStatistic";
import ProfitSummary from "../../components/dashboard/ProfitSummary";
import ShipmentType from "../../components/dashboard/ShipmentType";
import ProductCategories from "../../components/dashboard/ProductCategories";
import TrackingPanel from "../../components/dashboard/TrackingPanel";
import AlertsPanel from "../../components/dashboard/AlertsPanel";
import RecentActivity from "../../components/dashboard/RecentActivity";
import RecentShipments from "../../components/dashboard/RecentShipments";
import { dashboardMetrics } from "../../data/dashboard";

export default function Dashboard() {
  return (
    <div>
      <header className="mb-4 hidden items-center justify-between gap-4 md:flex">
        <div>
          <p className="text-[10px] text-[#9b9ba1]">Hello John!</p>
          <h1 className="text-[21px] font-semibold tracking-[-0.025em]">Good Morning</h1>
        </div>
        <div className="flex items-center gap-3">
          <SearchInput value="" onChange={() => {}} className="w-[260px] xl:w-[330px]" />
          <button className="flex h-10 items-center gap-2 rounded-lg bg-[#262628] px-4 text-[10px] text-white">
            <FiPlus /> Add New Shipping
          </button>
        </div>
      </header>

      <div className="mb-4 md:hidden">
        <div className="flex gap-2">
          <SearchInput value="" onChange={() => {}} className="flex-1" />
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#262628] text-white">
            <FiPlus />
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
        <div className="sm:col-span-2 xl:col-span-1 xl:row-span-2">
          <ShipmentType />
        </div>

        <div className="sm:col-span-2 xl:col-span-1">
          <ShipmentStatistic />
        </div>
        <div className="sm:col-span-2 xl:col-span-2">
          <ProfitSummary />
        </div>

        <div className="sm:col-span-2 xl:col-span-1">
          <ProductCategories />
        </div>
        <div className="sm:col-span-2 xl:col-span-2">
          <TrackingPanel />
        </div>
        <div className="sm:col-span-2 xl:col-span-1">
          <AlertsPanel />
        </div>

        <div className="sm:col-span-2 xl:col-span-3">
          <RecentShipments />
        </div>
        <div className="sm:col-span-2 xl:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

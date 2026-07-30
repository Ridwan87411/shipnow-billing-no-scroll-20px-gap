import { useEffect, useState } from "react";
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
import DashboardSkeleton from "../../components/dashboard/DashboardSkeleton";
import { dashboardMetrics } from "../../data/dashboard";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="-mx-3 w-[412px] min-w-[412px] max-w-[412px] md:mx-0 md:w-auto md:min-w-0 md:max-w-none">
      <header className="mb-4 hidden items-center justify-between gap-4 md:flex">
        <div>
          <p className="text-[10px] text-[#9b9ba1]">Hello John!</p>
          <h1 className="text-[21px] font-semibold tracking-[-0.025em]">Good Morning</h1>
        </div>
        <div className="flex items-center gap-3">
          <SearchInput value="" onChange={() => {}} className="w-[260px] xl:w-[330px]" />
          <button className="flex h-10 items-center gap-2 rounded-lg bg-[#262628] px-4 text-[10px] text-white">
            <FiPlus />
            <span className="xl:hidden">New Shipping</span>
            <span className="hidden xl:inline">Add New Shipping</span>
          </button>
        </div>
      </header>

      <div className="-mt-4 mb-4 w-full bg-white px-4 pb-4 pt-[15px] md:hidden">
        <div className="flex w-full gap-2">
          <SearchInput
            value=""
            onChange={() => {}}
            className="h-[41px] flex-1 rounded-[10px] border-0 bg-[#f1f1f2] [&_input]:text-[14px] [&_svg]:text-[18px] [&_svg]:text-[#29292d]"
          />
          <button className="flex h-[41px] w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#262628] text-white">
            <FiPlus size={24} />
          </button>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-6 md:gap-5 md:px-0 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <div key={metric.label} className="md:col-span-2 xl:col-span-1">
            <MetricCard
              {...metric}
              mobileChange={
                metric.label === "Delivery Performance" || metric.label === "Revenue"
                  ? "+8.7%"
                  : undefined
              }
            />
          </div>
        ))}
        <div className="md:hidden">
          <ShipmentStatistic />
        </div>
        <div className="md:hidden">
          <ProfitSummary />
        </div>
        <div className="md:order-2 md:col-span-3 xl:order-none xl:col-span-1 xl:row-span-2">
          <ShipmentType />
        </div>

        <div className="hidden md:order-1 md:col-span-3 md:block xl:order-none xl:col-span-1">
          <ShipmentStatistic />
        </div>
        <div className="hidden md:order-1 md:col-span-3 md:block xl:order-none xl:col-span-2">
          <ProfitSummary />
        </div>

        <div className="md:order-2 md:col-span-3 xl:order-none xl:col-span-1">
          <ProductCategories />
        </div>
        <div className="md:order-3 md:col-span-6 xl:order-none xl:col-span-2">
          <TrackingPanel />
        </div>
        <div className="md:order-4 md:col-span-3 xl:order-none xl:col-span-1">
          <AlertsPanel />
        </div>

        <div className="md:order-5 md:col-span-6 xl:order-none xl:col-span-3">
          <RecentShipments />
        </div>
        <div className="md:order-4 md:col-span-3 xl:order-none xl:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

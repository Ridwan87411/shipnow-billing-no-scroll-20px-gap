import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer";
import PageSkeleton from "../common/PageSkeleton";

const titleForPath = (pathname) => {
  if (pathname.startsWith("/shipments/new")) return "New Shipment";
  if (pathname.startsWith("/shipments")) return "Shipments";
  if (pathname.startsWith("/invoices")) return "Invoices & Billing";
  if (pathname.startsWith("/warehouse")) return "Warehouse";
  if (pathname.startsWith("/dashboard")) return "Dashboard";
  return pathname.split("/")[1]?.replaceAll("-", " ") || "ShipNow";
};

export default function AppShell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-canvas">
      <div className="fixed inset-y-0 left-0 z-40 hidden lg:block">
        <Sidebar />
      </div>
      <div className="fixed inset-y-0 left-0 z-40 hidden md:block lg:hidden">
        <Sidebar rail />
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            className="absolute inset-0 bg-black/35"
            aria-label="Close navigation"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative h-full w-[228px]">
            <Sidebar onNavigate={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}

      <div className="min-h-screen md:pl-[68px] lg:pl-[240px]">
        <MobileHeader
          title={titleForPath(location.pathname)}
          onMenu={() => setDrawerOpen(true)}
          back={location.pathname.startsWith("/shipments/new")}
        />
        <div className="w-full px-3 pb-3 pt-4 sm:px-4 md:px-5 lg:px-5 lg:pt-5">
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
          <Footer />
        </div>
      </div>
    </div>
  );
}

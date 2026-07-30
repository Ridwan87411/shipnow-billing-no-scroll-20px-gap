import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AppShell from "./components/layout/AppShell";
import PageSkeleton from "./components/common/PageSkeleton";

const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Shipments = lazy(() => import("./pages/Shipments/Shipments"));
const CreateShipment = lazy(() => import("./pages/CreateShipment/CreateShipment"));
const Invoices = lazy(() => import("./pages/Invoices/Invoices"));
const Warehouse = lazy(() => import("./pages/Warehouse/Warehouse"));
const Calendar = lazy(() => import("./pages/Calendar/Calendar"));
const Drivers = lazy(() => import("./pages/Drivers/Drivers"));
const Fleets = lazy(() => import("./pages/Fleets/Fleets"));
const Tracking = lazy(() => import("./pages/Tracking/Tracking"));
const Analytics = lazy(() => import("./pages/Analytics/Analytics"));
const Messages = lazy(() => import("./pages/Messages/Messages"));
const Notifications = lazy(() => import("./pages/Notifications/Notifications"));
const Placeholder = lazy(() => import("./pages/Placeholder/Placeholder"));

function ProtectedLayout() {
  const { authenticated } = useAuth();
  return authenticated ? <AppShell /> : <Navigate to="/login" replace />;
}

export default function App() {
  const { authenticated } = useAuth();

  return (
    <Suspense fallback={<PageSkeleton fullScreen />}>
      <Routes>
      <Route
        path="/login"
        element={authenticated ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/shipments/new" element={<CreateShipment />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/warehouse" element={<Warehouse />} />

        <Route path="/analytics" element={<Analytics />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/settings" element={<Placeholder />} />
      </Route>

      <Route path="/" element={<Navigate to={authenticated ? "/dashboard" : "/login"} replace />} />
      <Route path="*" element={<Navigate to={authenticated ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Suspense>
  );
}

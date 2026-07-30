import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AppShell from "./components/layout/AppShell";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Shipments from "./pages/Shipments/Shipments";
import CreateShipment from "./pages/CreateShipment/CreateShipment";
import Invoices from "./pages/Invoices/Invoices";
import Warehouse from "./pages/Warehouse/Warehouse";
import Calendar from "./pages/Calendar/Calendar";
import Placeholder from "./pages/Placeholder/Placeholder";

function ProtectedLayout() {
  const { authenticated } = useAuth();
  return authenticated ? <AppShell /> : <Navigate to="/login" replace />;
}

export default function App() {
  const { authenticated } = useAuth();

  return (
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

        <Route path="/analytics" element={<Placeholder />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tracking" element={<Placeholder />} />
        <Route path="/fleets" element={<Placeholder />} />
        <Route path="/drivers" element={<Placeholder />} />
        <Route path="/message" element={<Placeholder />} />
        <Route path="/notification" element={<Placeholder />} />
        <Route path="/settings" element={<Placeholder />} />
      </Route>

      <Route path="/" element={<Navigate to={authenticated ? "/dashboard" : "/login"} replace />} />
      <Route path="*" element={<Navigate to={authenticated ? "/dashboard" : "/login"} replace />} />
    </Routes>
  );
}

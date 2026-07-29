import {
  FiGrid,
  FiBarChart2,
  FiCalendar,
  FiTruck,
  FiMapPin,
  FiPackage,
  FiUsers,
  FiFileText,
  FiMessageSquare,
  FiBell,
  FiSettings,
  FiHome,
} from "react-icons/fi";

export const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: FiGrid },
  { label: "Analytics", path: "/analytics", icon: FiBarChart2 },
  { label: "Calendar", path: "/calendar", icon: FiCalendar },
  { label: "Shipments", path: "/shipments", icon: FiTruck },
  { label: "Tracking", path: "/tracking", icon: FiMapPin },
  { label: "Warehouse", path: "/warehouse", icon: FiHome },
  { label: "Fleets", path: "/fleets", icon: FiPackage },
  { label: "Drivers", path: "/drivers", icon: FiUsers },
  { label: "Invoices & Billing", path: "/invoices", icon: FiFileText },
];

export const bottomItems = [
  { label: "Message", path: "/message", icon: FiMessageSquare, count: 19 },
  { label: "Notification", path: "/notification", icon: FiBell, count: 5 },
  { label: "Settings", path: "/settings", icon: FiSettings },
];

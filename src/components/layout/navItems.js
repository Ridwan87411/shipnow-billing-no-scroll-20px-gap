import {
  PiBellRinging,
  PiBus,
  PiCalendarDots,
  PiChatTeardropDots,
  PiGear,
  PiIdentificationCard,
  PiPresentationChart,
  PiReceipt,
  PiSquaresFour,
  PiTruck,
  PiWarehouse,
} from "react-icons/pi";
import TrackingIcon from "./TrackingIcon";

export const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: PiSquaresFour },
  { label: "Analytics", path: "/analytics", icon: PiPresentationChart },
  { label: "Calendar", path: "/calendar", icon: PiCalendarDots },
  { label: "Shipments", path: "/shipments", icon: PiTruck },
  { label: "Tracking", path: "/tracking", icon: TrackingIcon },
  { label: "Warehouse", path: "/warehouse", icon: PiWarehouse },
  { label: "Fleets", path: "/fleets", icon: PiBus },
  { label: "Drivers", path: "/drivers", icon: PiIdentificationCard },
  { label: "Invoices & Billing", path: "/invoices", icon: PiReceipt },
];

export const bottomItems = [
  {
    label: "Message",
    path: "/message",
    icon: PiChatTeardropDots,
    count: 19,
  },
  {
    label: "Notification",
    path: "/notification",
    icon: PiBellRinging,
    count: 5,
  },
  { label: "Settings", path: "/settings", icon: PiGear },
];

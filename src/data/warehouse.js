export const warehouseMetrics = [
  { label: "Total Capacity", value: "82%", sub: "12,460 / 15,200 slots" },
  { label: "Packages Stored", value: "8,742", sub: "+6.8% this month" },
  { label: "Outgoing Today", value: "486", sub: "92% processed" },
  { label: "Incoming Today", value: "392", sub: "71% received" },
];

export const storageTrend = [
  { month: "Jan", occupied: 62, available: 38 },
  { month: "Feb", occupied: 66, available: 34 },
  { month: "Mar", occupied: 70, available: 30 },
  { month: "Apr", occupied: 73, available: 27 },
  { month: "May", occupied: 77, available: 23 },
  { month: "Jun", occupied: 82, available: 18 },
];

export const packageStatus = [
  { name: "Stored", value: 6200, color: "#7c63ef" },
  { name: "Picking", value: 980, color: "#a995ff" },
  { name: "Packed", value: 860, color: "#333333" },
  { name: "Ready to Ship", value: 702, color: "#bdbdbd" },
];

export const storageRows = [
  { zone: "A-01", type: "Electronics", used: 92, capacity: "920 / 1,000", status: "High" },
  { zone: "A-02", type: "Apparel", used: 74, capacity: "740 / 1,000", status: "Normal" },
  { zone: "B-01", type: "Home & Kitchen", used: 81, capacity: "810 / 1,000", status: "Normal" },
  { zone: "B-02", type: "Automotive", used: 66, capacity: "660 / 1,000", status: "Normal" },
  { zone: "C-01", type: "Perishables", used: 88, capacity: "880 / 1,000", status: "High" },
];

export const warehouseActivity = [
  "Dock 04 received shipment SH9283746",
  "Zone A-01 inventory count completed",
  "Picking wave #2035-071 released",
  "Package batch 7842 moved to outbound staging",
  "Floor 2 temperature check completed",
];

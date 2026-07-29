export const dashboardMetrics = [
  {
    label: "Active Shipments",
    value: "1,284",
    suffix: "shipments",
    change: "+8.7%",
    note: "from last week",
    tone: "green",
  },
  {
    label: "Delivery Performance",
    value: "94.3%",
    suffix: "on-time",
    change: "+1.2%",
    note: "from last week",
    tone: "green",
  },
  {
    label: "Revenue",
    value: "$82,450",
    suffix: "",
    change: "+12.4%",
    note: "from last month",
    tone: "green",
  },
];

export const shipmentStats = [
  { month: "Jan", value: 1450 },
  { month: "Feb", value: 1850 },
  { month: "Mar", value: 1180 },
  { month: "Apr", value: 1640 },
  { month: "May", value: 3124 },
  { month: "Jun", value: 1680 },
  { month: "Jul", value: 2550 },
  { month: "Aug", value: 2850 },
];

export const profitData = [
  { month: "Jan", revenue: 52000, cost: 43000 },
  { month: "Feb", revenue: 47000, cost: 42000 },
  { month: "Mar", revenue: 56000, cost: 49000 },
  { month: "Apr", revenue: 61000, cost: 53000 },
  { month: "May", revenue: 67524, cost: 45680 },
  { month: "Jun", revenue: 72000, cost: 61000 },
  { month: "Jul", revenue: 69000, cost: 58000 },
  { month: "Aug", revenue: 76000, cost: 63000 },
];

export const shipmentTypes = [
  { name: "Road Freight", value: 1150, percent: 46, color: "#8068ef" },
  { name: "Ocean Freight", value: 425, percent: 17, color: "#666666" },
  { name: "Air Freight", value: 700, percent: 28, color: "#242424" },
  { name: "Rail Freight", value: 225, percent: 9, color: "#c8c8c8" },
];

export const productCategories = [
  { name: "Electronics", products: 240, percent: 24, color: "#8068ef" },
  { name: "Home & Kitchen", products: 200, percent: 20, color: "#d8d0ff" },
  { name: "Apparel", products: 180, percent: 18, color: "#303030" },
  { name: "Beauty & Health", products: 140, percent: 14, color: "#747474" },
  { name: "Sports & Outdoors", products: 120, percent: 12, color: "#c8c8c8" },
  { name: "Automotive", products: 120, percent: 12, color: "#e1e1e1" },
];

export const alerts = [
  {
    id: 1,
    type: "Customs Clearance Delay",
    shipment: "#SH9473921",
    detail: "Ocean Freight · Mar 20",
  },
  {
    id: 2,
    type: "Incorrect Address Provided",
    shipment: "#SH9758810",
    detail: "Ocean Freight · Mar 20",
  },
  {
    id: 3,
    type: "Weather-Related Hold",
    shipment: "#SH9700861",
    detail: "Air Freight · Mar 19",
  },
  {
    id: 4,
    type: "Incorrect Address Provided",
    shipment: "#SH8771063",
    detail: "Rail Freight · Mar 18",
  },
];

export const activities = [
  {
    initial: "J",
    text: "User @TechGuru99 submitted a bulk shipment request",
    time: "12:00 PM",
  },
  {
    initial: "S",
    text: "Customer Support @SupportKen added a priority tag to Order ID 77889KL",
    time: "11:30 AM",
  },
  {
    initial: "C",
    text: "User @SallyMae88 initiated a return process for Order ID 4455GHII",
    time: "11:00 AM",
  },
  {
    initial: "A",
    text: "Administrator @AdminLisa resolved a delivery issue for Order ID 12345XYZ",
    time: "10:15 AM",
  },
  {
    initial: "C",
    text: "User @Micky92 updated the shipping address for Order ID 6778ABC",
    time: "09:45 AM",
  },
];

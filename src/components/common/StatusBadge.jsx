const map = {
  Delivered: "bg-[#eaf9f1] text-[#21945e]",
  Paid: "bg-[#eaf9f1] text-[#21945e]",
  Completed: "bg-[#eaf9f1] text-[#21945e]",
  "In Transit": "bg-[#f0edff] text-brand-700",
  Delivery: "bg-[#f0edff] text-brand-700",
  "Out for Delivery": "bg-[#efe9ff] text-[#765bd9]",
  Unpaid: "bg-[#efe9ff] text-[#6f54cb]",
  Processing: "bg-[#eef4ff] text-[#5874b7]",
  Pending: "bg-[#fff6d7] text-[#a77b00]",
  Overdue: "bg-[#f0f0f0] text-[#555]",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-medium ${
        map[status] || "bg-[#f2f2f2] text-[#555]"
      }`}
    >
      {status}
    </span>
  );
}

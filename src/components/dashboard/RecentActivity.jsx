import { FiMoreHorizontal } from "react-icons/fi";

const activityItems = [
  {
    tone: "#e3ddff",
    time: "12:00 PM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 6h12v12H5zM8 3h12v12" />
      </svg>
    ),
    content: (
      <>User <span>@TechGuru99</span> submitted a bulk shipment request</>
    ),
  },
  {
    tone: "#e4e4e5",
    time: "11:30 AM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m3 10 7-7h5l6 6-8 8Z" />
        <circle cx="12.2" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    content: (
      <>Customer Support <span>@SupportKen</span> added a priority tag to Order ID 77889JKL</>
    ),
  },
  {
    tone: "#e3ddff",
    time: "11:00 AM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M19 8a7 7 0 1 0 1 7" />
        <path d="M19 3v5h-5" />
      </svg>
    ),
    content: (
      <>User <span>@SallyMae88</span> initiated a return process for Order ID 44556GHI</>
    ),
  },
  {
    tone: "#e4e4e5",
    time: "10:15 AM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="7" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </svg>
    ),
    content: (
      <>Administrator <span>@AdminLisa</span> resolved a delivery issue for Order ID 12345XYZ</>
    ),
  },
  {
    tone: "#e3ddff",
    time: "09:45 AM",
    mobileOnly: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M19 8a7 7 0 1 0 1 7" />
        <path d="M19 3v5h-5" />
      </svg>
    ),
    content: (
      <>User <span>@Mickey92</span> updated the shipping address for Order ID 67890ABC</>
    ),
  },
];

export default function RecentActivity() {
  return (
    <section className="card h-full min-w-0 p-4">
      <div className="flex h-7 items-center justify-between">
        <h2 className="text-[18px] font-semibold text-[#29292d]">Recent Activity</h2>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#f1f1f2] text-[#74747a]"
          aria-label="Recent activity options"
        >
          <FiMoreHorizontal />
        </button>
      </div>

      <div className="relative mt-5">
        <div>
          {activityItems.map((item, index) => (
            <div
              key={item.time}
              className={`relative gap-4 ${item.mobileOnly ? "flex xl:hidden" : "flex"} ${
                index < activityItems.length - 1 ? "mb-4" : "pb-8"
              }`}
            >
              <span
                className={`absolute left-[17px] top-9 z-0 w-[2px] bg-[#cfcfd3] ${
                  index < activityItems.length - 1
                    ? `-bottom-4 ${index === activityItems.length - 2 ? "xl:bottom-0" : ""}`
                    : "bottom-0"
                }`}
              />
              <span
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#29292d]"
                style={{ backgroundColor: item.tone }}
              >
                <span className="h-5 w-5">{item.icon}</span>
              </span>
              <div className="relative z-10 min-w-0 flex-1 pt-[1px]">
                <p className="text-[16px] leading-[1.35] text-[#303034] [&_span]:font-medium [&_span]:text-[#1766d3]">
                  {item.content}
                </p>
                <p className="mt-2 text-[13px] leading-none text-[#8b8b91]">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

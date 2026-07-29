import { activities } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function RecentActivity() {
  return (
    <SectionCard title="Recent Activity">
      <div className="space-y-3">
        {activities.map((item, index) => (
          <div key={index} className="flex gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eee9ff] text-[9px] font-semibold text-brand-700">
              {item.initial}
            </span>
            <div className="min-w-0">
              <p className="text-[9px] leading-[1.4] text-[#555]">{item.text}</p>
              <p className="mt-0.5 text-[8px] text-[#aaa]">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

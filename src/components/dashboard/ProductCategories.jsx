import { productCategories } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function ProductCategories() {
  return (
    <SectionCard title="Product Categories" className="h-[443px] overflow-hidden sm:h-full [&_h2]:text-[16px]">
      <div className="mb-3 flex items-end justify-between">
        <span className="text-[14px] text-[#8c8c92] sm:text-[10px]">Total Products</span>
        <span className="text-[24px] font-semibold sm:text-[22px]">1,000</span>
      </div>

      <div className="mb-5 flex h-[54px] overflow-hidden rounded-md sm:mb-4 sm:h-12">
        {productCategories.map((item) => (
          <div
            key={item.name}
            style={{ width: `${item.percent}%`, background: item.color }}
            title={`${item.name}: ${item.percent}%`}
          />
        ))}
      </div>

      <div className="space-y-3">
        {productCategories.map((item) => (
          <div key={item.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 text-[14px] sm:text-[11px]">
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
              <span className="truncate">{item.name}</span>
            </span>
            <span className="inline-flex h-8 items-center overflow-hidden rounded-md bg-[#f0f0f1]">
              <span className="px-3 text-[12px] text-[#85858b]">{item.products} products</span>
              <span className="flex h-5 items-center border-l border-[#d6d6d9] px-3 text-[12px] font-semibold text-[#303034]">
                {item.percent}%
              </span>
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

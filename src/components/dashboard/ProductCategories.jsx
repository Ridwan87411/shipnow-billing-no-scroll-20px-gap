import { productCategories } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function ProductCategories() {
  return (
    <SectionCard title="Product Categories" className="h-full">
      <div className="mb-3 flex items-end justify-between">
        <span className="text-[10px] text-[#8c8c92]">Total Products</span>
        <span className="text-[22px] font-semibold">1,000</span>
      </div>

      <div className="mb-4 flex h-12 overflow-hidden rounded-md">
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
          <div key={item.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 text-[11px]">
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
              <span className="truncate">{item.name}</span>
            </span>
            <span className="inline-flex h-8 items-center overflow-hidden rounded-md bg-[#f0f0f1]">
              <span className="px-3 text-[#85858b]">{item.products} products</span>
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

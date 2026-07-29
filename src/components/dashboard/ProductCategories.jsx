import { productCategories } from "../../data/dashboard";
import SectionCard from "./SectionCard";

export default function ProductCategories() {
  return (
    <SectionCard title="Product Categories">
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

      <div className="space-y-2.5">
        {productCategories.map((item) => (
          <div key={item.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 text-[9px]">
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
              <span className="truncate">{item.name}</span>
            </span>
            <span className="rounded bg-[#f5f5f6] px-2 py-1 text-[#8c8c92]">
              {item.products} products
            </span>
            <span className="font-medium">{item.percent}%</span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

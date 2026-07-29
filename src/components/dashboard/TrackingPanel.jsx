import { FiMinus, FiPlus, FiSearch } from "react-icons/fi";
import SectionCard from "./SectionCard";

export default function TrackingPanel() {
  return (
    <SectionCard title="" className="overflow-hidden p-0">
      <div className="relative h-[285px] bg-[#f0f0f1]">
        <div className="absolute left-3 right-3 top-3 z-10 flex h-9 items-center gap-2 rounded-lg border border-line bg-white px-3">
          <span className="text-[9px] text-[#9a9aa1]">Search by Shipping ID...</span>
          <FiSearch className="ml-auto text-[#8c8c92]" />
        </div>
        <div className="absolute right-3 top-[62px] z-10 overflow-hidden rounded-md border border-line bg-white">
          <button className="flex h-8 w-8 items-center justify-center border-b border-line" aria-label="Zoom in">
            <FiPlus />
          </button>
          <button className="flex h-8 w-8 items-center justify-center" aria-label="Zoom out">
            <FiMinus />
          </button>
        </div>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 600 300"
          preserveAspectRatio="none"
          aria-label="Shipment route from San Francisco to New York"
        >
          <path d="M0,70 L600,70 M0,145 L600,145 M0,220 L600,220" stroke="#e5e5e5" />
          <path d="M150,0 L150,300 M300,0 L300,300 M450,0 L450,300" stroke="#e5e5e5" />
          <path
            d="M0 215 C110 180, 180 150, 280 130 S455 82, 600 48"
            fill="none"
            stroke="#2e2e31"
            strokeWidth="4"
          />
          <path
            d="M310 123 C390 100, 500 70, 600 48"
            fill="none"
            stroke="#8268ef"
            strokeWidth="7"
          />
          <circle cx="310" cy="123" r="11" fill="#8268ef" stroke="white" strokeWidth="5" />
          <path d="M305 117 L318 123 L305 129 Z" fill="white" />
        </svg>

        <div className="absolute bottom-0 left-0 right-0 border-t border-line bg-white/95 p-3 backdrop-blur">
          <div className="mb-2 flex justify-between gap-4 text-[9px]">
            <div>
              <p className="font-semibold">#SH8743921</p>
              <span className="mt-1 inline-flex rounded-full bg-[#eee9ff] px-2 py-0.5 text-[8px] text-brand-700">
                In Transit
              </span>
            </div>
            <div className="text-right text-[#888]">
              <p>Courier: Daniel Cooper</p>
              <p>SkyLogic Express</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-[3px] border-brand-600 bg-white" />
            <span className="h-1 flex-1 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-[#d8d2ff]" />
            <span className="h-3 w-3 rounded-full border-[3px] border-[#d8d2ff] bg-white" />
          </div>
          <div className="mt-2 flex justify-between text-[8px]">
            <div>
              <p className="font-medium">San Francisco, CA, USA</p>
              <p className="text-[#999]">Mar 19, 2035 · 10:30 AM</p>
            </div>
            <div className="text-right">
              <p className="font-medium">New York, NY, USA</p>
              <p className="text-[#999]">Mar 23, 2035 · 03:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

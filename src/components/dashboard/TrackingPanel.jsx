import { FiMinus, FiPlus, FiSearch } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";

export default function TrackingPanel() {
  return (
    <section className="card min-w-0 overflow-hidden bg-white p-[10px]">
      <div className="relative h-[362px] overflow-hidden rounded-[10px] bg-[#f1f1f2] md:h-[316px] xl:h-[419px]">
        <label className="absolute left-[10px] top-[10px] z-20 flex h-9 w-[calc(100%-20px)] items-center rounded-[10px] bg-white px-[14px] shadow-[0_7px_16px_rgba(32,32,35,0.12)] md:w-[min(253px,calc(100%-58px))]">
          <input
            type="search"
            aria-label="Search by Shipping ID"
            placeholder="Search by Shipping ID..."
            className="min-w-0 flex-1 bg-transparent text-[12px] text-[#2e2e31] outline-none placeholder:text-[#85858b]"
          />
          <FiSearch className="ml-2 shrink-0 text-[18px] text-[#262629]" />
        </label>

        <div className="absolute bottom-[140px] right-[10px] z-20 overflow-hidden rounded-[9px] bg-white shadow-[0_7px_16px_rgba(32,32,35,0.12)] md:bottom-auto md:top-[10px]">
          <button
            type="button"
            className="flex h-[29px] w-[28px] items-center justify-center border-b border-[#dedee1] text-[17px] text-[#3d3d41]"
            aria-label="Zoom in"
          >
            <FiPlus />
          </button>
          <button
            type="button"
            className="flex h-[29px] w-[28px] items-center justify-center text-[17px] text-[#3d3d41]"
            aria-label="Zoom out"
          >
            <FiMinus />
          </button>
        </div>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 469 419"
          preserveAspectRatio="none"
          aria-label="Shipment route from San Francisco to New York"
        >
          <path className="md:hidden" d="M0 174 L227 122" fill="none" stroke="#29292c" strokeWidth="4" />
          <path className="hidden md:block" d="M0 239 L16 194 L227 122" fill="none" stroke="#29292c" strokeWidth="4" />
          <path d="M227 122 L469 81" fill="none" stroke="#8062f2" strokeWidth="7" />
          <circle cx="227" cy="122" r="13" fill="#8062f2" stroke="#f3dfe8" strokeWidth="4" />
          <path d="M220 115 L234 121 L226 126 L223 131 Z" fill="white" />
        </svg>

        <div className="absolute bottom-0 left-0 right-0 z-10 rounded-none bg-white px-2 py-[14px] shadow-none md:bottom-[10px] md:left-[10px] md:right-auto md:w-[60%] md:rounded-[11px] md:px-4 md:shadow-[0_7px_18px_rgba(32,32,35,0.12)] xl:right-[10px] xl:w-auto">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[14px] font-semibold leading-none text-[#303034]">#SH8743921</p>
              <div className="mt-2 flex items-center gap-1.5 text-[10px]">
                <span className="rounded-full bg-[#e5ddff] px-2 py-1 leading-none text-[#554676]">
                  In Transit
                </span>
                <span className="text-[#85858b]">On Schedule</span>
              </div>
            </div>
            <div className="pr-1 text-left">
              <p className="text-[10px] leading-none text-[#85858b]">Courier:</p>
              <p className="mt-1.5 text-[12px] font-medium leading-none text-[#303034]">Daniel Cooper</p>
              <p className="mt-1.5 text-[10px] leading-none text-[#85858b]">SkyLogix Express</p>
            </div>
          </div>

          <div className="relative mt-[15px] h-[16px]">
            <div className="absolute left-[7px] right-[7px] top-[6px] h-1 rounded-full bg-[#dedee0]" />
            <div className="absolute left-[7px] top-[6px] h-1 w-[66%] rounded-full bg-[#8062f2]" />
            <span className="absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-[#8062f2] bg-white ring-1 ring-[#8062f2]" />
            <span className="absolute left-[66%] top-1/2 flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#8062f2] text-white">
              <TbTruckDelivery className="text-[15px]" />
            </span>
            <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-[#f1f1f2] ring-1 ring-[#d8d8da]" />
          </div>

          <div className="mt-[13px] flex justify-between gap-3">
            <div>
              <p className="text-[13px] font-medium leading-none text-[#303034]">San Francisco, CA, USA</p>
              <p className="mt-2 text-[10px] leading-none text-[#85858b]">Mar 19, 2035 – 10:30 AM</p>
            </div>
            <div className="text-right">
              <p className="text-[13px] font-medium leading-none text-[#303034]">New York, NY, USA</p>
              <p className="mt-2 text-[10px] leading-none text-[#85858b]">
                Mar 23, 2035 – 03:00 PM (estimated)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

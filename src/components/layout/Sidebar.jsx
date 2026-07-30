import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import Logo from "../common/Logo";
import { navItems, bottomItems } from "./navItems";
import { useAuth } from "../../context/AuthContext";

function NavItem({ item, rail = false, onNavigate }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onNavigate}
      className={({ isActive }) =>
        `group relative flex h-[38px] items-center rounded-[7px] text-[14px] transition ${
          rail ? "justify-center px-0" : "gap-3 px-3"
        } ${
          isActive
            ? "bg-[#ebe6ff] font-medium text-brand-700"
            : "text-[#737378] hover:bg-[#f7f7f8] hover:text-ink"
        }`
      }
      title={rail ? item.label : undefined}
    >
      <Icon className="shrink-0 text-[19px]" />

      {!rail && <span className="truncate">{item.label}</span>}

      {!rail && item.count ? (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-md bg-[#856DF3] px-1 text-[10px] text-white">
          {item.count}
        </span>
      ) : null}

      {rail && item.count ? (
        <span
          className="absolute right-[9px] top-[7px] h-[7px] w-[7px] rounded-full bg-[#856DF3] ring-2 ring-white"
          aria-label={`${item.count} unread`}
        />
      ) : null}
    </NavLink>
  );
}

function SidebarSkeleton({ rail }) {
  const itemCount = navItems.length + bottomItems.length + 1;

  return (
    <div
      className={`absolute inset-0 z-50 flex flex-col bg-white ${
        rail ? "px-2" : "px-4"
      }`}
      aria-label="Loading navigation"
    >
      <div
        className={`flex h-[78px] items-center ${
          rail ? "justify-center" : ""
        }`}
      >
        <div
          className={`animate-pulse rounded-md bg-[#e4dfff] ${
            rail ? "h-7 w-7" : "h-7 w-[128px]"
          }`}
        />
      </div>

      <div
        className={`flex h-[43px] animate-pulse items-center rounded-lg bg-[#f1f1f3] ${
          rail ? "justify-center" : "gap-3 px-2.5"
        }`}
      >
        <div className="h-8 w-8 shrink-0 rounded-full bg-[#ddddE1]" />
        {!rail && (
          <div className="flex-1">
            <div className="h-2.5 w-20 rounded-full bg-[#d8d8dc]" />
            <div className="mt-2 h-2 w-10 rounded-full bg-[#e0e0e3]" />
          </div>
        )}
      </div>

      <div className="mt-4 space-y-0">
        {Array.from({ length: itemCount }, (_, index) => (
          <div
            key={index}
            className={`flex h-[38px] animate-pulse items-center rounded-[7px] ${
              index === 0 ? "bg-[#eeeaff]" : ""
            } ${rail ? "justify-center" : "gap-3 px-3"}`}
          >
            <div className="h-[17px] w-[17px] shrink-0 rounded-[4px] bg-[#dcdce0]" />
            {!rail && (
              <>
                <div
                  className={`h-2.5 rounded-full bg-[#e1e1e4] ${
                    index % 3 === 0
                      ? "w-24"
                      : index % 3 === 1
                        ? "w-16"
                        : "w-20"
                  }`}
                />
                {(index === itemCount - 4 || index === itemCount - 3) && (
                  <div className="ml-auto h-5 w-5 rounded-md bg-[#ddd7ff]" />
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {!rail && (
        <div className="mb-4 mt-auto h-[252px] animate-pulse rounded-[12px] bg-[#29292b] p-6">
          <div className="h-7 w-28 rounded-full bg-white/20" />
          <div className="mt-3 h-7 w-32 rounded-full bg-white/20" />
          <div className="mt-3 h-7 w-20 rounded-full bg-white/20" />
          <div className="mt-7 h-2.5 w-full rounded-full bg-white/15" />
          <div className="mt-2 h-2.5 w-[86%] rounded-full bg-white/15" />
          <div className="mt-2 h-2.5 w-[72%] rounded-full bg-white/15" />
          <div className="mt-8 h-[46px] rounded-[10px] bg-white/80" />
        </div>
      )}
    </div>
  );
}

function PromoBanner() {
  return (
    <div className="relative mx-auto mb-4 mt-3 flex h-[230px] w-[208px] shrink-0 flex-col overflow-hidden rounded-[12px] bg-[#252525] px-6 py-4 text-white">
      <span
        className="pointer-events-none absolute right-[15px] top-0 h-[38px] w-[35px] bg-[#856DF3]"
        style={{ clipPath: "polygon(28% 0, 100% 0, 72% 100%, 0 100%)" }}
      />
      <span
        className="pointer-events-none absolute right-0 top-[29px] bg-[#856DF3]"
        style={{
          width: "34.38px",
          height: "37.62px",
          opacity: 0.2,
          clipPath: "polygon(28% 0, 100% 0, 72% 100%, 0 100%)",
        }}
      />

      <p className="relative z-10 text-[29px] font-semibold leading-[1.02] tracking-[-0.035em]">
        Loving
        <br />
        ShipNow
        <br />
        Free?
      </p>

      <p className="relative z-10 mt-5 text-[11px] leading-[1.48] text-white/90">
        Go Pro to access priority support, real-time tracking, and full analytics.
      </p>

      <button
        type="button"
        className="relative z-10 mt-auto h-[46px] w-full rounded-[10px] bg-white text-[17px] font-medium text-[#333333] transition hover:bg-[#f4f4f4]"
      >
        Go Pro Today
      </button>
    </div>
  );
}

export default function Sidebar({ rail = false, onNavigate }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
    onNavigate?.();
  };

  return (
    <aside
      className={`relative flex h-full flex-col border-r border-line bg-white ${
        rail ? "w-[68px] px-2" : "w-[240px] px-4"
      }`}
    >
      {loading && <SidebarSkeleton rail={rail} />}

      <div className={`flex h-[78px] items-center ${rail ? "justify-center" : ""}`}>
        <Logo compact={rail} darkWord className={rail ? "" : "ml-2"} />
      </div>

      <button
        onClick={handleLogout}
        className={`mb-4 mt-2 flex h-[43px] items-center rounded-[8px] bg-[#f2f2f3] ${
          rail ? "justify-center px-0" : "gap-3 px-2"
        }`}
        title={rail ? "John Doe - click to logout" : "Click to logout"}
      >
        <img
          src="/assets/avatar.png"
          alt="John Doe"
          className="h-[30px] w-[30px] rounded-full object-cover"
        />

        {!rail && (
          <>
            <div className="min-w-0 flex-1 text-left">
              <p className="truncate text-[13px] font-medium text-ink">
                John Doe
              </p>
              <p className="text-[10px] text-[#98989f]">Admin</p>
            </div>
            <FiChevronDown className="text-[#8b8b90]" />
          </>
        )}
      </button>

      <nav className="space-y-0">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            item={item}
            rail={rail}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="my-4 border-t border-line" />

      <nav className="space-y-1">
        {bottomItems.map((item) => (
          <NavItem
            key={item.path}
            item={item}
            rail={rail}
            onNavigate={onNavigate}
          />
        ))}

        <button
          type="button"
          onClick={handleLogout}
          className={`group flex h-10 w-full items-center rounded-lg bg-[#ffdede] text-[14px] text-[#cf3f3f] transition hover:bg-[#ffcaca] hover:text-[#b92f2f] ${
            rail ? "justify-center px-0" : "gap-3 px-3"
          }`}
          title={rail ? "Logout" : undefined}
        >
          <FiLogOut className="shrink-0 text-[19px]" />
          {!rail && <span>Logout</span>}
        </button>
      </nav>

      {!rail && <PromoBanner />}
    </aside>
  );
}

import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
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
        `group relative flex h-10 items-center rounded-lg text-[12px] transition ${
          rail ? "justify-center px-0" : "gap-3 px-3"
        } ${
          isActive
            ? "bg-[#ebe6ff] font-medium text-brand-700"
            : "text-[#68686f] hover:bg-[#f7f7f8] hover:text-ink"
        }`
      }
      title={rail ? item.label : undefined}
    >
      <Icon className="shrink-0 text-[17px]" />

      {!rail && <span className="truncate">{item.label}</span>}

      {!rail && item.count ? (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-md bg-[#856DF3] px-1 text-[9px] text-white">
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

function PromoBanner() {
  return (
    <div className="relative mx-auto mb-4 mt-auto flex h-[252px] w-[191px] shrink-0 flex-col overflow-hidden rounded-[12px] bg-[#252525] px-6 py-4 text-white">
      <span className="pointer-events-none absolute -right-[3px] -top-[18px] h-[78px] w-[29px] -skew-x-[16deg] bg-[#856DF3]/55" />
      <span className="pointer-events-none absolute right-[20px] top-0 h-[62px] w-[29px] -skew-x-[16deg] bg-[#856DF3]/55" />

      <p className="relative z-10 text-[27px] font-semibold leading-[1.02] tracking-[-0.035em]">
        Loving
        <br />
        ShipNow
        <br />
        Free?
      </p>

      <p className="relative z-10 mt-5 text-[10px] leading-[1.48] text-white/90">
        Go Pro to access priority support, real-time tracking, and full analytics.
      </p>

      <button
        type="button"
        className="relative z-10 mt-auto h-[46px] w-full rounded-[10px] bg-white text-[16px] font-medium text-[#333333] transition hover:bg-[#f4f4f4]"
      >
        Go Pro Today
      </button>
    </div>
  );
}

export default function Sidebar({ rail = false, onNavigate }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    onNavigate?.();
  };

  return (
    <aside
      className={`flex h-full flex-col border-r border-line bg-white ${
        rail ? "w-[68px] px-2" : "w-[228px] px-4"
      }`}
    >
      <div className={`flex h-[72px] items-center ${rail ? "justify-center" : ""}`}>
        <Logo compact={rail} />
      </div>

      <button
        onClick={handleLogout}
        className={`mb-5 flex items-center rounded-lg bg-[#f7f7f8] ${
          rail ? "h-11 justify-center px-0" : "gap-3 px-2.5 py-2"
        }`}
        title={rail ? "John Doe - click to logout" : "Click to logout"}
      >
        <img
          src="/assets/avatar.png"
          alt="John Doe"
          className="h-8 w-8 rounded-full object-cover"
        />

        {!rail && (
          <>
            <div className="min-w-0 flex-1 text-left">
              <p className="truncate text-[11px] font-semibold text-ink">
                John Doe
              </p>
              <p className="text-[9px] text-[#98989f]">Admin</p>
            </div>
            <FiChevronDown className="text-[#8b8b90]" />
          </>
        )}
      </button>

      <nav className="space-y-1">
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
      </nav>

      {!rail && <PromoBanner />}
    </aside>
  );
}

import { FiArrowLeft, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../common/Logo";

export default function MobileHeader({ title, onMenu, back = false }) {
  const navigate = useNavigate();
  const isDashboard = title === "Dashboard";

  return (
    <header
      className={`sticky top-0 z-30 flex items-center justify-between border-b border-line bg-white/95 px-4 backdrop-blur md:hidden ${
        isDashboard ? "relative h-[58px] w-[412px] min-w-[412px] max-w-[412px]" : "h-[52px] w-full"
      }`}
    >
      {back ? (
        <button
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-start text-[#77777d]"
          aria-label="Go back"
        >
          <FiArrowLeft size={17} />
        </button>
      ) : (
        <Logo
          compact
          className={isDashboard ? "absolute left-6 [&>span]:h-[26px] [&>span]:w-[26px]" : ""}
        />
      )}

      <p
        className={`min-w-0 truncate font-medium text-[#3a3a3e] ${
          isDashboard ? "absolute left-1/2 -translate-x-1/2 text-[16px]" : "flex-1 text-[13px]"
        } ${
          back ? "text-left" : "text-center"
        }`}
      >
        {title}
      </p>

      <button
        onClick={onMenu}
        className={`flex h-9 w-9 shrink-0 items-center justify-end text-[#77777d] ${
          isDashboard ? "absolute right-6" : ""
        }`}
        aria-label="Open navigation"
      >
        <FiMenu size={isDashboard ? 18 : 17} />
      </button>
    </header>
  );
}

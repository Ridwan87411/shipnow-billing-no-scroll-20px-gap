import { FiArrowLeft, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../common/Logo";

export default function MobileHeader({ title, onMenu, back = false }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-white/95 px-4 backdrop-blur md:hidden">
      {back ? (
        <button
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-start text-[#77777d]"
          aria-label="Go back"
        >
          <FiArrowLeft size={17} />
        </button>
      ) : (
        <Logo compact />
      )}

      <p
        className={`min-w-0 flex-1 truncate text-[13px] font-medium text-[#3a3a3e] ${
          back ? "text-left" : "text-center"
        }`}
      >
        {title}
      </p>

      <button
        onClick={onMenu}
        className="flex h-9 w-9 shrink-0 items-center justify-end text-[#77777d]"
        aria-label="Open navigation"
      >
        <FiMenu size={17} />
      </button>
    </header>
  );
}

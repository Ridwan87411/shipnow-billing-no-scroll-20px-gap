import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-5 flex flex-col items-center gap-4 border-t border-line py-5 text-center text-[9px] text-[#8b8b91] md:flex-row md:justify-between md:gap-3 md:py-4 md:text-left">
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
        <span className="font-medium text-[#333338]">
          Copyright © 2025 Peterdraw
        </span>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <a href="#">Privacy Policy</a>
          <a href="#">Term and conditions</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 text-[16px] text-[#77777d]">
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-current">
          <FaFacebookF className="h-[10px] w-[10px]" aria-label="Facebook" />
        </span>
        <FaXTwitter aria-label="X" />
        <FaInstagram aria-label="Instagram" />
        <FaYoutube aria-label="YouTube" />
        <FaLinkedin aria-label="LinkedIn" />
      </div>
    </footer>
  );
}

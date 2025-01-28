import { FaGlobe } from "react-icons/fa6";
import { getIcon } from "@/utils/icon";

export default function NavToggleButton({ toggleMobileMenu }) {
  return (
    <div className="mr-3 flex items-center justify-end">
      <FaGlobe className="mr-3 size-5" />
      <button
        className="relative size-6 disabled:pointer-events-none"
        onClick={toggleMobileMenu}
        type="button"
      >
        {getIcon("toggle")}
      </button>
    </div>
  );
}

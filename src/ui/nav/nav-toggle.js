import { getIcon } from "@/utils/icon";
import ButtonInfo from "../button-info";

export default function NavToggleButton({ toggleMobileMenu }) {
  return (
    <div className="mr-3 flex items-center justify-end">
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

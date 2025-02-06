import useClickOutside from "@/hooks/click-outside";
import React, { useState } from "react";

const ClickOutsideComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside(() => setIsOpen(false));
  return (
    <div className="relative">
      <button
        className="border border-slate-800 p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Click Outside
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 top-0 border border-teal-800 bg-slate-900 p-3"
        >
          Click outside to close me!
        </div>
      )}
    </div>
  );
};

export default ClickOutsideComponent;

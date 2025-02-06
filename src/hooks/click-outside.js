import { useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;

/** Example Usage (Component) */

// import useClickOutside from "@/hooks/click-outside";
// import React, { useState } from "react";

// const ClickOutsideComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useClickOutside(() => setIsOpen(false));
//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>Toggle Click Outside</button>

//       {isOpen && (
//         <div
//           ref={menuRef}
//           style={{ border: "1px solid black", padding: "10px" }}
//         >
//           <p>Click outside to close me!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClickOutsideComponent;

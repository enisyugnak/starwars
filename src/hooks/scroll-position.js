import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollPosition(window.scrollY); // Get the vertical scroll position
      };

      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
      }
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;

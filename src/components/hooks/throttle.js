import { useState, useEffect } from "react";

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Cleanup on component unmount or before next effect
    };
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;

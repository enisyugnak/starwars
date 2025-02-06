import { useState, useEffect } from "react";

const useToggle = ({ value = false }) => {
  const [toggle, setToggle] = useState(value);
  useEffect(() => {
    setToggle(value);
  }, [value]);

  return { toggle, setToggle };
};

export default useToggle;

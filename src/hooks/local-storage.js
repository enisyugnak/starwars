import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  }, [key, value]);

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setValue(initialValue);
    } catch (error) {
      console.error("Error removing localStorage", error);
    }
  };

  return [value, setValue, remove];
};

export default useLocalStorage;

/** Example Usage */

// const [page, setPage, resetPage] = useLocalStorage("page", null);
// setPage("playground"); //  set the page value to playground
// page // to read the value
// resetPage(); // to remove page key

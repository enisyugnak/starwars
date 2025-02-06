import { useEffect } from "react";

const useTimeout = (callback, delay) => {
  useEffect(() => {
    if (delay === null) return; // No delay if null

    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [callback, delay]);
};

export default useTimeout;

/** Example Usage */

// const [message, setMessage] = useState("");
// function delayedMessage() {
//   setMessage("this is my delayed message");
// }

// useTimeout(delayedMessage, 3000);

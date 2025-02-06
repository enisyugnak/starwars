import useTimeout from "@/hooks/timeout";
import { useState } from "react";

export default function TimeoutExample() {
  const [message, setMessage] = useState("");

  function delayedMessage() {
    setMessage("this is my delayed message");
  }

  useTimeout(delayedMessage, 3000);

  return (
    <div className="border border-slate-800 p-3">
      {message || "Waiting for message..."}
    </div>
  );
}

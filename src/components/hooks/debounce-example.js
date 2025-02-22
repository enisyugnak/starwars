import useDebounce from "@/hooks/debounce";
import { useEffect, useState } from "react";

export default function DebounceExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage("waiting...");
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setMessage("function triggered after a delay");
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="flex items-center gap-3">
      <input
        className="rounded-md border border-slate-800 p-3"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <div>{message}</div>
    </div>
  );
}

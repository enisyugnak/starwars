import Loading from "@/app/loading";
import { useState } from "react";

export default function ImagePreloader({ children, className = "" }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`${className} relative`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700/60">
          <Loading />
        </div>
      )}
      {children}
    </div>
  );
}

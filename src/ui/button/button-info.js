import Link from "next/link";
import { GoCodeReview } from "react-icons/go";

export default function ButtonInfo() {
  return (
    <div className="group relative ml-auto mr-4 flex">
      <div className="pointer-events-none absolute right-10 mb-4 translate-y-1/2 transform whitespace-nowrap rounded-md border border-slate-700/50 bg-slate-900 px-4 py-2 text-sm text-neutral-400 opacity-0 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-100">
        Contact Me
      </div>
      <Link href="/contact">
        <GoCodeReview size={24} />
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function DaisyLayout({ children }) {
  return (
    <div className="flex flex-col items-center mt-2">
      <div className="space-x-3">
        <Link
          href="/daisy/comps"
          className="btn"
        >
          Components
        </Link>
        <Link
          href="/daisy/tables"
          className="btn"
        >
          Tables
        </Link>
      </div>
      <div className="mt-10 mx-12">{children}</div>
    </div>
  );
}

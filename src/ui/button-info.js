import Link from "next/link";
import { LuBadgeInfo } from "react-icons/lu";

export default function ButtonInfo() {
  return (
    <div className="ml-auto sm:mr-4">
      <Link href="/info">
        <LuBadgeInfo className="mr-3 size-6 transition duration-300 ease-in hover:fill-sky-500 hover:text-white" />
      </Link>
    </div>
  );
}

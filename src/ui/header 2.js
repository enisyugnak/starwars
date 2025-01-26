import Image from "next/image";
import Navigation from "./navigation";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { FaGlobe } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full flex-col items-center gap-1 bg-slate-900 text-center text-white backdrop-blur-md sm:flex-row sm:gap-6">
      <Link href="/">
        <Image
          src="/logowhite.webp"
          alt=""
          width={80}
          height={35}
          className="sm:ml-5"
        />
      </Link>
      {/** border right */}
      <div className="hidden h-6 border border-r-0 border-neutral-400 sm:block"></div>

      <Navigation />
      <div className="ml-auto mr-4">
        <FaGlobe className="size-6" />
      </div>
    </header>
  );
}

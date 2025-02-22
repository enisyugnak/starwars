import Image from "next/image";
import Navigation from "./nav/navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[9000] flex h-20 min-h-20 w-full items-center justify-between bg-slate-900">
      {/** Logo */}
      <Link href="/">
        <Image
          src="/logowhite.webp"
          alt=""
          width={300}
          height={165}
          priority
          className="ml-5 h-auto w-20 min-w-20 object-contain"
        />
      </Link>
      {/** border right */}
      <div className="mx-3 h-6 border border-r-0 border-neutral-400"></div>

      {/** Navigation */}

      <Navigation />
    </header>
  );
}

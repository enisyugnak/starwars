import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/utils/icon";

export default function NavMobile({
  items,
  isMobileMenuOpen,
  toggleMobileMenu,
}) {
  return (
    <div
      className={`fixed left-0 top-0 min-h-screen w-screen items-center bg-slate-700 ${
        isMobileMenuOpen ? "fixed" : "hidden"
      } z-50`}
    >
      <div className="mr-3 mt-6 flex items-center">
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
        <div className="ml-auto flex items-center">
          {/** Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="size-6 text-white hover:text-sky-500"
          >
            {getIcon("close")}
          </button>
        </div>
      </div>

      {/** Menu Items */}
      <ul className="mt-8 flex flex-col">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleMobileMenu()}
            className="flex cursor-pointer items-center text-lg text-neutral-400 hover:bg-slate-800 hover:text-white"
          >
            <Link
              href={item.link}
              className="flex w-full items-center px-4 py-3"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

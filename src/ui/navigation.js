"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import config from "@/services/config";
import { FaGlobe } from "react-icons/fa6";
import Image from "next/image";

export default function Navigation() {
  const items = config["menu"];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="flex w-screen items-center justify-end sm:justify-start">
      {/**  Mobile Menu Button */}
      <div className="relative flex h-full sm:hidden">
        <MobileMenuButton toggleMobileMenu={toggleMobileMenu} />

        {/**  Mobile Menu  */}

        <MobileMenu
          items={items}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      {/** Desktop Menu */}
      <div className="hidden sm:block">
        <DesktopMenu items={items} />
      </div>
    </nav>
  );
}

/** Desktop Menu */

export function DesktopMenu({ items }) {
  const pathname = usePathname();
  const navLinkClass = "text-neutral-400 hover:text-white";
  const activeNavClass = "text-white pointer-events-none select-none";

  return (
    <div className="flex">
      <div className="flex items-start gap-3">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="group w-full"
              aria-disabled={pathname.startsWith(item.link)}
            >
              <Link
                href={item.link}
                // className="border border-b-2 border-sky-500"
                className={`text-base font-medium transition duration-300 ${
                  pathname.startsWith(item.link) ? activeNavClass : navLinkClass
                }`}
              >
                {item.title}
              </Link>
              <div className="scale-0 border-b-2 border-b-sky-500 transition duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 group-aria-disabled:translate-y-7 group-aria-disabled:scale-100 group-aria-disabled:opacity-100"></div>
            </div>
          );
        })}
      </div>
      {/* group-hover:translate-y-1 group-hover:opacity-100  */}
    </div>
  );
}

/** Mobile Menu */

export function MobileMenu({ items, isMobileMenuOpen, toggleMobileMenu }) {
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
          {/** Info Button */}
          <FaGlobe className="mr-3 size-5" />
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

/** Mobile Menu Button */

export function MobileMenuButton({ toggleMobileMenu }) {
  return (
    <div className="mr-3 flex items-center justify-end">
      <FaGlobe className="mr-3 size-5" />
      <button
        className="relative size-6 disabled:pointer-events-none"
        onClick={toggleMobileMenu}
        type="button"
      >
        {getIcon("toggle")}
      </button>
    </div>
  );
}

/** Icon */

export function getIcon(type) {
  const iconType = {
    toggle: "M4 6h16M4 12h16M4 18h16",
    close: "M6 18L18 6M6 6l12 12",
  };

  return (
    <span className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconType[type]} />
      </svg>
    </span>
  );
}

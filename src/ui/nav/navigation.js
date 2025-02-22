"use client";
import config from "@/services/config";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";
import NavToggleButton from "./nav-toggle";
import { useState } from "react";
import ButtonInfo from "../button/button-info";

export default function Navigation() {
  const items = config["menu"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex w-screen items-center justify-end sm:justify-start">
      {/** Desktop Menu */}
      <div className="hidden sm:block">
        <NavDesktop items={items} />
      </div>

      {/** Info Button */}
      <ButtonInfo />

      {/**  Mobile Menu */}
      <div className="relative flex h-full sm:hidden">
        {/** Toggle Button */}
        <NavToggleButton toggleMobileMenu={toggleMobileMenu} />

        {/** Menu Items  */}
        <NavMobile
          items={items}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </nav>
  );
}

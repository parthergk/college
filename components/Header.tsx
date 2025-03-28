import React from "react";
import Link from "next/link";
import { Beaker } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white backdrop-blur-md text-black">
      <div className=" px-8 w-full flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Beaker className="h-6 w-6 text-[#0e7490]" />
          <span className="text-xl font-bold">Jagmeet College</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className=" text-lg hover:text-[#0e7490]">
            Home
          </Link>
          <Link
            href="#about"
            className="text-lg  hover:text-[#0e7490]"
          >
            About
          </Link>
          <Link
            href="#programs"
            className="text-lg  hover:text-[#0e7490]"
          >
            Programs
          </Link>
          <Link
            href="#campus"
            className="text-lg hover:text-[#0e7490]"
          >
            Campus Life
          </Link>
          <Link
            href="#facilities"
            className="text-lg hover:text-[#0e7490]"
          >
            Facilities
          </Link>
          <Link
            href="#contact"
            className="text-lg hover:text-[#0e7490]"
          >
            Contact
          </Link>
        </nav>
        <button className=" text-base text bg-[#0e7490] text-white hover:bg-[#0e7490]/90 h-10 px-4 py-2 cursor-pointer rounded-md">
          Apply Now
        </button>
      </div>
    </header>
  );
};

export default Header;

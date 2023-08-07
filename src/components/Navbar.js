import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-black via-gold to-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-5">
        <div>
          <a href="#about" className="text-3xl font-bold text-white hover:text-gold">
            ojfwijf
          </a>
        </div>
        <nav className="flex space-x-5 mt-4 md:mt-0">
          <a href="#projects" className="text-white hover:text-gold">
            Past Work
          </a>
          <a href="#skills" className="text-white hover:text-gold">
            Skills
          </a>
          <a href="#testimonials" className="text-white hover:text-gold">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gold border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded-full text-base font-semibold transition-colors duration-300 mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </a>
      </div>
    </header>
  );
}

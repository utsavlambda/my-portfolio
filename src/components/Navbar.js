import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-black via-gold to-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl text-gold">
            Utsav Talati
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-gold">
            Past Work 
          </a>
          <a href="#skills" className="mr-5 hover:text-gold">
            Skills 
          </a>
          <a href="#testimonials" className="mr-5 hover:text-gold">
            Testimonials 
          </a>
        </nav>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-gold border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded-full text-base font-semibold transition-colors duration-300">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </header>
  );
}

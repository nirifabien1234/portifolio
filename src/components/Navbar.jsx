
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 md:flex-row justify-between">
            
            <a className="title-font font-medium text-[#cdcdff] mb-4 md:mb-0">
              <a href="#about" className="ml-3 text-xl">
                Crypto<span className="text-indigo-500">tearer</span>
              </a>
            </a>
            <nav className=" md:ml-4 md:py-1 md:pl-4 flex  text-base justify-center text-[#cdcdff] font-semibold">
              <a href="#projects" className="mr-7 hover:text-white  ">
                Projects
              </a>
              <a href="#skills" className="mr-7 hover:text-white  ">
                Skills
              </a>
              <a href="#testimonials" className=" mr-7 hover:text-white  ">
                Testimonials
              </a>
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-800 border-0  px-3 focus:outline-none hover:bg-gray-700 rounded  mt-4 md:mt-0  ">
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1 text-indigo-500" />
            </a>
            </nav>
          </div>
        </header>
      );
    }

"use client";

import React, { useState } from "react";
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-0/80 backdrop-blur-lg shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-4 h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold text-blue-400 hover:text-blue-500 transition duration-300 "
        >
            <Image src="/icon1.png" alt="Home" className="h-16"/>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#hero"
              className="text-lg text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute right-0 mt-4 w-48 bg-gray-800/90 backdrop-blur-md shadow-lg rounded-lg">
              <li>
                <a
                  href="#hero"
                  className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-blue-400 rounded-t-lg transition duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition duration-300"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-blue-400 rounded-b-lg transition duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

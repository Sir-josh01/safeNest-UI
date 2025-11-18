// import React from 'react'

// export default function NavBar() {
//   return (
//     <nav className='flex justify-between m-2 border-1'>
//       <div>logo</div>
//       <div><i>Icon</i>Menu</div>
//     </nav>
//   )
// }
// src/app/components/NavBar.jsx

"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  // State to manage the mobile menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Units", href: "/units" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          SafeNest
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
          {/* Call to Action Button */}
          {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 ml-4">
            Enquire Now
          </button> */}
        </div>

        {/* Mobile Menu Button (Hamburger/Close Icon) */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {/* Toggle between hamburger and close icons based on state */}
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Content (Conditionally rendered/styled) */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-4 pt-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg text-center font-medium"
              onClick={() => setIsMenuOpen(false)} // Close menu after selection
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-indigo-600 text-white px-4 py-2 mt-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200">
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}

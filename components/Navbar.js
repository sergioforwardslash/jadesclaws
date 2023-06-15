"use client";

import { STORE_NAME } from "@/constants/config";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };
  return (
    <nav className="flex items-center justify-between h-16 px-8 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-6" />
          <span className="text-lg font-semibold text-gray-800">
            {STORE_NAME}
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        <Link
          href="/appointments"
          className="text-gray-600 hover:text-gray-800"
        >
          Appointments
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-800">
          Services
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white w-48 shadow-md py-2 px-4 space-y-2 rounded-b-md z-10">
          <Link
            href="/appointments"
            className="text-gray-600 hover:text-gray-800 block"
          >
            Appointments
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-800 block">
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

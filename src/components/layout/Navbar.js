"use client"; // Next.js 13 App Router

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger / close icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">Ogonitunes</Link>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-400 transition-colors">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Categories</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}>
        <ul className="flex flex-col">
          {/* Home */}
          <li>
            <Link
              href="/"
              className="block w-full py-3 px-4 text-white font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
              onClick={() => setMenuOpen(false)} // closes menu on click
            >
              Home
            </Link>
          </li>

          {/* Categories */}
          <li>
            <Link
              href="/categories"
              className="block w-full py-3 px-4 text-white font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
              onClick={() => setMenuOpen(false)}>
              Categories
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              href="/about"
              className="block w-full py-3 px-4 text-white font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
              onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

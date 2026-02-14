"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white shadow-md fixed w-full z-50">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={180}
              height={10}
              className="h-10"
              alt="Ogonitunes"
              priority={true}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/categories"
                className="hover:text-yellow-400 transition-colors">
                Genres
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors">
                About
              </Link>
            </li>
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
        ref={menuRef}
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}>
        <ul className="flex flex-col">
          {[
            { name: "Genres", href: "/categories" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Privacy Policy", href: "/private-policy" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block w-full py-3 px-4 text-white font-semibold rounded hover:bg-yellow-400 hover:text-black transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

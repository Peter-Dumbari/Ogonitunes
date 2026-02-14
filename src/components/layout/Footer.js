"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMusic,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        {/* ===== Top section: Logo + Navigation ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className="h-10"
              width={180}
              height={10}
              alt="Ogonitunes"
              priority={true}
            />
          </Link>

          {/* Navigation links */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-white">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-yellow-400 transition-colors duration-200">
                Genres
              </Link>
            </li>
            <li>
              <Link
                href="/artists"
                className="hover:text-yellow-400 transition-colors duration-200">
                Artists
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors duration-200">
                contact
              </Link>
            </li>
            <li>
              <Link
                href="/private-policy"
                className="hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Middle section: Social Icons ===== */}
        <div className="flex justify-center md:justify-start gap-4 text-lg">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200">
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200">
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200">
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-200">
            <FaYoutube />
          </a>
        </div>

        {/* ===== Bottom section: Copyright ===== */}
        <div className="text-center md:text-left text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Ogonitunes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

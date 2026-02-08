"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-white hover:text-purple-200 transition">
            Dream Print UA
          </Link>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
            
          </button>

          <ul className="hidden md:flex space-x-8 text-white">
            <li><Link href="/" className="hover:text-purple-200">Головна</Link></li>
            <li><Link href="/products" className="hover:text-purple-200">Послуги</Link></li>
            <li><Link href="/pricing" className="hover:text-purple-200">Ціни</Link></li>
            <li><Link href="/about" className="hover:text-purple-200">Про нас</Link></li>
            <li><Link href="/gallery" className="hover:text-purple-200">Галерея</Link></li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 text-white">
            <Link href="/" className="block hover:text-purple-200 py-2">Головна</Link>
            <Link href="/products" className="block hover:text-purple-200 py-2">Послуги</Link>
            <Link href="/pricing" className="block hover:text-purple-200 py-2">Ціни</Link>
            <Link href="/about" className="block hover:text-purple-200 py-2">Про нас</Link>
            <Link href="/gallery" className="block hover:text-purple-200 py-2">Галерея</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-red-700 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-widest text-white hover:text-shadow-white transition duration-300">
            🎭 PROF.DEV
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <Link href="/about">Mastermind</Link>
          <Link href="/projects">Plans</Link>
          <Link href="/skills">Toolkit</Link>

          <Link href="/contact">Message</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-red-600 rounded-lg shadow-lg px-6 py-4 text-white font-medium flex flex-col gap-4">
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            Mastermind
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>
            Plans
          </Link>
          <Link href="/skills" onClick={() => setMenuOpen(false)}>
            Toolkit
          </Link>
          
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Message
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary-dark/95 backdrop-blur-sm text-white py-0" : "bg-primary-dark text-white py-2"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Seraphic Medium Logo"
            width={300}
            height={100}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="/accelerator" className="hover:text-gray-400 transition-colors">
            Accelerator
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="https://tidycal.com/ahmadrashid/30-minute-meeting"
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors border border-black/10"
          >
            Book a Call with us Today
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary-dark text-white p-6 flex flex-col space-y-4 md:hidden border-t border-white/10">
          <Link href="#home" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/accelerator" onClick={() => setMobileMenuOpen(false)}>
            Accelerator
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold text-center mt-4"
          >
            Book a Call with us Today
          </Link>
        </div>
      )}
    </header>
  );
}

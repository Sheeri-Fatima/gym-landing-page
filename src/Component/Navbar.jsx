// Navbar.jsx (Formatted Clean Code)
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glass blur + translucent bg */}
      <nav className="backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 border-b border-white/10 dark:border-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
                  G
                </div>
                <span className="sr-only">Gym Logo</span>
                <span className="hidden sm:inline-block text-lg font-semibold text-gray-900 dark:text-white">
                  PeakFit Gym
                </span>
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* Right CTA + Mobile button */}
            <div className="flex items-center gap-3">
              <a
                href="#join"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold shadow hover:scale-[1.02] transform transition"
              >
                Join Now
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Toggle menu"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition"
              >
                <span className="sr-only">Open main menu</span>

                {open ? (
                  // Close icon
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a
              href="#"
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#features"
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#services"
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900"
            >
              Services
            </a>
            <a
              href="#trainers"
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900"
            >
              Trainers
            </a>
            <a
              href="#pricing"
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900"
            >
              Pricing
            </a>

            <div className="pt-3">
              <a
                href="#join"
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold shadow"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

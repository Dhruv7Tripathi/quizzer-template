'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/contants';
import { Themetoggle } from '../ui/themetoggle';
import { SiGithub } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as HTMLElement).closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 w-full backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">

            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2 group"
              >
                <Image
                  src="/logo.png"
                  width={28}
                  height={28}
                  priority={true}
                  alt="Quizzer Logo"
                  className="rounded-xl group-hover:scale-110 transition-transform sm:w-8 sm:h-8"
                />
                <span className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Quizzer
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-900 dark:text-white hover:text-green-400 transition-colors font-medium group"
                >
                  <span className="group-hover:underline">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="https://github.com/Dhruv7Tripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-900 dark:text-white hover:text-green-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <SiGithub size={20} />
              </Link>
              <Themetoggle />
              <Link
                href="/#"
                className="text-neutral-900 dark:text-white font-semibold hover:text-green-400 transition-colors px-3 py-2"
              >
                Login
              </Link>
              <Link
                href="/#"
                className="text-white font-semibold px-4 py-2 bg-green-500 hover:bg-green-600 transition-colors rounded-lg shadow-sm"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Right Section */}
            <div className="flex md:hidden items-center space-x-2">
              <Themetoggle />
              <button
                onClick={toggleMenu}
                className="mobile-menu-container p-2 rounded-md text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors touch-manipulation"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm">
          <div
            className="mobile-menu-container absolute top-14 sm:top-16 left-0 right-0 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 shadow-lg max-h-[calc(100vh-3.5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation Links */}
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Actions Section */}
            <div className="px-4 py-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
              {/* GitHub Link */}
              <Link
                href="https://github.com/Dhruv7Tripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                <SiGithub size={20} />
                <span>GitHub</span>
              </Link>

              {/* Auth Buttons */}
              <div className="space-y-2">
                <Link
                  href="/#"
                  className="block w-full text-center px-4 py-3 text-neutral-900 dark:text-white font-semibold border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors rounded-lg touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/#"
                  className="block w-full text-center px-4 py-3 text-white font-semibold bg-green-500 hover:bg-green-600 transition-colors rounded-lg shadow-sm touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
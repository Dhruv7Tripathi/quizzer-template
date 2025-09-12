'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/contants';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-50 sticky top-0 w-full  shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-b border-primary/10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 group"
            >
              <Image
                src="/ww.png"
                width={35}
                height={35}
                priority={true}
                alt="Quizzer Logo"
                className="rounded-xl group-hover:scale-110 transition-transform"
              />
              <span className="text-xl font-bold text-white group-hover:text-white transition-colors">
                Quizzer
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-white hover:text-green-400 transition-colors group"
              >
                <span className="group-hover:underline">{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link href={"/#"} className="text-white font-semibold rounded-3xl">
              Login
            </Link>
            <Link
              href={"/#"}
              className="text-white font-semibold px-3 py-2 bg-green-500 hover:text-white transition-colors rounded-3xl"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-green-400 dark:hover:bg-green-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-destructive" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-zinc-950/95 backdrop-blur-lg shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                {/* {session?.user ? (
                  <UserAccountNav user={session.user} />
                ) : (
                  <SignInButton text="Sign In" />
                )} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
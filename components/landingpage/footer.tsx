"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black py-8 sm:py-12 lg:py-16 border-t border-neutral-100 dark:border-neutral-900 text-neutral-900 dark:text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile-first grid layout */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4">

          {/* Logo and About - Full width on mobile, spans 1 column on desktop */}
          <div className="text-center sm:text-left lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4 justify-center sm:justify-start">
              <Image
                src="/ww.png"
                width={30}
                height={30}
                alt="Logo"
                className="rounded-xl"
                unoptimized
              />
              <span className="text-xl p-2 font-extrabold text-neutral-800 dark:text-white">
                Quizzer
              </span>
            </Link>
            <p className="text-sm mt-2 text-center sm:text-left">
              Building in public at
              <a
                className="text-green-400 pl-1 font-medium hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href="https://layrdui.dhruvtripathi.in"
              >
                @layrdUI
              </a>
            </p>
          </div>

          {/* Links Section - Better mobile layout */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:justify-end">

              {/* Features */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-base mb-4 text-neutral-900 dark:text-white">
                  Features
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors block py-1"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors block py-1"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors block py-1"
                    >
                      Create Quiz
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors block py-1"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-base mb-4 text-neutral-900 dark:text-white">
                  Social
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start space-x-2 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors py-1"
                    >
                      <span>LinkedIn</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start space-x-2 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors py-1"
                    >
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Dhruv7Tripathi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start space-x-2 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors py-1"
                    >
                      <span>GitHub</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-base mb-4 text-neutral-900 dark:text-white">
                  Others
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/#"
                      className="text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors block py-1"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors block py-1"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors block py-1"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Add a bottom section for mobile */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center sm:hidden">
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            © 2024 Quizzer. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div
        className="absolute w-full h-px top-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(34,197,94,0.4) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </footer>
  );
};

export default Footer;
"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black py-8 sm:py-12 lg:py-16 border-t border-neutral-100 dark:border-neutral-900 text-neutral-900 dark:text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4">
          {/* Left Section - Logo and Description */}
          <div className="sm:text-left lg:col-span-1">
            {/* Logo + Brand Name */}
            <Link
              href="/"
              className="flex items-center justify-center sm:justify-start gap-2 mb-4"
            >
              <Image
                src="/logo.png"
                width={30}
                height={30}
                alt="Logo"
                className="rounded-lg"
                unoptimized
              />
              <span className="text-xl font-extrabold text-neutral-800 dark:text-white">
                Quizzer
              </span>
            </Link>

            <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 text-center sm:text-left">
              Quizzer is your all-in-one platform to create, share, and take
              quizzes with ease. Empowering learners and educators to engage,
              test knowledge, and grow together.
            </p>

            <p className="text-sm mt-2 text-center sm:text-left">
              Building in public at{" "}
              <a
                className="text-green-400 font-medium hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href="https://layrdui.dhruvtripathi.in"
              >
                @layrdUI
              </a>
            </p>
          </div>

          {/* Right Section - Navigation */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center sm:text-left">
              {/* Features */}
              <div>
                <h3 className="font-semibold text-base mb-4 text-neutral-900 dark:text-white">
                  Features
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="block py-1 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="block py-1 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="block py-1 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                    >
                      Create Quiz
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="block py-1 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-base mb-4 text-neutral-900 dark:text-white">
                  Social
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors py-1"
                    >
                      <span>LinkedIn</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors py-1"
                    >
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Dhruv7Tripathi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors py-1"
                    >
                      <span>GitHub</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others */}
              <div>
                <h3 className="font-semibold text-base mb-4 text-neutral-900 dark:text-white">
                  Others
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/#"
                      className="block py-1 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="block py-1 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="block py-1 text-neutral-700 dark:text-gray-300 hover:text-green-500 transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
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

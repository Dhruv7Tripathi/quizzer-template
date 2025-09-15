"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black py-16 border-t border-neutral-100 dark:border-neutral-900 text-neutral-900 dark:text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/ww.png"
                width={30}
                height={30}
                alt="Logo"
                className="rounded-xl"
                unoptimized
              />
              <span className="text-xl p-2 font-extrabold text-neutral-800 dark:text-white">Quizzer</span>
            </Link>
            <p className="text-sm mt-2">
              Building in public at
              <a
                className="text-green-400 pl-1 font-medium"
                target="_blank"
                rel="noopener noreferrer"
                href="https://layrdui.dhruvtripathi.in"
              >
                @layrdUI
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 flex justify-end">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {/* Features */}
              <div>
                <h3 className="font-semibold text-base mb-3">Features</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-neutral-700 dark:text-gray-300 hover:text-green-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#" className="text-neutral-700 dark:text-gray-300 hover:text-green-500">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/#" className="text-neutral-700 dark:text-gray-300 hover:text-green-500">
                      Create Quiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/#" className="text-neutral-700 dark:text-gray-300 hover:text-green-500">
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-base mb-3">Social</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="https://www.linkedin.com"
                      target="_blank"
                      className="flex items-center space-x-2 text-neutral-700 dark:text-gray-300 hover:text-green-500"
                    >
                      <span>LinkedIn</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com"
                      target="_blank"
                      className="flex items-center space-x-2 text-neutral-700 dark:text-gray-300 hover:text-green-500"
                    >
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Dhruv7Tripathi"
                      target="_blank"
                      className="flex items-center space-x-2 text-neutral-700 dark:text-gray-300 hover:text-green-500"
                    >
                      <span>GitHub</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others */}
              <div>
                <h3 className="font-semibold text-base mb-3">Others</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#" className="text-neutral-700 dark:text-gray-300 hover:text-green-500">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#" className="text-neutral-700 dark:text-gray-300 hover:text-green-500">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/#" className="text-neutral-700 dark:text-gray-300 hover:text-green-500">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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

"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-neutral-900 text-white relative">
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
              <span className="text-xl font-extrabold text-white">Quizzer</span>
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
                    <Link href="/" className="text-gray-300 hover:text-green-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/quizzes" className="text-gray-300 hover:text-green-500">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/createquiz" className="text-gray-300 hover:text-green-500">
                      Create Quiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile" className="text-gray-300 hover:text-green-500">
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
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-500"
                    >
                      <span>LinkedIn</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com"
                      target="_blank"
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-500"
                    >
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Dhruv7Tripathi"
                      target="_blank"
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-500"
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
                    <Link href="/about" className="text-gray-300 hover:text-green-500">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacypolicy" className="text-gray-300 hover:text-green-500">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/termsandcondition" className="text-gray-300 hover:text-green-500">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Green Gradient Line */}
      <div
        className="absolute w-full h-px top-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(34,197,94,0.4) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Optional: Footer Bottom Section */}
      {/* <div className="mt-20 border-t border-green-400 pt-6 text-center">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Quizzer. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;

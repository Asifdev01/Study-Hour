"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getToken, logout } from "@/utils/auth";

export default function Navbar() {
  const pathname = usePathname();

  /* ---------------- AUTH ---------------- */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getToken());
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setMenuOpen(false);
    setProfileOpen(false);
    window.location.href = "/";
  };

  /* ---------------- STATES ---------------- */
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- ACTIVE LINK FIX ---------------- */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* ---------------- CLOSE ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [pathname]);

  /* ---------------- CLICK OUTSIDE ---------------- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (menuOpen && menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }

      if (
        profileOpen &&
        profileRef.current &&
        !profileRef.current.contains(target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, profileOpen]);

  /* ---------------- NAV LINKS ---------------- */
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/Course" },
    { name: "Roadmaps", href: "/Roadmap" },
    { name: "About Us", href: "/About" },
    { name: "Contact Us", href: "/Contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.25)] rounded-full my-5 w-[90%] mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 ml-5"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                ◆
              </div>
              <span className="font-mono">Study Hour</span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex items-center space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? "bg-[#3652FD] text-white shadow-[0_0_20px_rgba(54,82,253,0.45)]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* DESKTOP AUTH */}
            <div className="hidden md:flex relative">
              {isLoggedIn ? (
                <div ref={profileRef} className="relative cursor-pointer">
                  <button
                    onClick={() => setProfileOpen((p) => !p)}
                    className="w-9 h-9 cursor-pointer rounded-full bg-[#3652FD] text-white flex items-center justify-center font-semibold"
                  >
                    U
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 overflow-hidden">
                      <Link
                        href="/Profile"
                        onClick={() => setProfileOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/Login"
                  className="px-3 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                >
                  Login
                </Link>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="ml-auto md:hidden">
              {!menuOpen ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(true);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  ☰
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(false);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU (OUTSIDE NAV) ================= */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-24 left-1/2 -translate-x-1/2 md:hidden
                     w-[90%] bg-white shadow-2xl rounded-2xl
                     flex flex-col items-center gap-2 p-4 z-[9999]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium w-full text-center ${
                isActive(link.href)
                  ? "bg-[#3652FD] text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <>
              <Link
                href="/Profile"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 rounded-full hover:bg-gray-200"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/Login"
              onClick={() => setMenuOpen(false)}
              className="w-full px-4 py-2 bg-black text-white rounded-full text-center hover:bg-gray-800"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { BASE } from "../utils/paths";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navItems = [
    { path: BASE, label: "Home" },
    { path: `${BASE}/menu`, label: "Menu" },
    { path: `${BASE}/about`, label: "About" },
  ];

  const isActive = (path: string) => {
    if (path === BASE) return currentPath === BASE || currentPath === `${BASE}/`;
    return currentPath.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header: logo scales with header height (Blue House style) */}
      <header className="w-full bg-black text-white sticky top-0 z-50 overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 h-28 sm:h-32 md:h-28 lg:h-32 xl:h-36 flex items-center">
          {/* Desktop logo (left) — larger at md/lg */}
          <a
            href={BASE}
            className="hidden md:flex items-center flex-shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <ImageWithFallback
              src={`${BASE}/harumisushilogo-circle.png`}
              alt="Harumi Sushi & Hibachi"
              className="h-28 w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 block object-contain"
            />
          </a>

          {/* Mobile logo (centered) — larger on phone/tablet */}
          <a
            href={BASE}
            className="absolute left-1/2 -translate-x-1/2 md:hidden flex items-center hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <ImageWithFallback
              src={`${BASE}/harumisushilogo-circle.png`}
              alt="Harumi Sushi & Hibachi"
              className="h-28 w-28 block object-contain"
            />
          </a>

          {/* Right side: desktop nav (HOME + MENU), or hamburger only on mobile */}
          <div className="ml-auto flex items-center gap-4 lg:gap-6">
            <nav className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`text-sm lg:text-base font-semibold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-rose-400 relative group ${
                    isActive(item.path) ? "text-rose-400" : ""
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="md:hidden p-2 touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation - dropdown panel */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden border-t border-gray-700 bg-black flex flex-col py-4 gap-1"
            role="navigation"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 text-lg font-semibold uppercase tracking-wide transition-colors hover:text-rose-400 hover:bg-white/5 ${
                  isActive(item.path) ? "text-rose-400" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 min-w-0 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div>
              <ImageWithFallback
                src={`${BASE}/harumisushilogo-circle.png`}
                alt="Harumi Sushi & Hibachi"
                className="h-28 md:h-32 w-auto mb-4"
              />
              <h3 className="mb-4">Harumi Sushi & Hibachi</h3>
              <p className="text-gray-400">
                Sushi bar favorites and chef specials
              </p>
            </div>
            <div>
              <h4 className="mb-4">Hours</h4>
              <div className="space-y-1 text-gray-400">
                <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                <p>Sunday: 11:00 AM - 9:00 PM</p>
                <p className="mt-2 text-sm">Holiday hours may vary</p>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <p className="text-gray-400">3541 Truxel Rd</p>
              <p className="text-gray-400">Sacramento, CA 95834</p>
              <a href="tel:+19162466777" className="text-gray-400 hover:text-white transition-colors block mt-1">
                (916) 246-6777
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              &copy; 2026 All Rights Reserved | Harumi Sushi &amp; Hibachi
            </p>

            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 text-center">
              <a href={`${BASE}/terms`} className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
              <span className="hidden md:inline text-gray-600">|</span>
              <a href={`${BASE}/privacy`} className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="hidden md:inline text-gray-600">|</span>
              <a
                href={`${BASE}/accessibility`}
                className="hover:text-white transition-colors"
              >
                Accessibility Statement
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
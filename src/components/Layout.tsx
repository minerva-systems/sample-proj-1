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
  ];

  const isActive = (path: string) => {
    if (path === BASE) return currentPath === BASE || currentPath === `${BASE}/`;
    return currentPath.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4 md:py-6">
            <a href={BASE} className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
              <ImageWithFallback
                src={`${BASE}/harumisushilogo-circle.png`}
                alt="Harumi Sushi & Hibachi"
                className="h-28 md:h-40 w-28 md:w-40"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12 ml-12">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`text-lg md:text-xl font-semibold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-rose-400 relative group ${
                    isActive(item.path) ? "text-rose-400" : ""
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors hover:text-rose-400 relative group ${
                    isActive(item.path) ? "text-rose-400" : ""
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <ImageWithFallback
                src={`${BASE}/harumisushilogo-circle.png`}
                alt="Harumi Sushi & Hibachi"
                className="h-16 w-auto mb-4"
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
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Harumi Sushi & Hibachi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
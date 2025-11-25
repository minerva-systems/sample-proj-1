import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

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
    { path: "/", label: "Home" },
    { path: "/menu/bbq", label: "BBQ Menu" },
    { path: "/menu/appetizers", label: "Appetizers" },
    { path: "/menu/drinks", label: "Drinks" },
    { path: "/menu/desserts", label: "Desserts" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="text-2xl tracking-wide">
              KBBQ HOUSE
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`transition-colors hover:text-red-500 ${
                    isActive(item.path) ? "text-red-500" : ""
                  }`}
                >
                  {item.label}
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
                  className={`transition-colors hover:text-red-500 ${
                    isActive(item.path) ? "text-red-500" : ""
                  }`}
                >
                  {item.label}
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
              <h3 className="mb-4">KBBQ HOUSE</h3>
              <p className="text-gray-400">
                Authentic Korean BBQ Experience
              </p>
            </div>
            <div>
              <h4 className="mb-4">Hours</h4>
              <p className="text-gray-400">Mon-Thu: 11:30 AM - 10:00 PM</p>
              <p className="text-gray-400">Fri-Sat: 11:30 AM - 11:00 PM</p>
              <p className="text-gray-400">Sunday: 12:00 PM - 9:00 PM</p>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <p className="text-gray-400">123 BBQ Street</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">info@kbbqhouse.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 KBBQ House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { BASE } from "../utils/paths";

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
    { path: `${BASE}/menu/sushi`, label: "Sushi & Sashimi" },
    { path: `${BASE}/menu/starters`, label: "Starters" },
    { path: `${BASE}/menu/drinks`, label: "Drinks & Desserts" },
  ];

  const isActive = (path: string) => {
    if (path === BASE) return currentPath === BASE || currentPath === `${BASE}/`;
    return currentPath.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href={BASE} className="text-2xl tracking-wide">
              Susiho
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`transition-colors hover:text-rose-400 ${
                    isActive(item.path) ? "text-rose-400" : ""
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
                  className={`transition-colors hover:text-rose-400 ${
                    isActive(item.path) ? "text-rose-400" : ""
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
              <h3 className="mb-4">Susiho</h3>
              <p className="text-gray-400">
                Sushi bar favorites and chef specials
              </p>
            </div>
            <div>
              <h4 className="mb-4">Hours</h4>
              <p className="text-gray-400">See Yelp for current hours</p>
              <p className="text-gray-400">Holiday hours may vary</p>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <p className="text-gray-400">3541 Truxel Rd</p>
              <p className="text-gray-400">Sacramento, CA 95834</p>
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://www.yelp.com/biz/harumi-sushi-and-hibachi-natomas-sacramento-11"
              >
                View Yelp listing
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Susiho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
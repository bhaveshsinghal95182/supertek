import { Search, ShoppingCart, User } from 'lucide-react';
import { NavigationProps } from './types';
import { DropdownMenu } from './DropdownMenu';

export const NavBar = ({ menuItems }: NavigationProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-lg z-50 border-b border-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex-shrink-0">
            <img
              src="https://www.shivsons.com/wp-content/uploads/final-logo.webp"
              alt="Supertek Logo"
              className="h-8"
              width={128}
              height={32}
              loading="eager"
            />
          </div>

          <nav className="hidden md:flex md:items-center md:gap-6">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <DropdownMenu item={item} />
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="nav-link" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="nav-link" aria-label="User account">
              <User className="w-5 h-5" />
            </button>
            <button className="nav-link" aria-label="Shopping cart">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

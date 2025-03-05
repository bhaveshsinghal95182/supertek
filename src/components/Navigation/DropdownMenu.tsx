
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from './types';

interface DropdownMenuProps {
  item: MenuItem;
}

export const DropdownMenu = ({ item }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="nav-dropdown-trigger relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="nav-link inline-flex items-center gap-1">
        {item.label}
        <ChevronDown className="w-4 h-4" />
      </button>
      {item.items && isOpen && (
        <div className="nav-dropdown">
          {item.items.map((subItem) => (
            <div key={subItem.label}>
              {subItem.items ? (
                <DropdownMenu item={subItem} />
              ) : (
                <a href={subItem.href} className="nav-dropdown-item">
                  {subItem.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

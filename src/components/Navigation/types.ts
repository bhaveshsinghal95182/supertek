
export interface MenuItem {
  label: string;
  href?: string;
  items?: MenuItem[];
}

export interface NavigationProps {
  menuItems: MenuItem[];
}

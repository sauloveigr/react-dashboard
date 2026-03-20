import { BarChart3, FileText, LayoutDashboard, Moon, Settings, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { NavItem } from "@/features/dashboard/model/types";

import { SidebarNavItem } from "./SidebarNavItem";

type DashboardSidebarProps = {
  navItems: NavItem[];
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

export function DashboardSidebar({ navItems, isDarkMode, onToggleTheme }: DashboardSidebarProps) {
  const navIconMap = {
    dashboard: LayoutDashboard,
    analytics: BarChart3,
    reports: FileText,
    settings: Settings,
  };

  return (
    <aside
      aria-label="Primary navigation"
      className="bg-sidebar text-sidebar-foreground fixed top-0 left-0 z-20 hidden h-screen w-64 flex-col border-r lg:flex"
    >
      <div className="flex h-16 items-center border-b px-5">
        <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold">
          AD
        </div>
        <span className="ml-3 text-sm font-semibold tracking-wide">Analytics Dashboard</span>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const Icon = navIconMap[item.key];
          return <SidebarNavItem key={item.key} item={item} icon={Icon} />;
        })}
      </nav>

      <div className="border-t p-3">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={onToggleTheme}
        >
          {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          {isDarkMode ? "Light mode" : "Dark mode"}
        </Button>
      </div>
    </aside>
  );
}

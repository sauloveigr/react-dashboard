import type { LucideIcon } from "lucide-react";

import type { NavItem } from "@/features/dashboard/model/types";
import { cn } from "@/lib/utils";

type SidebarNavItemProps = {
  item: NavItem;
  icon: LucideIcon;
};

export function SidebarNavItem({ item, icon: Icon }: SidebarNavItemProps) {
  return (
    <a
      href={item.href}
      aria-current={item.isActive ? "page" : undefined}
      className={cn(
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors",
        item.isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
      )}
    >
      <Icon className="mr-2 h-4 w-4" />
      {item.label}
    </a>
  );
}

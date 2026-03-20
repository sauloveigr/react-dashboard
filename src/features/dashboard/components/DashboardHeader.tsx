import { Bell, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

type DashboardHeaderProps = {
  title: string;
};

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="bg-background/70 sticky top-0 z-10 flex h-16 items-center justify-between border-b px-4 backdrop-blur md:px-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-sm">Overview of your top-level performance metrics</p>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <Button className="hidden sm:inline-flex">
          <Plus className="mr-2 h-4 w-4" />
          Create new
        </Button>

        <Button variant="outline" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2 rounded-full border px-2 py-1">
          <div className="bg-muted h-8 w-8 overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/64?img=13"
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden text-sm font-medium md:inline">Saulo</span>
        </div>
      </div>
    </header>
  );
}

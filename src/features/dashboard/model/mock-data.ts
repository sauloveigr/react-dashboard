import type { DashboardData } from "./types";

export const DASHBOARD_MOCK_DATA: DashboardData = {
  navItems: [
    { key: "dashboard", label: "Dashboard", href: "#", isActive: true },
    { key: "analytics", label: "Analytics", href: "#" },
    { key: "reports", label: "Reports", href: "#" },
    { key: "settings", label: "Settings", href: "#" },
  ],
  metrics: [
    { key: "revenue", title: "Total revenue", value: 126480, trend: 12.3 },
    { key: "newUsers", title: "New users", value: 8249, trend: 7.1 },
    { key: "conversion", title: "Conversion", value: 3.84, trend: -0.8 },
    { key: "avgTicket", title: "Average ticket", value: 249.9, trend: 4.2 },
  ],
  chartData: [
    { month: "Jan", revenue: 18000, users: 1200 },
    { month: "Feb", revenue: 22000, users: 1600 },
    { month: "Mar", revenue: 20500, users: 1480 },
    { month: "Apr", revenue: 26500, users: 1980 },
    { month: "May", revenue: 28900, users: 2320 },
    { month: "Jun", revenue: 32000, users: 2560 },
  ],
  invoiceRows: [
    { id: "#INV-1042", customer: "Acme LTDA", status: "Paid", total: 3240 },
    { id: "#INV-1043", customer: "Orion Tech", status: "Pending", total: 980 },
    { id: "#INV-1044", customer: "Blue Ocean", status: "Paid", total: 12530 },
    { id: "#INV-1045", customer: "Nexa Corp", status: "Overdue", total: 1440 },
    { id: "#INV-1046", customer: "Pulse Agency", status: "Paid", total: 4890 },
  ],
};

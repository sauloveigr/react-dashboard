export type NavItem = {
  key: "dashboard" | "analytics" | "reports" | "settings";
  label: string;
  href: string;
  isActive?: boolean;
};

export type MetricItem = {
  key: "revenue" | "newUsers" | "conversion" | "avgTicket";
  title: string;
  value: number;
  trend: number;
};

export type ChartPoint = {
  month: string;
  revenue: number;
  users: number;
};

export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export type InvoiceRow = {
  id: string;
  customer: string;
  status: InvoiceStatus;
  total: number;
};

export type DashboardData = {
  navItems: NavItem[];
  metrics: MetricItem[];
  chartData: ChartPoint[];
  invoiceRows: InvoiceRow[];
};

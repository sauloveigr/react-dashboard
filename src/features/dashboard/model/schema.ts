import { z } from "zod";

export const navItemSchema = z.object({
  key: z.enum(["dashboard", "analytics", "reports", "settings"]),
  label: z.string().min(1),
  href: z.string().min(1),
  isActive: z.boolean().optional(),
});

export const metricItemSchema = z.object({
  key: z.enum(["revenue", "newUsers", "conversion", "avgTicket"]),
  title: z.string().min(1),
  value: z.number(),
  trend: z.number(),
});

export const chartPointSchema = z.object({
  month: z.string().min(1),
  revenue: z.number(),
  users: z.number(),
});

export const invoiceRowSchema = z.object({
  id: z.string().min(1),
  customer: z.string().min(1),
  status: z.enum(["Paid", "Pending", "Overdue"]),
  total: z.number().nonnegative(),
});

export const dashboardDataSchema = z.object({
  navItems: z.array(navItemSchema),
  metrics: z.array(metricItemSchema),
  chartData: z.array(chartPointSchema),
  invoiceRows: z.array(invoiceRowSchema),
});

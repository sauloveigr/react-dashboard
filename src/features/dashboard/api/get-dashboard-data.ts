import { dashboardDataSchema } from "@/features/dashboard/model/schema";
import { DASHBOARD_MOCK_DATA } from "@/features/dashboard/model/mock-data";
import type { DashboardData } from "@/features/dashboard/model/types";

export async function getDashboardData(): Promise<DashboardData> {
  // Mimics a network boundary where runtime validation matters.
  const parsedData = dashboardDataSchema.parse(DASHBOARD_MOCK_DATA);
  return Promise.resolve(parsedData);
}

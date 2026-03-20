import { useQuery } from "@tanstack/react-query";

import { getDashboardData } from "@/features/dashboard/api/get-dashboard-data";

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard", "overview"],
    queryFn: getDashboardData,
    staleTime: 60_000,
  });
}

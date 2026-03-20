import type { MetricItem } from "@/features/dashboard/model/types";

import { DashboardMetricCard } from "./DashboardMetricCard";

type DashboardMetricsProps = {
  metrics: MetricItem[];
};

export function DashboardMetrics({ metrics }: DashboardMetricsProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <DashboardMetricCard key={metric.key} metric={metric} />
      ))}
    </section>
  );
}

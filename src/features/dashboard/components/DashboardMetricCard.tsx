import { ArrowDownRight, ArrowUpRight, DollarSign, ShoppingCart, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber, formatCurrency, formatPercentage } from "@/features/dashboard/formatters";
import type { MetricItem } from "@/features/dashboard/model/types";

const METRIC_ICON_MAP = {
  revenue: DollarSign,
  newUsers: Users,
  conversion: ShoppingCart,
  avgTicket: DollarSign,
} as const;

type DashboardMetricCardProps = {
  metric: MetricItem;
};

function formatMetricValue(metric: MetricItem) {
  if (metric.key === "newUsers") return formatCompactNumber(metric.value);
  if (metric.key === "conversion") return formatPercentage(metric.value);
  return formatCurrency(metric.value);
}

export function DashboardMetricCard({ metric }: DashboardMetricCardProps) {
  const Icon = METRIC_ICON_MAP[metric.key];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
        <CardTitle className="text-muted-foreground text-sm font-medium">{metric.title}</CardTitle>
        <Icon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{formatMetricValue(metric)}</p>
        <p className="text-muted-foreground mt-1 inline-flex items-center text-xs">
          {metric.trend >= 0 ? (
            <ArrowUpRight className="mr-1 h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <ArrowDownRight className="mr-1 h-3.5 w-3.5 text-red-500" />
          )}
          <span className={metric.trend >= 0 ? "text-emerald-500" : "text-red-500"}>
            {metric.trend >= 0 ? "+" : ""}
            {formatPercentage(metric.trend)}
          </span>
          <span className="ml-1">vs previous period</span>
        </p>
      </CardContent>
    </Card>
  );
}

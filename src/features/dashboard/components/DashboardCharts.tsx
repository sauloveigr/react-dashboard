import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import type { ChartPoint } from "@/features/dashboard/model/types";
import { LineChart } from "@/shared/components/charts/LineChart";
import { ChartPanel } from "./ChartPanel";

type DashboardChartsProps = {
  chartData: ChartPoint[];
};

export function DashboardCharts({ chartData }: DashboardChartsProps) {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <ChartPanel title="Monthly revenue">
        <LineChart data={chartData} xKey="month" yKey="revenue" label="Revenue" />
      </ChartPanel>

      <ChartPanel title="Active users">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} name="Users" />
          </BarChart>
        </ResponsiveContainer>
      </ChartPanel>
    </section>
  );
}

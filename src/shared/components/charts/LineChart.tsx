import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Point = Record<string, string | number>;

type LineChartProps<T extends Point> = {
  data: T[];
  xKey: keyof T;
  yKey: keyof T;
  label: string;
};

export function LineChart<T extends Point>({ data, xKey, yKey, label }: LineChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
        <XAxis dataKey={String(xKey)} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={String(yKey)}
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          dot={false}
          name={label}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

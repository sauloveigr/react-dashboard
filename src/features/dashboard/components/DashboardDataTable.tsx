import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { InvoiceRow as InvoiceRowType } from "@/features/dashboard/model/types";

import { InvoiceRow } from "./InvoiceRow";

type DashboardDataTableProps = {
  rows: InvoiceRowType[];
};

export function DashboardDataTable({ rows }: DashboardDataTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="text-muted-foreground border-b text-left">
                <th className="py-3 pr-3 font-medium">Invoice</th>
                <th className="py-3 pr-3 font-medium">Customer</th>
                <th className="py-3 pr-3 font-medium">Status</th>
                <th className="py-3 text-right font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <InvoiceRow key={row.id} row={row} />
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

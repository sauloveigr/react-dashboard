import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/features/dashboard/formatters";
import type { InvoiceRow as InvoiceRowType, InvoiceStatus } from "@/features/dashboard/model/types";

function getStatusBadgeVariant(status: InvoiceStatus) {
  if (status === "Paid") return "default";
  if (status === "Pending") return "secondary";
  return "destructive";
}

type InvoiceRowProps = {
  row: InvoiceRowType;
};

export function InvoiceRow({ row }: InvoiceRowProps) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="py-3 pr-3 font-medium">{row.id}</td>
      <td className="py-3 pr-3">{row.customer}</td>
      <td className="py-3 pr-3">
        <Badge variant={getStatusBadgeVariant(row.status)}>{row.status}</Badge>
      </td>
      <td className="py-3 text-right">{formatCurrency(row.total)}</td>
    </tr>
  );
}

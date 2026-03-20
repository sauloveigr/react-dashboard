import type { DashboardData } from "@/features/dashboard/model/types";

import type { CartsResponse, ProductsResponse, UsersResponse } from "./contracts";

export function mapToDashboardData(
  usersResponse: UsersResponse,
  productsResponse: ProductsResponse,
  cartsResponse: CartsResponse,
): DashboardData {
  const navItems: DashboardData["navItems"] = [
    { key: "dashboard", label: "Dashboard", href: "#", isActive: true },
  ];

  const revenueValue = cartsResponse.carts.reduce(
    (sum, cart) => sum + cart.discountedTotal,
    0,
  );
  const avgTicketValue = cartsResponse.total ? revenueValue / cartsResponse.total : 0;
  const conversionValue = usersResponse.total
    ? (cartsResponse.total / usersResponse.total) * 100
    : 0;

  const metrics: DashboardData["metrics"] = [
    { key: "revenue", title: "Total revenue", value: revenueValue, trend: 12.3 },
    { key: "newUsers", title: "New users", value: usersResponse.total, trend: 4.8 },
    { key: "conversion", title: "Conversion", value: conversionValue, trend: -0.4 },
    { key: "avgTicket", title: "Average ticket", value: avgTicketValue, trend: 2.2 },
  ];

  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const chartData = monthLabels.map((month, index) => {
    const product = productsResponse.products[index];
    return {
      month,
      revenue: Math.round(product.price * product.stock),
      users: product.stock * 8,
    };
  });

  const usersById = new Map(
    usersResponse.users.map((user) => [user.id, `${user.firstName} ${user.lastName}`]),
  );

  const invoiceRows: DashboardData["invoiceRows"] = cartsResponse.carts
    .slice(0, 5)
    .map((cart) => {
      const statusCode = cart.id % 3;
      const status = statusCode === 0 ? "Paid" : statusCode === 1 ? "Pending" : "Overdue";

      return {
        id: `#INV-${1000 + cart.id}`,
        customer: usersById.get(cart.userId) ?? `Customer ${cart.userId}`,
        status,
        total: cart.discountedTotal,
      };
    });

  return {
    navItems,
    metrics,
    chartData,
    invoiceRows,
  };
}

import {
  DashboardCharts,
  DashboardDataTable,
  DashboardHeader,
  DashboardMetrics,
  DashboardSidebar,
  useDashboardData,
} from "@/features/dashboard";
import { FiltersBar, filtersSchema, useFilters } from "@/features/filters";
import { useTheme } from "@/hooks/use-theme";

function App() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const { data, isPending } = useDashboardData();
  const { filters, setFilters } = useFilters();

  const handleApplyFilters = () => {
    filtersSchema.parse(filters);
  };

  if (isPending || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar
        navItems={data.navItems}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      />

      <div className="lg:pl-64">
        <DashboardHeader title="Dashboard" />

        <main className="space-y-4 p-4 md:space-y-6 md:p-6">
          <DashboardMetrics metrics={data.metrics} />
          <FiltersBar value={filters} onChange={setFilters} onApply={handleApplyFilters} />
          <DashboardCharts chartData={data.chartData} />
          <DashboardDataTable rows={data.invoiceRows} />
        </main>
      </div>
    </div>
  );
}

export default App;

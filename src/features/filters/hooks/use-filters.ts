import { useState } from "react";

import type { FiltersState } from "@/features/filters/model/types";

const INITIAL_FILTERS: FiltersState = {
  date: "2026-03-20",
  category: "all",
};

export function useFilters(initialFilters: FiltersState = INITIAL_FILTERS) {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);
  return { filters, setFilters };
}

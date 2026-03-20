import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { FiltersState } from "@/features/filters/model/types";

import { FilterField } from "./FilterField";

type FiltersBarProps = {
  value: FiltersState;
  onChange: (next: FiltersState) => void;
  onApply: () => void;
};

export function FiltersBar({ value, onChange, onApply }: FiltersBarProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 pt-6 md:flex-row md:items-end">
        <FilterField htmlFor="date-range" label="Date">
          <input
            id="date-range"
            type="date"
            value={value.date}
            onChange={(event) => onChange({ ...value, date: event.target.value })}
            className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
          />
        </FilterField>

        <FilterField htmlFor="category" label="Category">
          <select
            id="category"
            value={value.category}
            onChange={(event) =>
              onChange({
                ...value,
                category: event.target.value as FiltersState["category"],
              })
            }
            className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="all">All</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="finance">Finance</option>
          </select>
        </FilterField>

        <Button variant="outline" className="md:ml-auto" onClick={onApply}>
          <Filter className="mr-2 h-4 w-4" />
          Apply filters
        </Button>
      </CardContent>
    </Card>
  );
}

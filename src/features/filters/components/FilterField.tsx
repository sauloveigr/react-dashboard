import type { ReactNode } from "react";

type FilterFieldProps = {
  htmlFor: string;
  label: string;
  children: ReactNode;
};

export function FilterField({ htmlFor, label, children }: FilterFieldProps) {
  return (
    <div className="w-full space-y-1.5 md:max-w-xs">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

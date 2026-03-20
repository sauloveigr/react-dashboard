const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const DECIMAL_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export function formatCurrency(value: number) {
  return CURRENCY_FORMATTER.format(value);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function formatPercentage(value: number) {
  return `${DECIMAL_FORMATTER.format(value)}%`;
}

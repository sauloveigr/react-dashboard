import { z } from "zod";

export const filtersSchema = z.object({
  date: z.string().min(1),
  category: z.enum(["all", "sales", "marketing", "finance"]),
});

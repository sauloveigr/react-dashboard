import { z } from "zod";

export const usersResponseSchema = z.object({
  users: z.array(
    z.object({
      id: z.number(),
      firstName: z.string(),
      lastName: z.string(),
    }),
  ),
  total: z.number(),
});

export const productsResponseSchema = z.object({
  products: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      price: z.number(),
      stock: z.number(),
    }),
  ),
});

export const cartsResponseSchema = z.object({
  carts: z.array(
    z.object({
      id: z.number(),
      userId: z.number(),
      total: z.number(),
      discountedTotal: z.number(),
    }),
  ),
  total: z.number(),
});

export type UsersResponse = z.infer<typeof usersResponseSchema>;
export type ProductsResponse = z.infer<typeof productsResponseSchema>;
export type CartsResponse = z.infer<typeof cartsResponseSchema>;

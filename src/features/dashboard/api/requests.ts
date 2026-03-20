import { z } from "zod";

import {
  cartsResponseSchema,
  productsResponseSchema,
  usersResponseSchema,
  type CartsResponse,
  type ProductsResponse,
  type UsersResponse,
} from "./contracts";

const API_BASE_URL = "https://dummyjson.com";

async function fetchJson<T>(url: string, schema: z.ZodSchema<T>): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const json = await response.json();
  return schema.parse(json);
}

export function getUsers(): Promise<UsersResponse> {
  return fetchJson(
    `${API_BASE_URL}/users?limit=30&select=id,firstName,lastName`,
    usersResponseSchema,
  );
}

export function getProducts(): Promise<ProductsResponse> {
  return fetchJson(
    `${API_BASE_URL}/products?limit=6&select=id,title,price,stock`,
    productsResponseSchema,
  );
}

export function getCarts(): Promise<CartsResponse> {
  return fetchJson(
    `${API_BASE_URL}/carts?limit=10&select=id,userId,total,discountedTotal`,
    cartsResponseSchema,
  );
}

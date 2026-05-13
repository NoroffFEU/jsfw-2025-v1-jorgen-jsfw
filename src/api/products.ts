// src/api/products.ts

import type { Product } from '../types/product';

/**
 * Fetches all products from the online shop API.
 *
 * @returns Array of products
 * @throws Error if the request fails
 */
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://v2.api.noroff.dev/online-shop');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const json = await res.json();
  return json.data;
}

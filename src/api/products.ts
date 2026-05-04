// src/api/products.ts

import type { Product } from '../types/product';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://v2.api.noroff.dev/online-shop');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const json = await res.json();
  return json.data;
}

// src/utils/price.ts

export function getDiscount(price: number, discountedPrice?: number) {
  const hasDiscount = discountedPrice !== undefined && discountedPrice < price;

  // calculate discount %
  const discountPercent = hasDiscount
    ? Math.round(((price - discountedPrice!) / price) * 100)
    : 0;

  return { hasDiscount, discountPercent };
}

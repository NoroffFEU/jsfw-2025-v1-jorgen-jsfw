// src/utils/price.ts

/**
 * Calculates whether a product has a discount
 * and returns the discount percentage.
 *
 * @param price Original product price
 * @param discountedPrice Discounted product price
 * @returns  Object containing discount status and percentage
 */
export function getDiscount(price: number, discountedPrice?: number) {
  const hasDiscount = discountedPrice !== undefined && discountedPrice < price;

  // calculate discount %
  const discountPercent = hasDiscount
    ? Math.round(((price - discountedPrice!) / price) * 100)
    : 0;

  return { hasDiscount, discountPercent };
}

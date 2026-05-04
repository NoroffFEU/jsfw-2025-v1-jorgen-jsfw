// src/components/Price.tsx
// shared logic in ProductCard.tsx and ProductDetails.tsx

import styles from './Price.module.css';
import { getDiscount } from '../utils/price';

interface Props {
  price: number;
  discountedPrice?: number;
}

export default function Price({ price, discountedPrice }: Props) {
  // check if product has discount
  const { hasDiscount } = getDiscount(price, discountedPrice);

  return (
    // price
    <div className={styles.priceText}>
      {hasDiscount ? (
        <>
          <span className={styles.oldPrice}>{price} kr</span>
          <strong className={styles.discountedPrice}>
            {discountedPrice} kr
          </strong>
        </>
      ) : (
        <strong>{price} kr</strong>
      )}
    </div>
  );
}

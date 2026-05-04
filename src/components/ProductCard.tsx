// src/components/ProductCard.tsx

import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  // check if product has discount
  const hasDiscount =
    product.discountedPrice && product.discountedPrice < product.price;

  // calculate discount %
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice!) / product.price) * 100,
      )
    : 0;

  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      {/* image */}
      <img
        src={product.image?.url || '/placeholder.jpg'}
        alt={product.image?.alt || product.title}
        className={styles.img}
      />
      {/* discount badge */}
      {hasDiscount && <span className={styles.badge}>-{discountPercent}%</span>}
      {/* title */}
      <h3>{product.title}</h3>
      {/* price */}
      <p>
        {hasDiscount ? (
          <>
            <span className={styles.oldPrice}>{product.price} kr</span>
            {''}
            <strong>{product.discountedPrice} kr</strong>
          </>
        ) : (
          <strong>{product.price} kr</strong>
        )}
      </p>
      {/* rating */}
      <div className={styles.ratingContainer}>
        <span className={styles.starIcon}>{'\u2605'}</span>
        <span className={styles.ratingText}>
          {product.rating % 1 === 0
            ? product.rating
            : product.rating.toFixed(1)}{' '}
          / 5
        </span>
      </div>
    </Link>
  );
}

// src/components/ProductCard.tsx

import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import styles from './ProductCard.module.css';
import Rating from '../components/Rating';
import Price from './Price';
import { getDiscount } from '../utils/price';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { hasDiscount, discountPercent } = getDiscount(
    product.price,
    product.discountedPrice,
  );

  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      {/* discount badge logic is in src/components/Price.tsx */}
      {hasDiscount && <span className={styles.badge}>-{discountPercent}%</span>}

      {/* image */}
      <img
        src={product.image?.url || '/placeholder.jpg'}
        alt={product.image?.alt || product.title}
        className={styles.img}
      />

      {/* title */}
      <h3>{product.title}</h3>

      {/* price logic is in src/components/Price.tsx  */}
      <Price price={product.price} discountedPrice={product.discountedPrice} />

      {/* rating logic is in src/components/Rating.tsx */}
      <Rating rating={product.rating} />
    </Link>
  );
}

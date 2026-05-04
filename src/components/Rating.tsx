// src/components/Rating.tsx
// shared logic in ProductCard.tsx and ProductDetails.tsx

import styles from './Rating.module.css';

interface Props {
  rating: number;
}

export default function Rating({ rating }: Props) {
  const displayRating = rating % 1 === 0 ? rating : rating.toFixed(1);

  return (
    <div className={styles.ratingContainer}>
      <span className={styles.starIcon}>{'\u2605'}</span>
      <span className={styles.ratingText}>{displayRating}/5</span>
    </div>
  );
}

// src/pages/ProductDetails.tsx

import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import Layout from '../components/Layout';
import styles from './ProductDetails.module.css';
import Rating from '../components/Rating';
import Price from '../components/Price';
import { getDiscount } from '../utils/price';

export default function ProductDetails() {
  const { id } = useParams(); // get URL id
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Layout>Loading...</Layout>;
  if (!product) return <Layout>Product not found</Layout>;

  const { hasDiscount, discountPercent } = getDiscount(
    product.price,
    product.discountedPrice,
  );

  return (
    <Layout>
      <Link to="/" style={{ display: 'block', marginBottom: '1rem' }}>
        &larr; Back to Home
      </Link>

      <h1 className={styles.header}>Product Details</h1>

      {/* page layout */}
      <div className={styles.page}>
        {/* image + badge */}
        <div className={styles.imageWrapper}>
          {hasDiscount && (
            <span className={styles.badge}>-{discountPercent}%</span>
          )}

          {/* image */}
          <img
            src={product.image?.url || '/placeholder.jpg'}
            alt={product.image?.alt || product.title}
            className={styles.img}
          />
        </div>

        {/* content */}
        <div className={styles.content}>
          {/* title */}
          <h3 className={styles.title}>{product.title}</h3>

          {/* description */}
          <p className={styles.description}>{product.description}</p>

          {/* price logic is in src/components/Price.tsx  */}
          <Price
            price={product.price}
            discountedPrice={product.discountedPrice}
          />

          {/* tags */}
          {Array.isArray(product.tags) && product.tags.length > 0 && (
            <div className={styles.tags}>
              {product.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* rating logic is in src/components/Rating.tsx */}
          <Rating rating={product.rating} />

          {/* add to cart */}
          <button className={styles.button}>Add to Cart</button>

          {/* reviews */}
          {Array.isArray(product.reviews) && product.reviews.length > 0 && (
            <div className={styles.reviews}>
              <h2>Reviews</h2>
              {product.reviews.map((review) => (
                <div key={review.id} className={styles.review}>
                  <p>
                    <strong>{review.username}</strong> ({review.rating}/5)
                  </p>
                  <p>{review.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

// src/pages/ProductDetails.tsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import Layout from '../components/Layout';
import styles from './ProductDetails.module.css';
import Rating from '../components/Rating';
import Price from '../components/Price';
import { getDiscount } from '../utils/price';
import { useCart } from '../hooks/useCart';
import BackToHome from '../components/BackToHome';
import { toast } from 'react-toastify';

export default function ProductDetails() {
  const { id } = useParams(); // get URL id
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    document.title = 'Product Details'; // browser tab text
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
      <BackToHome />

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
          <button
            className={styles.button}
            onClick={() => {
              addToCart({
                id: product.id,
                title: product.title,
                quantity: 1,
                image: product.image?.url || '',

                price: product.price,
                discountedPrice: product.discountedPrice,
              });

              toast.success('Added to cart!'); // show feedback
            }}
          >
            Add to Cart
          </button>

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

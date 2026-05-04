// src/pages/Home.tsx

import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';
import type { Product } from '../types/product';
import { fetchProducts } from '../api/products';
import styles from './Home.module.css';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); // React Hook combined with TypeScript
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <p>{error}</p>
      </Layout>
    );

  return (
    <Layout>
      <h1 className={styles.header}>Shop fast and easy</h1>
      <Searchbar />

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

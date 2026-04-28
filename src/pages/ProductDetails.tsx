// src/pages/ProductDetails.tsx

import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ProductDetails() {
  return (
    <Layout>
      <Link to="/" style={{ display: 'block', marginBottom: '1rem' }}>
        &larr; Back to Home
      </Link>
      <h1>Product Details</h1>
    </Layout>
  );
}

// src/pages/Home.tsx

import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';

export default function Home() {
  return (
    <Layout>
      <h1>Shop fast and easy</h1>
      <Searchbar />

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '0px' }}>Temporary Test Link:</h3>
        <Link to="/product">Go to Product Details Page</Link>
      </div>
    </Layout>
  );
}

// src/pages/SuccessPage.tsx

import styles from './SuccessPage.module.css';
import Layout from '../components/Layout';
import { useCart } from '../hooks/useCart';
import { useEffect } from 'react';
import BackToHome from '../components/BackToHome';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout hideCart={true}>
      <div className={styles.container}>
        <h1>Order Confirmed!</h1>
        <h2>Thanks for choosing us</h2>
        <h2> We'll send you an email as soon as it ships.</h2>

        <div className={styles.buttonWrapper}>
          <BackToHome />
        </div>
      </div>
    </Layout>
  );
}

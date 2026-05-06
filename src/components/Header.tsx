// src/components/Header.tsx

import { useState } from 'react';
import styles from './Header.module.css';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className={styles.header}>
      <h1>Online Shop</h1>
      <p className={styles.cart} onClick={() => setOpen(!open)}>
        {open ? '▲' : '▼'}
        Cart ({totalItems})
      </p>
      {open && (
        <div className={styles.dropdown}>
          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img className={styles.img} src={item.image} alt={item.title} />

              <p className={styles.title}>{item.title}</p>

              <p className={styles.qty}>Qty:{item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

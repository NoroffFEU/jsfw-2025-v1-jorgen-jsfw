// src/components/Header.tsx

import { useState } from 'react';
import styles from './Header.module.css';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import { getDiscount } from '../utils/price';

interface Props {
  hideCart?: boolean;
}

export default function Header({ hideCart }: Props) {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <h1>Online Shop</h1>

      {!hideCart && (
        <div className={styles.cartView}>
          <Link to={'/cart'} className={styles.link}>
            Go to cart
          </Link>

          <span onClick={() => setOpen(!open)}>
            {open ? '▲' : '▼'}
            Cart view({totalItems})
          </span>
        </div>
      )}

      {open && !hideCart && (
        <div className={styles.dropdown}>
          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.imageWrapper}>
                {getDiscount(item.price, item.discountedPrice).hasDiscount && (
                  <span className={styles.badge}>
                    -
                    {
                      getDiscount(item.price, item.discountedPrice)
                        .discountPercent
                    }
                    %
                  </span>
                )}
                <img className={styles.img} src={item.image} alt={item.title} />
              </div>

              <p className={styles.title}>{item.title}</p>

              <p className={styles.qty}>Qty:{item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

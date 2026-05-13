// src/pages/CartPage.tsx

import Layout from '../components/Layout';
import { useCart } from '../hooks/useCart';
import styles from './CartPage.module.css';
import { Link } from 'react-router-dom';
import Price from '../components/Price';
import { getDiscount } from '../utils/price';
import BackToHome from '../components/BackToHome';
import { toast } from 'react-toastify';

export default function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0,
  );

  return (
    <Layout>
      <BackToHome />

      <h1 className={styles.header}>Shopping Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.imageWrapper}>
            {getDiscount(item.price, item.discountedPrice).hasDiscount && (
              <span className={styles.badge}>
                -{getDiscount(item.price, item.discountedPrice).discountPercent}
                %
              </span>
            )}
            <img className={styles.img} src={item.image} alt={item.title} />
          </div>

          <div className={styles.info}>
            <h3>{item.title}</h3>

            {/* <p>${item.price}</p> */}
            <Price price={item.price} discountedPrice={item.discountedPrice} />
          </div>
          <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span className={styles.qty}>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>

          <button
            className={styles.removeBtn}
            onClick={() => {
              removeFromCart(item.id);
              toast.error('Item removed from cart');
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <Link to={'/success'}>
        <button className={styles.checkoutBtn}>Checkout</button>
      </Link>
    </Layout>
  );
}

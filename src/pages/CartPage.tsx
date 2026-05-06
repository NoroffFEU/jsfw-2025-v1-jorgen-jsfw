// src/pages/CartPage.tsx

import Layout from '../components/Layout';
import { useCart } from '../hooks/useCart';
import styles from './CartPage.module.css';

export default function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout>
      <h1 className={styles.header}>Shopping Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className={styles.item}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>

          <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button className={styles.checkout}>Checkout</button>
    </Layout>
  );
}

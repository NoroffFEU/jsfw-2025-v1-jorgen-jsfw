// src/components/Footer.tsx

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>&copy; {new Date().getFullYear()} Online shop</h3>
    </footer>
  );
}

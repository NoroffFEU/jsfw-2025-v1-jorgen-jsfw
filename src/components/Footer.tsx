// src/components/Footer.tsx

import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

type FooterProps = {
  children?: React.ReactNode;
};

export default function Footer({ children }: FooterProps) {
  return (
    <footer className={styles.footer}>
      {children}
      <Link className={styles.contactFooter} to="/contact">
        <h3>Contact Us</h3>
      </Link>
      <h3>&copy; {new Date().getFullYear()} Online shop</h3>
    </footer>
  );
}

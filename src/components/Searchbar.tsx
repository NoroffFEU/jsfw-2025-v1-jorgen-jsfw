// src/components/Searchbar.tsx

import styles from './Searchbar.module.css';

export default function Searchbar() {
  return (
    <input className={styles.searchbar} placeholder="Search for items"></input>
  );
}

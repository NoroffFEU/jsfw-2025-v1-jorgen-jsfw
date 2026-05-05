// src/components/Searchbar.tsx

import styles from './Searchbar.module.css';

export default function Searchbar() {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{'\u2315'}</span>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Search for items"
      />
    </div>
  );
}

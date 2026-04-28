// src/components/MainContent.tsx

import type { ReactNode } from 'react'; // Import ReactNode for TypeScript
import styles from './MainContent.module.css';

interface Props {
  children: ReactNode; // This tells TS that MainContent can wrap other elements
}

export default function MainContent({ children }: Props) {
  return (
    <main className={styles.mainContainer}>
      <h2>Shop fast and easy</h2>
      {children} {/* where the Searchbar will appear */}
    </main>
  );
}

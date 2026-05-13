// src/components/Layout.tsx
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

interface Props {
  children: ReactNode;
  hideCart?: boolean;
}

export default function Layout({ children, hideCart }: Props) {
  return (
    <>
      <Header hideCart={hideCart} />
      <MainContent>
        {children} {/* This is where your page-specific content goes */}
      </MainContent>
      <Footer />
    </>
  );
}

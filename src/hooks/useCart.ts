// src/hooks/useCart.ts

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCart() {
  return useContext(CartContext)!;
}

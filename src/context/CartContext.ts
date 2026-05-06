// src/context/CartContext.ts

import { createContext } from 'react';
import type { CartItem } from '../types/cart';

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, amount: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

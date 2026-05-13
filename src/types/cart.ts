// src/types/cart.ts

export type CartItem = {
  id: string;
  title: string;
  quantity: number;
  image: string;

  price: number;
  discountedPrice?: number;
};

// src/types/product.ts

export interface Product {
  id: string;
  title: string;
  image: {
    url: string;
    alt?: string;
  };
  price: number;
  description: string;
  tags?: string[];
  discountedPrice?: number;
  rating: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

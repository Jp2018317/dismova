export type CartItem = {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
};

export type FavItem = {
  name: string;
  description: string;
  price: number;
  category: string;
};

export type Product = {
  id: string,
  longTitle?: string,
  shortTitle: string,
  description?: string,
  category: string,
  price: number,
  stock?: number,
  code: string,
  images: {
    name: string
  }[]
  tags: {
    icon: string
    name: string
  }[]
};

export type ProductId = {
  id: string,
  shortTitle: string,
  category: string,
  code: string,
  images: {
    name: string
  }[]
};

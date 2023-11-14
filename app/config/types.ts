export type CartItem = {
  shortTitle: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  code: string;
};

export type FavItem = {
  shortTitle: string;
  description: string;
  price: number;
  category: string;
  code: string;
};

export type Product = {
  id: string,
  longTitle?: string,
  shortTitle: string,
  description: string,
  category: string,
  price: number,
  stock?: number,
  code: string,
  imgAmmount: number
  tags: {
    icon: string
    name: string
  }[]
};

export type SearchProduct = {
  shortTitle: string,
  description: string,
  category: string,
  price: number,
  code: string,
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

export type Tag = {
  name: string;
  icon: string;
};

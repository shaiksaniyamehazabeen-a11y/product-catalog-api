export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 25000, category: "Electronics" },
  { id: 3, name: "Headphones", price: 2000, category: "Accessories" },
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const addProduct = (product: Product): Product => {
  products.push(product);
  return product;
};

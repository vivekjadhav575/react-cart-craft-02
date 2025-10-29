import { Product } from "@/types/product";

const PRODUCTS_KEY = "ecommerce_products";

export const getProducts = (): Product[] => {
  const data = localStorage.getItem(PRODUCTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProducts = (products: Product[]): void => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, "id" | "createdAt">): Product => {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const updateProduct = (id: string, updates: Partial<Product>): boolean => {
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return false;
  products[index] = { ...products[index], ...updates };
  saveProducts(products);
  return true;
};

export const deleteProduct = (id: string): boolean => {
  const products = getProducts();
  const filtered = products.filter((p) => p.id !== id);
  if (filtered.length === products.length) return false;
  saveProducts(filtered);
  return true;
};

export const dispatchProduct = (id: string): boolean => {
  const products = getProducts();
  const product = products.find((p) => p.id === id);
  if (!product || product.quantity <= 0) return false;
  product.dispatched = true;
  product.quantity -= 1;
  saveProducts(products);
  return true;
};

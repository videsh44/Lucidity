import { Product } from "../../../../redux/slices/inventorySlice";

export const getTotalValue = (products: Product[]): number => {
  return products.reduce((total, product) => {
    // Remove the "$" sign and convert value to number
    const numericValue = parseFloat(product.value.replace("$", "")) || 0;
    return total + numericValue;
  }, 0);
};

export const getOutOfStock = (products: Product[]): number => {
    return products.filter((product) => product.quantity == 0).length;
}

export const getTotalCategories = (products: Product[]): number => {
    const uniqueCategories = new Set(products.map(product => product.category));
    return uniqueCategories.size;
  };
  
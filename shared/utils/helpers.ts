import { IProduct } from "../models/Product";

export function getFormattedProducts(products: IProduct[]): IProduct[] {
  console.log(products);
  let res = products;
  // sortProducts(res);
  return res;
}

export function getFormattedPrice(numPrice: number): string {
  const price: string = numPrice.toString();
  const decimalPosition: number = price.length - 2;
  return `${price.slice(0, decimalPosition)},${price.slice(decimalPosition)}`;
}

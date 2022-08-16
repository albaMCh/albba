import { IProduct } from "../models/Product";

export function getFormattedProducts(products: IProduct[]) {
  console.log(products);
  let res = products;
  // sortProducts(res);
  return res;
}

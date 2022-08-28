import styles from "../styles/ProductCard.module.scss";

import Link from "next/link";
import { getFormattedPrice } from "../shared/utils/helpers";

import { IProduct } from "../shared/models/Product";

import Image from "next/image";

function ProductCard({ product, index }: { product: IProduct; index: number }) {
  return (
    <li key={index} className={styles.card}>
      <Link href={"/productos/" + product.slug}>
        <a>
          <Image
            alt={product.title}
            width="200"
            height="200"
            src={product.image}
          ></Image>
          <p>{product.title}</p>
          <p>{getFormattedPrice(product.price)}€</p>
        </a>
      </Link>
    </li>
  );
}

export default ProductCard;

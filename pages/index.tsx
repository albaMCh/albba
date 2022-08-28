import styles from "../styles/Common.module.scss";
import homeStyles from "../styles/Home.module.scss";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  getFormattedProducts,
  getFormattedPrice,
} from "../shared/utils/helpers";

import { IProduct } from "../shared/models/Product";
import { getProducts } from "../shared/middleware/products.middleware";

import {
  onChangeSearchText,
  onSearchKeyPress,
  search,
} from "../shared/utils/search";
import ProductCard from "../components/productCard.component";

function Home({ products }: { products: IProduct[] }) {
  const router = useRouter();
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <div className={styles.grid}>
      <h1>Listado de productos</h1>
      <div>
        <input
          type="text"
          id="input-search"
          className={styles["search-input"]}
          placeholder="Buscar"
          onChange={(e) => onChangeSearchText(e, setSearchTitle)}
          onKeyPress={(e) => onSearchKeyPress(e, router, searchTitle)}
          value={searchTitle}
        />
        <button
          className={styles["search-button"]}
          onClick={(e) => search(e, router, searchTitle)}
        >
          Buscar
        </button>
      </div>
      <ul className={`${styles["card-group"]} ${homeStyles.productsSection}`}>
        {products.map((product: IProduct, index: number) => (
          <ProductCard product={product} index={index} key={index} />
        ))}
      </ul>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const response = await getProducts();

  let products = getFormattedProducts(response.data);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  };
}

export default Home;

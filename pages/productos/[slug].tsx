import React, { useState } from "react";
import { useRouter } from "next/router";
import { BsArrowReturnLeft } from "react-icons/bs";

import {
  getProduct,
  getProducts,
} from "../../shared/middleware/products.middleware";

import styles from "../../styles/Common.module.scss";

import productStyles from "../../styles/Product.module.scss";
import { IProduct } from "../../shared/models/Product";
import { getFormattedPrice } from "../../shared/utils/helpers";

function User({ product }: any) {
  const router = useRouter();

  const navigateToHome = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <div className={styles["buttons-bar"]}>
        <button className={styles["return-button"]} onClick={navigateToHome}>
          <BsArrowReturnLeft />
        </button>
      </div>
      <div className={productStyles["product-card"]}>
        <div>
          <label>Producto:</label>
          <span>{product.title}</span>
        </div>
        <div>
          <label>Descripción:</label>
          <span>{product.description}</span>
        </div>
        <div>
          <label>Precio: </label>
          <span>{getFormattedPrice(product.price)}€</span>
        </div>
        <div>
          <label>Imagen:</label>
          <span>{product.image}</span>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const response = await getProducts();

  // Get the paths we want to pre-render based on posts
  const paths = response.data.map((product: IProduct) => ({
    params: { slug: String(product.slug) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await getProduct(params.slug);

  // Pass post data to the page via props
  return { props: { product: response.data } };
}

export default User;

const API_URL = "http://localhost:3000/api";
const ENDPOINT = "products";

export const getProducts = async ({ query }: { query?: string } = {}) => {
  let isError = false;
  try {
    const url = `${API_URL}/${ENDPOINT}${query ? "/search?q=" + query : ""}`;

    console.log("------------------------");
    console.log("url:", url);
    const res = await fetch(url);

    const data = await res.json();

    console.log("----------------------");
    console.log("data:", data);

    return {
      ...data,
      isError,
    };
  } catch (e) {
    isError = true;
    return {
      data: [],
      isError,
    };
  }
};

export const getProduct = async (id: string) => {
  let isError = false;
  try {
    let response = await fetch(`${API_URL}/${ENDPOINT}/${id}`);
    const product = await response.json();

    return {
      data: product,
      isError,
    };
  } catch (e) {
    isError = true;
    return {
      data: null,
      isError,
    };
  }
};

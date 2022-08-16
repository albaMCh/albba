const API_URL = "https://dummyjson.com";
const ENDPOINT = "products";

export const getUsuarios = async ({ query }: { query?: string } = {}) => {
  let isError = false;
  try {
    const url = `${API_URL}/${ENDPOINT}${query ? "/search?q=" + query : ""}`;

    console.log("------------------------");
    console.log("url:", url);
    const res = await fetch(url);
    const data = await res.json();

    return {
      data: data.products,
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

export const getUsuario = async (id: string) => {
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

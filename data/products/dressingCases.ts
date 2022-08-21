import { IProduct } from "../../shared/models/Product";

const categoryRerefence = "DSC";

const category = "dressingCase";

const dressingCases: IProduct[] = [
  {
    slug: "neceser-volante",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "Neceser de volantes",
    category,
    price: 1990,
    description: "Neceser de cremallera con volante",
    image: "",
  },
  {
    slug: "neceser-media-luna",
    reference: "",
    title: "Neceser cremallera media luna",
    category,
    price: 1990,
    description:
      "Neceser semicircular con cremallera, y forro impermeable ideal para el maquillaje",

    image: "",
  },
  {
    slug: "neceser-pico",
    reference: "",
    title: "Neceser en pico",
    category,
    price: 1990,
    description: "Neceser de cremallera pico de gran capacidad",
    image: "",
  },
  {
    slug: "neceser-rectangular",
    reference: "",
    title: "Neceser rectangular",
    category,
    price: 1990,
    description: "Neceser de cremallera rectangular y gran capacidad",
    image: "",
  },
];

export default dressingCases;

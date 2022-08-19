import { IProduct } from "../shared/models/Product";

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
    title:
      "Neceser semicircular con cremallera, y forro impermeable ideal para el maquillaje",
    category,
    price: 1990,
    description: "Neceser de cremallera medialuna",
    image: "",
  },
  {
    slug: "neceser-pico",
    reference: "",
    title: "Neceser en pico, de gran capacidad",
    category,
    price: 1990,
    description: "Neceser de cremallera pico",
    image: "",
  },
  {
    slug: "neceser-rectangular",
    reference: "",
    title: "Neceser rectanguklar con cremallera, y gran capacidad",
    category,
    price: 1990,
    description: "Neceser de cremallera rectangular",
    image: "",
  },
];

export default dressingCases;

import { IProduct } from "../shared/models/Product";

const categoryRerefence = "KYR";

const category = "keyRing";

const keyRings: IProduct[] = [
  {
    slug: "llavero-personalizado",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "Llavero personalizado como cada cliente prefiera",
    category,
    price: 499,
    description: "llavero de tela personalizado como cada cliente decida",
    image: "",
  },
];

export default keyRings;

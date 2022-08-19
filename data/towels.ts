import { IProduct } from "../shared/models/Product";
const categoryRerefence = "TW";
const category = "towel";

const towels: IProduct[] = [
  {
    slug: "toallitas-desmaquillantes",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "Toallitas desmaquillantes",
    category,
    price: 599,
    description:
      "set de tres toallitas desmaquillantes de diferentes estampados las cuales incluyen bolsita para guardarse",
    image: "",
  },
  {
    slug: "toalla-pequeña",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "Toalla pequeña",
    category,
    price: 899,
    description:
      "Toalla pequeña realiza en tejido waffle, la cual ocupa poco espacio, muy util para el colegio o para llevar en el bolso",
    image: "",
  },
  {
    slug: "toalla lactancia",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "toalla lactancia",
    category,
    price: 1199,
    description:
      "Toalla para evitar que el bebe cuando esta cogido nos manche la ropa",
    image: "",
  },
];

export default towels;

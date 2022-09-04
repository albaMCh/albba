import { IProduct } from "../../shared/models/Product";

// References
const categoryRerefence = "PUR";

const categoryName = "purses";

const purses: IProduct[] = [
  {
    slug: "monedero-mafalda",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "Monedero de Mafalda",
    categories: [categoryName],
    price: 995,
    description: "Monedero con estampado de Mafalda",
    image: "/images/monedero-mafalda.jpg",
  },
];

export default purses;

import { IProduct } from "../shared/models/Product";

// References
const categoryRerefence = "BPA";

const categoryName = "babysPacifier";

const babiesPacifiers: IProduct[] = [
  {
    slug: "chupetero-batman",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "Chupetero Batman",
    category: categoryName,
    price: 995,
    description: "Chupetero con dibujos de Batman",
    image: "",
  },
];

export default babiesPacifiers;

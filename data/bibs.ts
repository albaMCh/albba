// Baberos

import { IProduct } from "../shared/models/Product";

const categoryRerefence = "BIB";

const category = "bib";

const bibs: IProduct[] = [
  {
    slug: "babero-mafalda",
    reference: `${categoryRerefence}-001-001-M-V2022`,
    title: "Babero Mafalda",
    category,
    price: 1999,
    description: "Babero con dibujos de Mafalda",
    image: "",
  },
];

export default bibs;

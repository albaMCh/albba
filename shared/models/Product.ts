export interface IProduct {
  slug: string;
  reference: string; // [Categoria|Estampado|Modelo|Talla|Temporada]
  title: string;
  description: string;
  price: number;
  categories: string[];
  image: string;
}

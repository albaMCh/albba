export interface IProduct {
  slug: string;
  reference: string; // [Categoria|Estampado|Modelo|Talla|Temporada]
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

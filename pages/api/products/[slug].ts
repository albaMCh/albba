// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import data from "../../../data/products";

import { IProduct } from "../../../shared/models/Product";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({
      message: "Bad url",
    });
  }

  const record = data.find((product: IProduct) => {
    return product.slug === slug;
  });

  if (!record) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  return res.status(200).json(record);
}

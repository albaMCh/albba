// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import data from "../../data/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let page: number = parseInt(req.query?.page as string);
  let perPage: number = parseInt(req.query?.perPage as string);

  let paginatedData = [...data];

  if (page || perPage) {
    page = page || 1;
    perPage = perPage || 10;

    paginatedData = paginatedData.slice((page - 1) * perPage, page * perPage);
  }

  const result = {
    page,
    perPage,
    total: data.length,
    data: paginatedData,
  };

  res.status(200).json(result);
}

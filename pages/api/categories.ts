import type { NextApiRequest, NextApiResponse } from "next";

import data from "../../data/categories";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).send(data);
}

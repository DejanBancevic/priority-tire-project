import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res : NextApiResponse) {
  const response = await fetch("https://backend.reachdigital.dev/graphql", {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      ...(req.headers.authorization && {
        Authorization: req.headers.authorization,
      }),
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(response.status).json(data);
}

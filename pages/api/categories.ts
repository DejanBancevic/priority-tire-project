import { NextApiRequest, NextApiResponse } from "next";
import { GetCategoriesDocument } from "@/graphql/generated";
import { request } from "graphql-request";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await request(
      process.env.NEXT_PUBLIC_API_URL!,
        GetCategoriesDocument,
      
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import {
  GetSubCategoriesDocument,
  GetSubCategoriesQuery,
} from "@/graphql/generated";
import { request } from "graphql-request";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { parentCategoryId } = req.query;

  try {
    console.log("Sending parentCategoryId:", parentCategoryId);
    const data: GetSubCategoriesQuery = await request(
      process.env.NEXT_PUBLIC_API_URL!,
      GetSubCategoriesDocument,
      { parentCategoryId: parentCategoryId }
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Subcategory fetch error:", error);
    res.status(500).json({ error: "Failed to fetch subcategories" });
  }
}

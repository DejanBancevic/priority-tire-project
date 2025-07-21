import { GetCategoriesDocument, GetCategoriesQuery } from "@/graphql/generated";
import request from "graphql-request";

const fetchCategories = async () =>
  request<GetCategoriesQuery>(
    process.env.NEXT_PUBLIC_API_URL!,
    GetCategoriesDocument
  );

export default fetchCategories;

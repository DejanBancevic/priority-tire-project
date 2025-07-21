import {
  GetSubCategoriesDocument,
  GetSubCategoriesQuery,
} from "@/graphql/generated";
import request from "graphql-request";

const fetchSubCategories = async (id: string) =>
  
  request<GetSubCategoriesQuery>(
    process.env.NEXT_PUBLIC_API_URL!,
      GetSubCategoriesDocument,
    { parentCategoryId: parseInt(id) }
    
  );

export default fetchSubCategories;

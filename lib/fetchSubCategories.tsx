import { SubCategoriesDocument } from "@/graphql/generated";
import { client } from "./apolloClient";

const fetchSubCategories = async (id: String) => {
    const { data } = await client.query({
        query: SubCategoriesDocument,
        variables: { id },
    });

    return data
}

export default fetchSubCategories;
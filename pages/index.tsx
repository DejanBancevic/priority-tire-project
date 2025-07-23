

import PromotionsComp from "@/components/PromotionsComp/PromotionsComp";
import RebatesComp from "@/components/rebates/RebatesComp/RebatesComp";
import PopularProductComp from "@/components/popularProducts/PopularProductsComp/PopularProductsComp";
import HeroBannerComp from "@/components/HeroBannerComp/HeroBannerComp";
import { Box } from "@mui/material";
import { gql } from "graphql-request";
import { CategoriesDocument, CategoriesQuery } from "@/graphql/generated";
import { client } from "@/lib/apolloClient";

type HomeProps = CategoriesQuery

export default function Home({ categories }: HomeProps) {

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <HeroBannerComp />

        <RebatesComp />

        <PromotionsComp />

        <PopularProductComp />

        {/* <div className="text-black text-center mb-10">
        <h1>All cats ({categories.length})</h1>
        <ul>
          {categories.map((category, i) => {
            if (!category) return null;

            return (
              <li key={category.id}>
                <strong>{category.name}</strong> — Count{" "}
                {category.product_count}
              </li>
            );
          })}
        </ul>
      </div> */}
      </Box>
    </>
  );
}

// export async function getServerSideProps() {
//   const data: CategoriesQuery = await client.request(CategoriesDocument);

//   return {
//     props: {
//       categories: data.categories?.items,
//     },
//   };
// }
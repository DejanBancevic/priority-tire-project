import { client } from "../lib/graphqlClient";
import { GET_PRODUCTS, GET_CATEGORIES } from "../lib/queries";
import PromotionsComp from "@/components/PromotionsComp/PromotionsComp";
import RebatesComp from "@/components/rebates/RebatesComp/RebatesComp";
import PopularProductComp from "@/components/popularProducts/PopularProductsComp/PopularProductsComp";
import HeroBannerComp from "@/components/HeroBannerComp/HeroBannerComp";
import { Box } from "@mui/material";

export async function getServerSideProps() {
  const data = await client.request(GET_CATEGORIES);

  return {
    props: {
      categories: (data as any).categories?.items,
    },
  };
}

export default function Home({ categories }: any) {
  if (!categories || !Array.isArray(categories)) {
    return <p>Failed to load categories.</p>;
  }

  return (

    <>
      <Box
        sx={{
          backgroundColor: 'white',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
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

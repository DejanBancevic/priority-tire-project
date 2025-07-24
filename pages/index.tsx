import PromotionsComp from "@/components/PromotionsComp/PromotionsComp";
import RebatesComp from "@/components/rebates/RebatesComp/RebatesComp";
import PopularProductComp from "@/components/popularProducts/PopularProductsComp/PopularProductsComp";
import HeroBannerComp from "@/components/HeroBannerComp/HeroBannerComp";
import { Box } from "@mui/material";
import { CategoriesDocument, ProductItemsFragment, ProductsDocument, } from "@/graphql/generated";
import { client } from "@/lib/apolloClient";


type HomeProps = {
  products: ProductItemsFragment;
}

export default function Home({ products }: HomeProps) {

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

        <PopularProductComp products={products} />

      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const { data : categoriesData } = await client.query({
    query: CategoriesDocument,
  });

  const { data : productsData} = await client.query({
    query: ProductsDocument,
  });

  const cat110Products = productsData.cat110?.items ?? [];
  const cat108Products = productsData.cat108?.items ?? [];
  const cat109Products = productsData.cat109?.items ?? [];

  const fullProductsData = {
    items: [...cat108Products, ...cat109Products, ...cat110Products,],
  };

  return {
    props: {
      categories: categoriesData.categories || [],
      products: fullProductsData || [],
    },
  };
}
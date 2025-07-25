import { Box, Grid, } from "@mui/material";
import React from "react";
import ProductCarouselComp from "@/components/product/ProductCarouselComp/ProductCarouselComp";
import ProductInfoComp from "@/components/product/ProductInfoComp/ProductInfoComp";
import ProductSpecComp from "@/components/product/ProductSpecComp/ProductSpecComp";
import ProductDescComp from "@/components/product/ProductDescComp/ProductDescComp";
import { client } from "@/lib/apolloClient";
import { GetStaticPaths, GetStaticProps } from "next";
import { AllProductsDocument, CategoriesDocument, ProductDocument, ProductItemFragment, } from "@/graphql/generated";

type ProductPageProps = {
  product: ProductItemFragment,
};

export default function ProductPage({ product }: ProductPageProps) {

  const [option, setOption] = React.useState("");

  return (
    <Box
      sx={{ color: "white" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          color: "black",
          bgcolor: "white",
          justifyContent: "center",
          textAlign: "center",
          paddingX: { xs: 2, md: 30 },
          paddingY: 4,
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <ProductCarouselComp product={product} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ProductInfoComp product={product} setOption={setOption} />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <ProductSpecComp product={product} option={option} />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <ProductDescComp product={product} option={option} />
        </Grid>
      </Grid>
    </Box>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await client.query({ query: AllProductsDocument });

  const paths = (data.products?.items ?? [])
    .filter((product: ProductItemFragment): product is ProductItemFragment => !!product?.sku)
    .map((product: ProductItemFragment) => ({
      params: { sku: product.sku },
    }));

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { data: categoriesData } = await client.query({
    query: CategoriesDocument,
  });

  const sku = params?.sku as string;

  const { data: productBySku } = await client.query({
    query: ProductDocument,
    variables: { sku },
  });

  const product = productBySku.products?.items?.[0] || null;

  if (!product) {
    return { notFound: true };
  }

  return { props: { product, categories: categoriesData.categories || [] } };
};
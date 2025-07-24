import { CategoryItemsFragment } from "@/graphql/generated";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

type SubCategoriesProps = {
  category: CategoryItemsFragment;
  setShowSubCatBar: (show: boolean) => void;
  id: number;
};

export default function SubCategories({ category, setShowSubCatBar, id,}: SubCategoriesProps) {

  const selectedCategory = category?.items?.find((cat) => cat?.id === id);
  
  const products = selectedCategory?.products?.items ?? [];

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="centar"
        alignItems="center"
        gap={{ md: 4 }}
        pl={6}
        height={{ md: 48 }}
        borderTop={1}
        borderColor="grey.300"
        bgcolor="white"
        width="100%"
        zIndex={1000}
      >
        {products.slice(-5).map((subCategory, index) => (
          <Button
            key={index}
            style={{ color: "#231f20", fontSize: "14px" }}
          >
            {subCategory?.name}
            <span className="text-gray-500 ml-1">({subCategory?.id})</span>
          </Button>
        ))}
      </Box>

      <div
        className="fixed inset-0 z-[800] bg-black opacity-35 "
        onClick={() => {
          setShowSubCatBar(false);
        }}
      />
    </Box>
  );
}

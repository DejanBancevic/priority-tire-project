import { CategoriesQuery, CategoryItemsFragment } from "@/graphql/generated";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

type CategoriesProps = {
  categories: CategoryItemsFragment;
  setSelectedCategory: (category: number) => void;
  setShowSubCatBar: (show: boolean) => void;
};

export default function Categories({ categories, setSelectedCategory, setShowSubCatBar,}: CategoriesProps) {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      pl={6}
      height={{ md: 48 }}
      borderTop={1}
      borderColor="grey.300"
      bgcolor="white"
      zIndex={1000}
    >
      {categories?.items?.slice(-3).map((category, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setSelectedCategory(category?.id ?? 0);
              setShowSubCatBar(true);
            }}
            style={{ color: "#231f20", fontSize: "14px" }}
          >
            {category?.name ?? ""}
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({category?.product_count ?? ""})
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
}

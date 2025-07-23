import { Box, Button } from "@mui/material";
import React, { useState } from "react";

type SubCategoriesProps = {
  category: string;
  setShowSubCatBar: (show: boolean) => void;
  id: string;
};

export default function SubCategories({ category, setShowSubCatBar, id,}: SubCategoriesProps) {

  const subCategories = [
    { name: "Tires", prod: "20" },
    { name: "Accessories", prod: "12" },
    { name: "Brands", prod: "23" },
    { name: "Offers", prod: "33" },
  ];

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
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
        {subCategories.map((subCategory, index) => (
          <Button
            key={index}
            onClick={() => console.log(`Clicked on ${subCategory.name}`)}
            style={{ color: "#231f20", fontSize: "14px" }}
          >
            {subCategory.name}
            <span className="text-gray-500 ml-1">({subCategory.prod})</span>
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

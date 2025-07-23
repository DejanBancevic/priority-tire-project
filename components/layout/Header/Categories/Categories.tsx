import { Box, Button, Typography } from '@mui/material';
import React from 'react'

type CategoriesProps = {
    categories: Category[];
    setSelectedCategory : (category: string) => void;
    setShowSubCatBar: (show: boolean) => void;
}

type Category = {
  name: string;
  product_count: number;
};

export default function Categories({ categories, setSelectedCategory, setShowSubCatBar }: CategoriesProps) {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      pl={6}
      height={{ md: 48 }} 
      borderTop={1}
      borderColor="grey.300"
      bgcolor="white"
      zIndex={1000}
    >
      {categories.map((category, index) => (
        <Button
          key={index}
          onClick={() => {
            setSelectedCategory(category.name);
            setShowSubCatBar(true);
          }}
          style={{ color: "#231f20", fontSize: "14px" }}
        >
          {category.name}
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({category.product_count})
          </Typography>
        </Button>
      ))}
    </Box>
  );
}

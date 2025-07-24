import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import {
  MediaGalleryEntryFragment,
  ProductItemFragment,
} from "@/graphql/generated";

type ProductDescCompProps = {
  product: ProductItemFragment;
  option: String;
};

const ProductDescComp = ({ product, option }: ProductDescCompProps) => {
    
    const optionDesc = product?.media_gallery_entries?.find((e) => e?.uid === option);
    const features = [
      product.updated_at,
      optionDesc?.types ?? "Not Specified",
      optionDesc?.uid ?? "Not Specified",
    ];

  return (
    <Box sx={{ py: 4, textAlign: "start" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "start",
          fontSize: 25,
        }}
      >
        Product Description
      </Typography>

      <Typography
        variant="h5"
        fontWeight="bold"
        fontStyle="italic"
        sx={{
          borderTop: 1,
          borderColor: "#e8e7e3",
          my: 3,
          pt: 3,
          textDecoration: "underline",
        }}
      >
        {product.name}
      </Typography>

      <Typography variant="subtitle2" fontWeight="bold">
        FEATURES AND BENEFITS
      </Typography>

      <List sx={{ pl: 2, listStyleType: "disc" }}>
        {features.map((feature, index) => (
          <ListItem key={index} disablePadding sx={{ display: "list-item" }}>
            <ListItemText
              primary={<Typography variant="body2">{feature}</Typography>}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="subtitle2" fontWeight="bold" my={2}>
        OVERVIEW
      </Typography>

      <Typography fontSize={15}>{product.description?.html}</Typography>
    </Box>
  );
};

export default ProductDescComp;

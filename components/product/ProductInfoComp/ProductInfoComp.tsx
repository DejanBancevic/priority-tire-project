import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import LandslideIcon from "@mui/icons-material/Landslide";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { ProductInfoNode } from "@/pages/product/[sku]";
import { ProductItemFragment, ReviewsItemFragment } from "@/graphql/generated";

type ProductInfoCompProps = {
  product: ProductItemFragment;
};

const ProductInfoComp = ({ product }: ProductInfoCompProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [counter, setCounter] = useState(1);
  const [fullPrice, setfullPrice] = useState(product.price?.regularPrice?.amount?.value);

  return (
    <div>
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "start",
          fontSize: 30,
        }}
      >
        {product.name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          mt: 1,
        }}
      >
        <Box
          sx={{
            display: "flex-col",
            gap: 2,
            alignItems: "start",
            mt: 1,
          }}
        >
          <ThunderstormIcon sx={{ color: "gray", cursor: "pointer" }} />
          <Typography
            sx={{
              textAlign: "start",
              fontSize: 12,
              color: "gray",
            }}
          >
            All Season
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex-col",
            gap: 2,
            alignItems: "start",
            mt: 1,
          }}
        >
          <LandslideIcon sx={{ color: "gray", cursor: "pointer" }} />
          <Typography
            sx={{
              textAlign: "start",
              fontSize: 12,
              color: "gray",
            }}
          >
            All Terrain
          </Typography>
        </Box>
      </Box>

      <Button
        fullWidth
        sx={{
          border: 1,
          borderColor: "#FFB634",
          color: "black",
          my: 2,
        }}
      >
        Log In or Join the Club to Get Member Pricing
      </Button>

      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "start",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              from
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
              ${product.price?.regularPrice?.amount?.value}
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              /each
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Product in Stock:
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              {product.stock_status === "IN_STOCK" ? (
                "✓"
              ) : (
                  "X"
              )}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "start",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Total Price: 
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: 30, ml: 1}}>
              ${fullPrice}
            </Typography>

          </Box>
        </Grid>

      
      </Grid>

      <Typography
        sx={{
          textAlign: "start",
          mt: 2,
        }}
      >
        Pick an option for more detailed information.
      </Typography>

      <Select
        fullWidth
        displayEmpty
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        sx={{
          mt: 1,
          justifyContent: "start",
          textAlign: "start",
          height: 40,
        }}
      >
        <MenuItem value="">
          <h1>Select an option</h1>
        </MenuItem>

        {product.media_gallery_entries
          ?.filter((item): item is NonNullable<typeof item> => item !== null)
          .map((entry, index) => (
            <MenuItem key={index} value={entry.uid}>
              {entry.id}
            </MenuItem>
          ))}

      </Select>

      <Grid display={"flex"} gap={2} mt={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            border: 1,
          }}
        >
          <Button
            onClick={() => setCounter(counter - 1)}
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            -
          </Button>
          <Typography width={30}>{counter}</Typography>
          <Button
            onClick={() => setCounter(counter + 1)}
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            +
          </Button>
        </Box>

        <Button
          onClick={() => setfullPrice(counter * product.price?.regularPrice?.amount?.value!)}
          fullWidth
          sx={{
            fontWeight: "bold",
            bgcolor: "#FFB634",
            color: "black",
          }}
        >
          ADD TO CART
        </Button>
      </Grid>
    </div>
  );
};

export default ProductInfoComp;

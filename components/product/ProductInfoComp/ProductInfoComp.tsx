import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import LandslideIcon from "@mui/icons-material/Landslide";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { ProductItemFragment } from "@/graphql/generated";

type ProductInfoCompProps = {
  product: ProductItemFragment;
  setOption: Function;
};

const ProductInfoComp = ({ product, setOption }: ProductInfoCompProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [counter, setCounter] = useState(1);
  const [cartCounter, setCartCounter] = useState(0);
  const [fullPrice, setfullPrice] = useState(0);
  const [fullName, setFullName] = useState(product.name);

  const handleDecrement = () => {
    setCartCounter((prev) => {
      const newCount = Math.max(0, prev - 1);
      setfullPrice(product.price?.regularPrice?.amount?.value! * newCount);
      return newCount;
    });
  };


  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "start",
          fontSize: 30,
        }}
      >
        {fullName}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
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
          gap: {xs:1, md:5},
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              pb: 1
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: 18, mt: 1.5, mr: 0.5 }}>
              from
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
              ${product.price?.regularPrice?.amount?.value}
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: 18, mt: 1.5 }}>
              /each
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",

            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Product in Stock:
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              {product.stock_status === "IN_STOCK" ? "✓" : "X"}
            </Typography>
          </Box>
        </Box>
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
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1.5,
              borderRadius: 2,
              boxShadow: "1",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

              <Typography sx={{ fontWeight: 600, fontSize: 18, }}>
                Total Price:
              </Typography>

              <Typography sx={{ fontWeight: 700, fontSize: 26, }}>
                ${fullPrice.toFixed(2)}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 18, color: "#333" }}>
                Quantity:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: 1,
                  overflow: "hidden",
                  height: 40,
                }}
              >
                <Button
                  onClick={handleDecrement}
                  sx={{
                    minWidth: 40,
                    fontWeight: "bold",
                    fontSize: 20,
                    color:"black"
                  }}
                >
                  -
                </Button>
                <Typography
                  sx={{
                    width: 40,
                    textAlign: "center",
                    fontSize: 18,
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {cartCounter}
                </Typography>

              </Box>
            </Box>
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
        onChange={(e) => {
          setSelectedOption(e.target.value);
          setOption(e.target.value);
        }}
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
            <MenuItem
              key={index}
              value={entry.uid}
              onClick={() => {
                setFullName(product.name + " " + entry.id);
              }}
            >
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
            borderColor: "#cbcfcb",
            borderRadius: 1,
          }}
        >
          <Button
            onClick={() => setCounter((counter) => Math.max(1, counter - 1))}
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            -
          </Button>
          <Typography width={30}>{counter}</Typography>
          <Button
            onClick={() => setCounter((counter) => counter + 1)}
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            +
          </Button>
        </Box>

        <Button
          onClick={() => {
            setfullPrice(
              counter * product.price?.regularPrice?.amount?.value! + fullPrice!
            );
            setCounter(1);
            setCartCounter(cartCounter + counter)
          }}
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
    </Box>
  );
};

export default ProductInfoComp;

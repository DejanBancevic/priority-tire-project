import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import LandslideIcon from "@mui/icons-material/Landslide";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import ProductCarouselComp from "@/components/product/ProductCarouselComp/ProductCarouselComp";
import ProductInfoComp from "@/components/product/ProductInfoComp/ProductInfoComp";
import goodyear from "../../public/rebates/goodyear-save-up-200.jpg";
import hankook from "../../public/rebates/hankook-save2-up-200.jpg";
import continental from "../../public/rebates/pt-continental-rebate-july-2025-540x284.jpg";
import kumho from "../../public/rebates/pt-kumho-rebate-spring-2025-540x284.jpg";
import mickey from "../..//public/rebates/pt-mickey-thompson-summer-rebate-2025--540x284.jpg";
import pirelli from "../../public/rebates/pt-pirelli-rebate-summer-jul-aug-2025-tile-540x284.jpg";
import cooper from "../../public/rebates/cooper-save-up-120.jpg";
import kenda from "../../public/rebates/kenda-save-200.jpg";
import nokian from "../../public/rebates/Nokian-save1-200.jpg";
import yokohama from "../../public/rebates/yokohama-save-200.jpg";
import type { StaticImageData } from "next/image";

export type ProductCarouselCompCard = {
  id: number;
  title: string;
  price: string;
  image: StaticImageData;
};

export type ProductInfoNode = {
  title: string;
  price: string;
  quantity: string;
  options: object[];
};




const ProductPage = () => {

  const product: ProductInfoNode = {
    title: "Cooper Discoverer AT3",
    price: "123",
    quantity: "23",
    options: [
      {
        text: "ddddddddddd",
      },
      {
        text: "aaaaaaaaaaa",
      },
      {
        text: "22222222222222",
      },
    ],
  };

  const popularProductsCarouselList: ProductCarouselCompCard[] = [
    {
      id: 1,
      title: "Goodyear: Save $200 On Sets of 4",
      price: "$500",
      image: goodyear,
    },
    {
      id: 2,
      title: "Hankook: Save $200 On Sets of 4",
      price: "$500",
      image: hankook,
    },
    {
      id: 3,
      title: "Continental Tire Rebates",
      price: "$500",
      image: continental,
    },
    {
      id: 4,
      title: "Kumho: Save $160 On Sets of 4",
      price: "$500",
      image: kumho,
    },
    {
      id: 5,
      title: "Mickey Thompson: Save $40 On Sets of 4",
      price: "$500",
      image: mickey,
    },
    {
      id: 6,
      title: "Pirelli Tire Rebates",
      price: "$500",
      image: pirelli,
    },
    {
      id: 7,
      title: "Cooper: Save $120 On Sets of 4",
      price: "$500",
      image: cooper,
    },
    {
      id: 8,
      title: "Kenda: Save $200 On Sets of 4",
      price: "$500",
      image: kenda,
    },
    {
      id: 9,
      title: "Nokian: Save $200 On Sets of 4",
      price: "$500",
      image: nokian,
    },
    {
      id: 10,
      title: "Yokohama: Save $200 On Sets of 4",
      price: "$500",
      image: yokohama,
    },
  ];

  return (
    <div className="bg-white">
      <Grid
        container
        spacing={2}
        sx={{
          color: "black",
          bgcolor: "white",
          justifyContent: "center",
          textAlign: "center",
          paddingX: 25,
          paddingY: 4,
        }}
      >
        <Grid size={6}>
          <ProductCarouselComp cards={popularProductsCarouselList} />
        </Grid>

        <Grid size={6}>
          <ProductInfoComp product={product} />
        </Grid>

        <Grid
          size={12}
          sx={{
            border: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "start",
              fontSize: 20,
            }}
          >
            Product Specifications
          </Typography>
        </Grid>

        <Grid
          size={12}
          sx={{
            border: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "start",
              fontSize: 20,
            }}
          >
            Product Description
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;

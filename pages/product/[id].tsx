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
import ProductSpecComp from "@/components/product/ProductSpecComp/ProductSpecComp";
import ProductDescComp from "@/components/product/ProductDescComp/ProductDescComp";

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

export type SpecData = {
    label: string;
    value: string | number | null
};

export type DescData = {
    title: string;
    features: string[];
    overview: string;
}


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

    const specsList: SpecData[] = [
        { label: "SKU", value: "N938812-99" },
        { label: "Type", value: "Light Truck" },
        { label: "Load Range", value: "E (10 Ply)" },
        { label: "Speed Rating", value: "R" },
        { label: "Performance", value: "All Terrain" },
        { label: "MPN", value: "170032002" },
        { label: "Overall Diameter", value: "32.3" },
        { label: "Season", value: "All Season" },
        { label: "Aspect Ratio", value: "55" },
        { label: "Brand", value: "Cooper" },
        { label: "UTQG", value: "N/A" },
        { label: "Run Flat", value: "No" },
        { label: "Rebate Available", value: "Yes" },
        { label: "Sidewall", value: "BSW: Black Side Wall" },
        { label: "Size", value: "285/55R20" },
        { label: "Load Index", value: "122/119" },
        { label: "Section Width", value: "285" },
        { label: "Model", value: "Discoverer AT3 XLT" },
        { label: "Rim Diameter", value: "20" },
        { label: "Tire Position", value: "Standard" },
        { label: "Tread Depth", value: "16/32" },
        { label: "Treadlife/Mileage", value: "60,000 miles" },
        { label: "Winter Tire Type", value: "N/A" },
    ];

    const descList: DescData = {
        title: "Cooper Discoverer AT3 XLT",
        features: [
            "All weather traction",
            "All terrain traction",
            "Increased controllability",
            "Longer lasting tread life",
        ],
        overview: `The Cooper Discoverer AT3 XLT is an all terrain, all season tire manufactured for light trucks. Cooper offers a 60,000 mile treadwear warranty with this tire model.
      
      The special silica-based tire compound and symmetric tread design firmly grip the road surface in all weather. The dry, wet and winter weather traction is ensured with the constant road contact and excellent compound flexibility. The wide grooves prevent hydroplaning as they disperse slush and water from below the tire’s footprint. The better hydroplaning and exceptional road grip guarantee a secure driving experience all year round.`,
    };

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
                    paddingX: { xs: 2, md: 30 },
                    paddingY: 4,
                }}
            >
                <Grid size={{ xs: 12, md: 6 }} >
                    <ProductCarouselComp cards={popularProductsCarouselList} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} >
                    <ProductInfoComp product={product} />
                </Grid>

                <Grid size={{ xs: 12, md: 12 }} >
                    <ProductSpecComp specs={specsList} />
                </Grid>

                <Grid size={{ xs: 12, md: 12 }}  >
                    <ProductDescComp descriptions={descList}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductPage;

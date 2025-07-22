import React from 'react'
import goodyear from "../../../public/rebates/goodyear-save-up-200.jpg";
import hankook from "../../../public/rebates/hankook-save2-up-200.jpg";
import continental from "../../../public/rebates/pt-continental-rebate-july-2025-540x284.jpg";
import kumho from "../../../public/rebates/pt-kumho-rebate-spring-2025-540x284.jpg";
import mickey from "../../../public/rebates/pt-mickey-thompson-summer-rebate-2025--540x284.jpg";
import pirelli from "../../../public/rebates/pt-pirelli-rebate-summer-jul-aug-2025-tile-540x284.jpg";
import cooper from "../../../public/rebates/cooper-save-up-120.jpg";
import kenda from "../../../public/rebates/kenda-save-200.jpg";
import nokian from "../../../public/rebates/Nokian-save1-200.jpg";
import yokohama from "../../../public/rebates/yokohama-save-200.jpg";
import type { StaticImageData } from "next/image";
import PopularProductsCarouselComp from '../PopularProductsCarouselComp/PopularProductsCarouselComp';


export type PopularProductsCarouselCard = {
    id: number;
    title: string;
    price: string;
    image: StaticImageData;
};

const popularProductsCarouselList: PopularProductsCarouselCard[] = [
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

const PopularProductsComp = () => {
    return (
        <div className='flex flex-col justify-center align-middle gap-6 mb-16'>
            <h1 className='text-2xl text-black font-bold text-center'>
                View Our Popular Products
            </h1>

            <PopularProductsCarouselComp
                cards={popularProductsCarouselList}
            />
        </div>
    )
}

export default PopularProductsComp
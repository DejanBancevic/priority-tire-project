import React from 'react'
import RebatesCarouselComp from '../RebatesCarouselComp/RebatesCarouselComp'
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


export type RebatesCarouselCard = {
    title: string;
    desc: string;
    image: StaticImageData;
};

const rebatesCarouselList: RebatesCarouselCard[] = [
    {
        title: "Goodyear: Save $200 On Sets of 4",
        desc: "1st July- 30th",
        image: goodyear,
    },
    {
        title: "Hankook: Save $200 On Sets of 4",
        desc: "1st July- 30th",
        image: hankook,
    },
    {
        title: "Continental Tire Rebates",
        desc: "July 1st - August 31th",
        image: continental,
    },
    {
        title: "Kumho: Save $160 On Sets of 4",
        desc: "1st July- 30th",
        image: kumho,
    },
    {
        title: "Mickey Thompson: Save $40 On Sets of 4",
        desc: "1st July- 30th",
        image: mickey,
    },
    {
        title: "Pirelli Tire Rebates",
        desc: "July 17th - August 6th 2025",
        image: pirelli,
    },
    {
        title: "Cooper: Save $120 On Sets of 4",
        desc: "1st July - 30th September 2025",
        image: cooper,
    },
    {
        title: "Kenda: Save $200 On Sets of 4",
        desc: "1st July - 30th September 2025",
        image: kenda,
    },
    {
        title: "Nokian: Save $200 On Sets of 4",
        desc: "1st July - 30th September 2025",
        image: nokian,
    },
    {
        title: "Yokohama: Save $200 On Sets of 4",
        desc: "1st July - 30th September 2025",
        image: yokohama,
    },
];

const RebatesComp = () => {
    return (
        <RebatesCarouselComp
            cards={rebatesCarouselList}
        />
    )
}

export default RebatesComp
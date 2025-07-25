import { Box } from '@mui/material';
import React from 'react';
import Image from "next/image";
import heroBanner from "../../public/heroBanner.webp";

const HeroBannerComp = () => {
    return (
        <Box
            sx={{
                overflow: "hidden"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: {
                        xs: "calc(100vw / 1.77)",
                        md: 350
                    },
                    position: "relative",
                }}
            >
                <Image
                    src={heroBanner}
                    alt="Hero Banner"
                    fill
                    className=' object-cover '
                />
            </Box>
        </Box>
    );
};

export default HeroBannerComp;

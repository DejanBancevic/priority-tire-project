import React from 'react'
import PopularProductsCarouselComp from '../PopularProductsCarouselComp/PopularProductsCarouselComp';
import { Box, Typography } from '@mui/material';
import { ProductItemsFragment,  } from '@/graphql/generated';

type PopularProductsCompProps = {
    products: ProductItemsFragment,
};

const PopularProductsComp = ({ products }: PopularProductsCompProps) => {
 
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={6}
            mb={16}
        >
            <Typography
                variant="h5" 
                fontWeight="bold"
                color="black"
                align="center"
            >
                View Our Popular Products
            </Typography>

            <PopularProductsCarouselComp products={products} />
        </Box>
    )
}

export default PopularProductsComp
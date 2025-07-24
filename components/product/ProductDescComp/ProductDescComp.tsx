import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { DescData } from '@/pages/product/[sku]';

type ProductDescCompProps = {
    descriptions: DescData
}

const ProductDescComp = ({ descriptions }: ProductDescCompProps) => {
    return (
        <Box sx={{ py: 4, textAlign: "start", }}>

            <Typography
                sx={{
                    fontWeight: "bold",
                    textAlign: "start",
                    fontSize: 25,
                }}
            >
                Product Description
            </Typography>

            <Typography variant="h5" fontWeight="bold" fontStyle="italic"
                sx={{
                    borderTop: 1,
                    borderColor: "#e8e7e3",
                    my: 3,
                    pt: 3,
                    textDecoration: 'underline',
                }}
            >
                {descriptions.title}
            </Typography>

            <Typography variant="subtitle2" fontWeight="bold" >
                FEATURES AND BENEFITS
            </Typography>

            <List sx={{ pl: 2, listStyleType: 'disc', }}>
                {descriptions.features.map((feature, index) => (
                    <ListItem key={index} disablePadding sx={{
                        display: 'list-item'
                    }}>
                        <ListItemText
                            primary={
                                <Typography variant="body2">
                                    {feature}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>

            <Typography variant="subtitle2" fontWeight="bold" my={2} >
                OVERVIEW
            </Typography>

            <Typography fontSize={15}>
                {descriptions.overview}
            </Typography>
        </Box>
    );
};

export default ProductDescComp
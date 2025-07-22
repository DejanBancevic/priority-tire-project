import { Box, Grid, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const product = {
    title: "Cooper Discoverer AT3",
    price: "123",
    quantity: "23",
    options: [
        {
            text: "ddddddddddd"
        },
        {
            text: "aaaaaaaaaaa"
        },
        {
            text: "22222222222222"
        }
    ]
}

const ProductPage = () => {

    const [selectedOption, setSelectedOption] = useState("");


    return (
        <Grid container spacing={2} sx={{
            color: "black",
            bgcolor: "white",
            border: 1,
            justifyContent: "center",
            textAlign: "center",
            padding: 4
        }}>
            <Grid size={6} sx={{
                border: 1
            }}>
                <h1>Car</h1>
            </Grid>


            <Grid size={6} sx={{
                border: 1,
            }}>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        textAlign: "start",
                        fontSize: 30 
                    }}
                >
                    {product.title}
                </Typography>

                <Grid container spacing={1} sx={{
                    justifyContent: "start",
                    alignItems: 'center',
                    gap: 5,
                }}>
                    <Grid xs={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
                                from
                            </Typography>

                            <Typography sx={{ fontWeight: 'bold', fontSize: 30 }}>
                                ${product.price}
                            </Typography>

                            <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
                                /each
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Typography sx={{ fontWeight: 'bold', }}>
                               Product in Stock:
                            </Typography>

                            <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
                                {product.quantity}
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>

                <Typography
                    sx={{
                        textAlign: "start",
                    }}
                >
                    Pick an option for exact price
                </Typography>

                <Select
                    fullWidth
                    displayEmpty
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    sx={{ mt: 1, justifyContent: "start", textAlign:"start", height:40}}
                >
                    <MenuItem value="">
                        <h1>Select an option</h1>
                    </MenuItem>
                   
                    {product.options.map((option, index) => (
                        <MenuItem key={index} value={option.text}>
                            {option.text}
                        </MenuItem>
                    ))}
                </Select>

            </Grid>




            <Grid size={12} sx={{
                border: 1
            }}>
                <h1>Product Specifications</h1>
            </Grid>
            <Grid size={12} sx={{
                border: 1
            }}>
                <h1>Product Description</h1>
            </Grid>
        </Grid>
    )
}

export default ProductPage
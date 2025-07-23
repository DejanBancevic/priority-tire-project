import { Box, Button, Grid, Typography } from '@mui/material'
import PromoFirst from "../../public/promotions/Priority_Tire_First_Time_Buyer_discount.jpg";
import PromoSecond from "../../public/promotions/Priority_Tire_Special_Discounts.jpg";
import PromoThird from "../../public/promotions/Priority_Tire_Clearance_deals.jpg";
import React from 'react'
import Image from "next/image";

const PromotionsComp = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "middle"
        }}>

            <Typography
                variant="h5"
                align="center"
                fontWeight="bold"
                color="text.primary"
            >
                Save Now With Our Promotions
            </Typography>

            <Grid container
                color="black"
                justifyContent="center"
                padding={2}
                paddingX={{ xs: 2, md: 20 }}
                gap={{ xs: 3, sm: 3, md: 0, lg: 4 }}
            >
                <Grid  >
                    <Box
                        sx={{
                            position: "relative",
                            gap: 1,
                            alignItems: { xs: "center", md: "flex-start" },
                            minHeight: { xs: 340, md: 400 },
                            minWidth: { xs: 340, md: 400 },
                        }}
                    >
                        <Image
                            src={PromoFirst}
                            alt="Promo Image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <Box
                            bgcolor={"#FFB634"}
                            sx={{
                                position: "absolute",
                                bottom: 40,
                                width: "80%",
                                p: 2,
                                textAlign: "start",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            }}

                        >
                            <Typography variant="h6" fontWeight="bold">
                                First Time Buyer
                            </Typography>
                            <Typography variant="h4" fontWeight="bold">
                                $5 OFF
                            </Typography>
                            <Box
                                sx={{
                                    border: '1px solid',
                                    borderRadius: 1,
                                    p: 2,
                                }}
                            >
                                <Typography>
                                    Copy Coupon Code: <strong>FIRST5</strong>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid>
                    <Box
                        sx={{
                            position: "relative",
                            gap: 1,
                            alignItems: { xs: "center", md: "flex-start" },
                            minHeight: { xs: 340, md: 400 },
                            minWidth: { xs: 340, md: 400 },
                        }}
                    >
                        <Image
                            src={PromoSecond}
                            alt="Promo Image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <Box
                            bgcolor={"#FFB634"}
                            sx={{
                                position: "absolute",
                                bottom: 40,
                                width: "80%",
                                p: 2,
                                textAlign: "start",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            }}

                        >
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                5% DISCOUNT FOR
                            </Typography>

                            <Box component="ul" sx={{ listStyleType: 'disc', pl: 4, fontWeight: 'bold', }}>
                                <li>Military</li>
                                <li>Teachers</li>
                                <li>First responders</li>
                                <li>Medical staff</li>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
                <Grid >
                    <Box
                        sx={{
                            position: "relative",
                            gap: 1,
                            alignItems: { xs: "center", md: "flex-start" },
                            minHeight: { xs: 340, md: 400 },
                            minWidth: { xs: 340, md: 400 },
                        }}
                    >
                        <Image
                            src={PromoThird}
                            alt="Promo Image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <Button

                            sx={{
                                position: "absolute",
                                width: 160,
                                bottom: 40,
                                left: 60,
                                bgcolor: "#FFB634",
                                color: "#231f20",
                                fontWeight: "bold",
                            }}

                        >
                            SHOP NOW
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}

export default PromotionsComp
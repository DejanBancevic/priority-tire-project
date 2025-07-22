import { Box, Button, Grid } from '@mui/material'
import PromoFirst from "../../public/promotions/Priority_Tire_First_Time_Buyer_discount.jpg";
import PromoSecond from "../../public/promotions/Priority_Tire_Special_Discounts.jpg";
import PromoThird from "../../public/promotions/Priority_Tire_Clearance_deals.jpg";
import React from 'react'
import Image from "next/image";

const PromotionsComp = () => {
    return (
        <div className='flex flex-col justify-center align-middle'>

            <h1 className='text-2xl text-black font-bold text-center'>
                Save Now With Our Promotions
            </h1>

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
                            alt="Priority Tire First Time Buyer discount"
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
                            <p className='font-bold text-xl'>First Time Buyer</p>
                            <p className='font-bold text-4xl'>$5 OFF</p>
                            <p className='border rounded-md p-4'>Copy Coupon Code: FIRST5</p>
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
                            alt="Priority Tire First Time Buyer discount"
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
                            <p className='font-bold text-xl'>5% DISCOUNT FOR</p>
                            <ul className="list-disc pl-4 font-bold">
                                <li>Military</li>
                                <li>Teachers</li>
                                <li>First reponders</li>
                                <li>Medical staff</li>
                            </ul>
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
                            alt="Priority Tire First Time Buyer discount"
                            layout="fill"
                            objectFit="cover"
                        />
                        <Button

                            sx={{
                                position: "absolute",
                                width: 160,
                                bottom: 40,
                                left:60,
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

        </div>
    )
}

export default PromotionsComp
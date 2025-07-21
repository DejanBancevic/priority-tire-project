import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Footer() {

    return (
        <Grid container
            color="white"
            bgcolor="#231f20"
            justifyContent="center"
            padding={2}
            paddingX={{ xs: 2, md: 20 }}
            gap={{ xs: 3, sm: 3, md: 0, lg: 10 }}
            zIndex={2000}
        >
            <Grid  >
                <Box display="flex" flexDirection="column" gap={1}  alignItems={{ xs: "center", md: "flex-start" }}>
                    <h2>Customer</h2>
                    <a href=''>My Account</a>
                    <a href=''>Track My Order</a>
                    <a href=''>Membership Benefits</a>
                </Box>
            </Grid>
            <Grid>
                <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-start" }}>
                    <h2>Shopping Information</h2>
                    <a href=''>Deals</a>
                    <a href=''>Tire Rebates</a>
                    <a href=''>FAQs</a>
                    <a href=''>Shipping Info</a>
                    <a href=''>Financing Info</a>
                </Box>
            </Grid>
            <Grid >
                <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-start" }}>                    <h2>Warehouse Locations</h2>
                    <a href=''>1436 Eck Rd. Allentown, PA 18104</a>
                    <a href=''>500 Airline Dr. Suite 20 Coppell, TX 75019</a>
                    <a href=''>1750 Airport Rd STE 102 Jacksonville, FL 32218</a>
                </Box>
            </Grid>
            <Grid >
                <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-start" }}>                    <h2>Work with Us</h2>
                    <a href=''>Become a Dealer</a>
                    <a href=''>Join Installer Program</a>
                    <a href=''>Join Affiliate Program</a>
                    <a href=''>Help Center</a>
                </Box>
            </Grid>
        </Grid>
    )
}

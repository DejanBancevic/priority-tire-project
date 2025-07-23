import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
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
                <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-start" }}>
                    <Typography variant="h6" fontWeight="bold" >
                        Customer
                    </Typography>
                    <Link href="/" >
                        My Account
                    </Link>
                    <Link href="/" >
                        Track My Order
                    </Link>
                    <Link href="/" >
                        Membership Benefits
                    </Link>
                </Box>
            </Grid>
            <Grid>
                <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-start" }}>
                    <Typography variant="h6" fontWeight="bold" >
                        Shopping Information
                    </Typography>
                    <Link href="/" >
                        Deals
                    </Link>
                    <Link href="/" >
                        Tire Rebates
                    </Link>
                    <Link href="/" >
                        FAQs
                    </Link>
                    <Link href="/" >
                        Shipping Info
                    </Link>
                    <Link href="/" >
                        Financing Info
                    </Link>
                </Box>
            </Grid>
            <Grid >
                <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-start" }}>
                    <Typography variant="h6" fontWeight="bold" >
                        Warehouse Locations
                    </Typography>
                    <Link href="/" >
                        1436 Eck Rd. Allentown, PA 18104
                    </Link>
                    <Link href="/" >
                        500 Airline Dr. Suite 20 Coppell, TX 75019
                    </Link>
                    <Link href="/" >
                        1750 Airport Rd Jacksonville, FL 32218
                    </Link>
                </Box>
            </Grid>
            <Grid >
                <Box display="flex" flexDirection="column" gap={1} alignItems={{ xs: "center", md: "flex-start" }}>
                    <Typography variant="h6" fontWeight="bold" >
                        Work with Us
                    </Typography>
                    <Link href="/" >
                        Become a Dealer
                    </Link>
                    <Link href="/" >
                        Join Installer Program
                    </Link>
                    <Link href="/" >
                        Join Affiliate Program
                    </Link>
                    <Link href="/" >
                        Help Center
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}

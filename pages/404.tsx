import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Custom404 = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign={"center"}
      gap={3}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3rem",
          },
        }}
      >
        404 - Page Not Found
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem",
          },
        }}
        >
        The page you are looking for does not exist.
      </Typography>

      <Link href="/" color="primary" >
        Go back to Home
      </Link>
    </Box>
  )
}

export default Custom404
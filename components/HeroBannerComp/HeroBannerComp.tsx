import { Box } from '@mui/material'
import React from 'react'
import Image from "next/image";
import heroBanner from "../../public/heroBanner.webp";

const HeroBannerComp = () => {
  return (
      <div className=" overflow-hidden">
          <Box
              sx={{
                  transform: { xs: "scale(2.3)", md: "scale(1)" },
                  width: "100%",
              }}
          >
              <Image
                  src={heroBanner}
                  alt="Hero Banner"
                  style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                  }}
              />
          </Box>
      </div>
  )
}

export default HeroBannerComp
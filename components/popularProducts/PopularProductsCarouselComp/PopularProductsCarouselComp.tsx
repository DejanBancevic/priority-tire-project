import { Box, Button, Card, Typography } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import Image from "next/image";
import { PopularProductsCarouselCard } from '../PopularProductsComp/PopularProductsComp';
import { useRouter } from 'next/router';

type PopularProductsCarouselCompProps = {
    cards: PopularProductsCarouselCard[];
};

const PopularProductsCarouselComp = ({ cards }: PopularProductsCarouselCompProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        containScroll: "trimSnaps",
        align: "start"
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    const router = useRouter();

    return (
      <div className="relative w-full md:px-20 px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ">
            {cards.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-[330px] max-w-[330px] min-h-[330px]
                             max-h-[400px] px-2 "
              >
                <Card
                  onClick={() => router.push(`/product/${product.id}`)}
                  key={index}
                  sx={{
                    bgcolor: "#ebedf0",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "99%",
                    "&:hover": {
                        boxShadow: 10, 
                    
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    sx={{ width: "100%", height: 180, position: "relative" }}
                  >
                    <Image src={product.image} alt={product.title} fill />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#231f20",
                      textAlign: "center",
                      px: 2,
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FFB634",
                      textAlign: "center",
                      mb: 2,
                      fontWeight: "bold",
                      letterSpacing: 2,
                      fontFamily: "monospace",
                    }}
                  >
                    {product.price}
                  </Typography>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={scrollPrev}
          sx={{
            position: "absolute",
            left: 20,
            top: 120,
            bgcolor: "#FFB634",
            color: "#231f20",
            fontWeight: "bold",
            py: 1,
            mb: 2,
            "&:hover": { bgcolor: "#e6a900" },
          }}
        >
          &lt;
        </Button>

        <Button
          onClick={scrollNext}
          sx={{
            position: "absolute",
            right: 20,
            top: 120,
            bgcolor: "#FFB634",
            color: "#231f20",
            fontWeight: "bold",
            py: 1,
            mb: 2,
            "&:hover": { bgcolor: "#e6a900" },
          }}
        >
          &gt;
        </Button>
      </div>
    );
}

export default PopularProductsCarouselComp
import { Box, Button, Card, Typography } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import { ProductItemsFragment,} from '@/graphql/generated';
import nokian from "../../../public/rebates/Nokian-save1-200.jpg";

type PopularProductsCarouselCompProps = {
  products: ProductItemsFragment;
};

const PopularProductsCarouselComp = ({ products }: PopularProductsCarouselCompProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        containScroll: "trimSnaps",
        align: "start"
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    const router = useRouter();

    return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          px: { xs: 1, md: 5 },
        }}
      >
        <Box
          sx={{ overflow: "hidden" }}
          ref={emblaRef}
        >
          <Box
            sx={{ display: "flex" }}
          >
            {products?.items?.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-[330px] max-w-[330px] min-h-[330px]
                             max-h-[400px] px-2 "
              >
                <Card
                  onClick={() => router.push(`/product/${product?.sku}`)}
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
                    sx={{ width: "100%", height: 200, position: "relative", bgcolor: "#f8f8f8"}}
                  >
                    <Image src={product?.image?.url ?? nokian} alt={product?.name ?? "Product Image"} fill objectFit='contain' />
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
                    {product?.name}
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
                    {"$" + product?.price?.regularPrice?.amount?.value }
                  </Typography>
                </Card>
              </div>
            ))}
          </Box>
        </Box>

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
      </Box>
    );
}

export default PopularProductsCarouselComp
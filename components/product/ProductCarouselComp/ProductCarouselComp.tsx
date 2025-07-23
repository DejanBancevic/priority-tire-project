import { Box, Button, Card,  } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import Image from "next/image";
import { ProductCarouselCompCard } from "@/pages/product/[id]";
import type { StaticImageData } from "next/image";

type ProductCarouselCompProps = {
  cards: ProductCarouselCompCard[];
};

const ProductCarouselComp = ({ cards }: ProductCarouselCompProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [selectedImage, setSelectedImage] = useState<StaticImageData>(
    cards[0].image
  );

  return (
    <div className="flex flex-col justify-center">
      <Card
        sx={{
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            aspectRatio: "5 / 3",
            position: "relative"
          }}>
          <Image src={selectedImage} alt={"Product image"} fill />
        </Box>
      </Card>

      <div className="relative w-full md:px-12 px-20 mt-2">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ">
            {cards.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-w-[130px] max-w-[130px] min-h-[80px]
                             max-h-[80px] px-2 "
              >
                <Card
                  onClick={() => setSelectedImage(product.image)}
                  key={index}
                  sx={{
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "99%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 180,
                      position: "relative"
                    }}
                  >
                    <Image src={product.image} alt={product.title} fill />
                  </Box>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={scrollPrev}
          sx={{
            width: 40,
            height: 30,
            minWidth: 0,
            padding: 0,
            position: "absolute",
            left: 0,
            top: 20,
            bgcolor: "#FFB634",
            color: "#231f20",
            fontWeight: "bold",
          }}
        >
          &lt;
        </Button>

        <Button
          onClick={scrollNext}
          sx={{
            width: 40,
            height: 30,
            minWidth: 0,
            padding: 0,
            position: "absolute",
            right: 0,
            top: 20,
            bgcolor: "#FFB634",
            color: "#231f20",
            fontWeight: "bold",
          }}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default ProductCarouselComp;

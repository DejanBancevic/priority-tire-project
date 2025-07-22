import { Box, Button, Card, Typography } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import Image from "next/image";
import { RebatesCarouselCard } from '../RebatesComp/RebatesComp';

type RebatesCarouselCompProps = {
    cards: RebatesCarouselCard[];
};

const RebatesCarouselComp = ({ cards }: RebatesCarouselCompProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        containScroll: "trimSnaps",
        align: "start"
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <div className="relative w-full md:px-20 px-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex ">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 min-w-[330px] max-w-[330px] min-h-[330px]
                             max-h-[400px] px-2 "
                        >
                            <Card
                                key={index}
                                sx={{
                                    bgcolor: "#ebedf0",
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    height: "99%",

                                }}
                            >
                                <Box sx={{ width: "100%", height: 180, position: "relative" }}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                    />
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
                                    {item.title}
                                </Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: "#FFB634",
                                        fontWeight: "bold",
                                        borderRadius: 5,
                                        px: 4,
                                        py: 1,
                                        mb: 2,
                                    }}
                                >
                                    VIEW OFFER &gt;
                                </Button>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#231f20",
                                        textAlign: "center",
                                        mb: 2,
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Card>
                        </div>
                    ))
                    }

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

        </div >
    )
}

export default RebatesCarouselComp
import React from "react";
import { Table, TableBody, TableCell, TableRow, TableContainer, Paper, Box, Typography, } from "@mui/material";
import { SpecData } from "@/pages/product/[id]";

type ProductSpecCompProps = {
    specs: SpecData[];
};

const ProductSpecComp = ({ specs}: ProductSpecCompProps) => {

    return (
        <Box sx={{ mt: 3 }}>

            <Typography
                sx={{
                    fontWeight: "bold",
                    textAlign: "start",
                    fontSize: 25,
                }}
            >
                Product Specifications
            </Typography>

            <Box
                sx={{
                    columnCount: { xs: 1, md: 2 },
                    columnGap: 4,
                    my: 3,
                    borderTop: 1,
                    borderColor: "#e8e7e3",
                    pt: 3,
                }}
            >
                {specs.map((spec, index) => (
                    <Box
                        key={index}
                        sx={{
                            py: 1.5,
                            px: 2,
                            backgroundColor: index % 2 === 0 ? "#f7f7f7" : "#edece8",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography fontWeight="bold">
                            {spec.label}
                        </Typography>
                        <Typography>
                            {spec.value}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );

};

export default ProductSpecComp;

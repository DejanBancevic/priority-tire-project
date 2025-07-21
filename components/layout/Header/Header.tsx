import React, { useState } from 'react'
import Image from "next/image";
import headerLogo from "../../../public/headerLogo.webp";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SubCategories from './SubCategories/SubCategories';
import Categories from '../Categories/Categories';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {

    const theme = useTheme();
    const mediaAdapter = useMediaQuery(theme.breakpoints.down("md"));
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showCategoriesBar, setShowCategoriesBar] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showSubCatBar, setShowSubCatBar] = useState(false);
    const router = useRouter();

    const categories = [
        { name: "Tires", prod: "20" },
        { name: "Accessories", prod: "12" },
        { name: "Brands", prod: "23" },
        { name: "Offers", prod: "33" },
    ];

    return (
        <div>

            {mediaAdapter ? (
                <div className='flex flex-col '>
                    <div className='flex justify-between items-center h-16 px-2 bg-white z-[1000]'>

                        <button onClick={() => setShowCategoriesBar((showCategoriesBar) => !showCategoriesBar)}>
                            <MenuOutlinedIcon style={{ color: '#231f20' }} />
                        </button>

                        <button onClick={() => setShowSearchInput((showSearchInput) => !showSearchInput)}>
                            <SearchOutlinedIcon style={{ color: '#231f20' }} />
                        </button>


                        <Image
                            src={headerLogo}
                            alt="Header Logo"
                            width={150}
                            onClick={() => router.push('/')}
                        />


                        <div className='flex items-center gap-4'>
                            <PersonOutlineOutlinedIcon style={{ color: '#231f20' }} />
                            <FavoriteBorderOutlinedIcon style={{ color: '#231f20' }} />
                            <ShoppingCartOutlinedIcon style={{ color: '#231f20' }} />
                        </div>

                    </div>

                    {showSearchInput && (
                        <input
                            type="text"
                            placeholder="Search Tires & Accessories"
                            className=" bg-white px-4 py-2 w-full outline-none text-gray-800 z-[1000]"
                        />
                    )}

                    {showCategoriesBar && (
                        <Categories
                            categories={categories}
                            setSelectedCategory={setSelectedCategory}
                            setShowSubCatBar={setShowSubCatBar}
                        />
                    )}

                    {selectedCategory && showSubCatBar && (
                        <SubCategories
                            category={selectedCategory}
                            setShowSubCatBar={setShowSubCatBar}
                        />
                    )}
                </div>

            ) : (
                <div className='flex flex-col '>
                    <div className='flex justify-between items-center h-16 md:px-10 px-2 bg-white z-[1000]'>
                        <Image src={headerLogo} alt="headerLogo" className="" />

                        <Box
                            display={"flex"}
                            alignItems="center"
                            gap={2}
                            border={"1px solid #231f20"}
                            borderRadius={1}
                            p={1}
                            width={"400px"}
                        >
                            <SearchOutlinedIcon style={{ color: '#231f20' }} />
                            <input
                                type="text"
                                placeholder="Search Tires & Accessories"
                                className="w-full bg-transparent outline-none text-gray-800"
                            />
                        </Box>

                        <div className='flex items-center gap-4'>
                            <PersonOutlineOutlinedIcon style={{ color: '#231f20' }} />
                            <FavoriteBorderOutlinedIcon style={{ color: '#231f20' }} />
                            <ShoppingCartOutlinedIcon style={{ color: '#231f20' }} />
                        </div>
                    </div>

                    <Categories
                        categories={categories}
                        setSelectedCategory={setSelectedCategory}
                        setShowSubCatBar={setShowSubCatBar}
                    />

                    {selectedCategory && showSubCatBar && (
                        <SubCategories
                            category={selectedCategory}
                            setShowSubCatBar={setShowSubCatBar}
                        />
                    )}

                </div>

            )}

        </div>

    )
}

import { Button } from '@mui/material';
import React, { useState } from 'react'


type SubCategoriesProps = {
    category: string;
    setShowSubCatBar: (show: boolean) => void;
}


export default function SubCategories({ category, setShowSubCatBar }: SubCategoriesProps) {

    const subCategories = [
        { name: "Tires", prod: "20" },
        { name: "Accessories", prod: "12" },
        { name: "Brands", prod: "23" },
        { name: "Offers", prod: "33" },
    ];

    return (
        <div className='flex flex-col '>
            <div className='md:flex sm:flex-col justify-center items-center md:gap-4 pl-6 h-12 border-t border-gray-300 bg-white  w-full z-[1000] '>
                {
                    subCategories.map((subCategory, index) => (
                        <Button key={index}
                            onClick={() => console.log(`Clicked on ${subCategory.name}`)}
                            style={{ color: '#231f20', fontSize: '14px', }}
                        >
                            {subCategory.name}
                            <span className='text-gray-500 ml-1'>
                                ({subCategory.prod})
                            </span>
                        </Button>
                    ))
                }
            </div>

            <div
                className="fixed inset-0 z-[800] bg-black opacity-35 "
                onClick={() => {
                    setShowSubCatBar(false);   
                }}
            />
        </div>
    )
}

import { Button } from '@mui/material';
import React from 'react'

type CategoriesProps = {
    categories: Category[];
    setSelectedCategory : (category: string) => void;
    setShowSubCatBar: (show: boolean) => void;
}

type Category = {
    name: string;
    prod: string;
};

export default function Categories({ categories, setSelectedCategory, setShowSubCatBar }: CategoriesProps) {
  return (
      <div className='md:flex sm:flex-col items-center pl-6 md:h-12 border-t border-gray-300 bg-white z-[1000]'>
            {
                categories.map((category, index) => (
                    <Button
                        key={index}
                        onClick={() => {
                            setSelectedCategory(category.name);
                            setShowSubCatBar(true);
                        }}
                        style={{ color: '#231f20', fontSize: '14px' }}
                    >
                        {category.name}
                        <span className='text-gray-500 ml-1'>
                            ({category.prod})
                        </span>
                    </Button>
                ))
            }

        </div>
    )
}

import React, { useEffect, useState } from "react";
import Image from "next/image";
import headerLogo from "../../../public/headerLogo.webp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Button, InputBase, useMediaQuery, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SubCategories from "./SubCategories/SubCategories";
import Categories from "./Categories/Categories";
import { useRouter } from "next/router";
import { client } from "@/lib/graphqlClient";
import { GET_CATEGORIES } from "@/lib/queries";
import fetchCategories from "@/lib/fetchCategories";

export default function Header() {
  const theme = useTheme();
  const mediaAdapter = useMediaQuery(theme.breakpoints.down("md"));
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showCategoriesBar, setShowCategoriesBar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSubCatBar, setShowSubCatBar] = useState(false);
  const router = useRouter();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCat() {
      try {
        const res = await fetch("/api/categories");
        const json = await res.json();

        console.log("Categories:", json);

        const data: any = json.categories.items.slice(17, 20);

        console.log("Categories:", data);
        setCategories(data);
      } catch (error) {
        console.error("fetching categories failed", error);
      }
    }
    fetchCat();

    async function fetchSubCat(id: string) {
      try {
        const res = await fetch(`/api/subCategories?parentCategoryId=${id}`);
        const json = await res.json();

        console.log("subCategories:", json);

        //const data: any = json.categories.items.slice(0, 2);

        //console.log("SubCategories:", data);
      } catch (error) {
        console.error("fetching categories failed", error);
      }
    }
    fetchSubCat("108");
  }, []);

  return (
    <div>
      {mediaAdapter ? (

        <Box sx={{ display: 'flex', flexDirection: 'column', borderBottom: 1, borderColor: 'divider' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 64,
              px: 2,
              bgcolor: 'white',
              zIndex: 1000,
            }}
          >
            <Button
              sx={{
                padding: 0,   
                minWidth: 0,   
              }}
              onClick={() =>
                setShowCategoriesBar((showCategoriesBar) => !showCategoriesBar)
              }
            >
              <MenuOutlinedIcon style={{ color: "#231f20" }} />
            </Button>

            <Button
              sx={{
                padding: 0,
                minWidth: 0,
              }}
              onClick={() =>
                setShowSearchInput((showSearchInput) => !showSearchInput)
              }
            >
              <SearchOutlinedIcon style={{ color: "#231f20" }} />
            </Button>

            <Image
              src={headerLogo}
              alt="Header Logo"
              width={150}
              onClick={() => router.push("/")}
            />

            <Box display={"flex"} alignItems={"center"} gap={1}>
              <PersonOutlineOutlinedIcon style={{ color: "#231f20" }} />
              <FavoriteBorderOutlinedIcon style={{ color: "#231f20" }} />
              <ShoppingCartOutlinedIcon style={{ color: "#231f20" }} />
            </Box>
          </Box>

          {showSearchInput && (
            <InputBase
              placeholder="Search Tires & Accessories"
              fullWidth
              sx={{
                bgcolor: 'white',
                px: 2,      
                py: 1,       
                outline: 'none',
                zIndex: 1000,
              }}
          />
          )}

          {showCategoriesBar && (
            <Categories
              categories={categories}
              setSelectedCategory={setSelectedCategory}
              setShowSubCatBar={setShowSubCatBar}
            />
          )}

          {/* {selectedCategory && showSubCatBar && (
            <SubCategories
              category={selectedCategory}
              setShowSubCatBar={setShowSubCatBar}
            />
          )} */}
        </Box>
      ) : (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 64,
              px: 4,
              bgcolor: 'white',
              zIndex: 1000,
            }}
          >
            <Image
              src={headerLogo}
              alt="headerLogo"
              className=""
              onClick={() => router.push("/")}
            />

            <Box
              display={"flex"}
              alignItems="center"
              gap={2}
              border={"1px solid #231f20"}
              borderRadius={1}
              p={1}
              width={"400px"}
            >
              <SearchOutlinedIcon style={{ color: "#231f20" }} />
              <InputBase
                placeholder="Search Tires & Accessories"
                fullWidth
              />
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={4}>
              <PersonOutlineOutlinedIcon style={{ color: "#231f20" }} />
              <FavoriteBorderOutlinedIcon style={{ color: "#231f20" }} />
              <ShoppingCartOutlinedIcon style={{ color: "#231f20" }} />
            </Box>

          </Box>

          <Categories
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            setShowSubCatBar={setShowSubCatBar}
          />

          {selectedCategory && showSubCatBar && (
            <SubCategories
              category={selectedCategory}
              setShowSubCatBar={setShowSubCatBar}
              id=""
            />
          )}
        </Box>
      )}
    </div>
  );
}

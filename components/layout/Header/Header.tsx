import React, { useState } from "react";
import Image from "next/image";
import headerLogo from "../../../public/headerLogo.webp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  Button,
  InputBase,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SubCategories from "./SubCategories/SubCategories";
import Categories from "./Categories/Categories";
import {
  CategoryItemsFragment,
} from "@/graphql/generated";

type HeaderProps = {
  categories: CategoryItemsFragment,

};

export default function Header({categories}: HeaderProps) {
  const theme = useTheme();
  const mediaAdapter = useMediaQuery(theme.breakpoints.down("md"));

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showCategoriesBar, setShowCategoriesBar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const [showSubCatBar, setShowSubCatBar] = useState(false);

  return (
    <div className="top-0 sticky flex flex-col left-0 z-[2000]">
      {mediaAdapter ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 64,
              px: 2,
              bgcolor: "white",
              zIndex: 1000,
            }}
          >
            <Button
              sx={{
                padding: 0,
                minWidth: 0,
              }}
              onClick={() => {
                setShowCategoriesBar((showCategoriesBar) => !showCategoriesBar);
                setShowSubCatBar(false);
              }}
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

            <Link href="/">
              <Image src={headerLogo} alt="Header Logo" width={150} />
            </Link>

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
                bgcolor: "white",
                px: 2,
                py: 1,
                outline: "none",
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

          {selectedCategory && showSubCatBar && (
            <SubCategories
              category={categories}
              setShowSubCatBar={setShowSubCatBar}
              id={selectedCategory}
            />
          )}

        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 64,
              px: 4,
              bgcolor: "white",
              zIndex: 1100,
            }}
          >
            <Link href="/">
              <Image src={headerLogo} alt="Header Logo" />
            </Link>

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
              <InputBase placeholder="Search Tires & Accessories" fullWidth />
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
              category={categories}
              setShowSubCatBar={setShowSubCatBar}
              id={selectedCategory}
            />
          )}



        </Box>
      )}
    </div>
  );
}

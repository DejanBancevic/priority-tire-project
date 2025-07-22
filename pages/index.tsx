import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import heroBanner from "../public/heroBanner.webp";
import { client } from "../lib/graphqlClient";
import { GET_PRODUCTS, GET_CATEGORIES } from "../lib/queries";
import { maxHeaderSize } from "http";
import PromotionsComp from "@/components/PromotionsComp/PromotionsComp";
import RebatesComp from "@/components/rebates/RebatesComp/RebatesComp";
import PopularProductComp from "@/components/popularProducts/PopularProductsComp/PopularProductsComp";

export async function getServerSideProps() {
  const data = await client.request(GET_CATEGORIES);

  return {
    props: {
      categories: (data as any).categories?.items,
    },
  };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ categories }: any) {
  if (!categories || !Array.isArray(categories)) {
    return <p>Failed to load categories.</p>;
  }

  return (
    <div
      className={`${geistSans.className} ${geistMono.className}
    bg-white font-sans min-h-screen flex flex-col gap-8 `}
    >

      <Image
        src={heroBanner}
        alt="Hero Banner"
      />

      <RebatesComp />

      <PromotionsComp />

      <PopularProductComp />

      {/* <div className="text-black text-center mb-10">
        <h1>All cats ({categories.length})</h1>
        <ul>
          {categories.map((category, i) => {
            if (!category) return null;

            return (
              <li key={category.id}>
                <strong>{category.name}</strong> — Count{" "}
                {category.product_count}
              </li>
            );
          })}
        </ul>
      </div> */}

    </div>
  );
}

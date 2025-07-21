import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import { client } from "../lib/graphqlClient";
import { GET_PRODUCTS, GET_CATEGORIES } from "../lib/queries";

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
      className={`${geistSans.className} ${geistMono.className} bg-gray-600 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div style={{ padding: "2rem" }}>
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
        </div>
      </main>
    </div>
  );
}

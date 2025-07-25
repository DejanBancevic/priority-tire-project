import Layout from "@/components/layout/Layout";
import { client } from "@/lib/apolloClient";
import "@/styles/globals.css";
import {ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <Layout categories={pageProps.categories}>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

// lib/queries.js
import { gql } from "graphql-request";

export const GET_CATEGORIES = gql`
  {
    categories(filters: {}) {
      items {
        id
        name
        product_count
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    products(search: "") {
      total_count
      items {
        name
        sku
      }
    }
  }
`;

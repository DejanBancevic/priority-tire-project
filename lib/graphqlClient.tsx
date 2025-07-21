import { GraphQLClient } from "graphql-request";

const endpoint = "https://backend.reachdigital.dev/graphql";

export const client = new GraphQLClient(endpoint);

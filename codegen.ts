
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "https://backend.reachdigital.dev/graphql",
  documents: ["./graphql/**/*.graphql"],
  generates: {
    "./graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;

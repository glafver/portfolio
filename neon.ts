import { defineConfig } from "@neon/config/v1";

export default defineConfig({
  functions: {
    api: {
      name: "Portfolio API",
      source: "./functions/api.ts",
      env: {
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!,
        ADMIN_TOKEN: process.env.ADMIN_TOKEN!,
      },
    },
  },
  buckets: {
    assets: { access: "public_read" },
  },
});

export const strapiConfig = {
  apiBaseUrl: `${process.env.STRAPI_BASE_URL ?? "http://localhost:1337"}/api`,
  token: process.env.STRAPI_API_TOKEN ?? "",
  baseUrl: process.env.STRAPI_BASE_URL ?? "http://localhost:1337",
} as const;

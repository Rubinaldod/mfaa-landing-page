export const strapiConfig = {
  apiBaseUrl: `${process.env.STRAPI_BASE_URL ?? ""}/api`,
  token: process.env.STRAPI_API_TOKEN ?? "",
  baseUrl: process.env.STRAPI_BASE_URL ?? "",
} as const;

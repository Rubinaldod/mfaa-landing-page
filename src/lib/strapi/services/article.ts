import { strapiGet } from "../client";
import type { ArticleNoContent } from "../types/article";
import type { StrapiListResponse } from "../types/common";

const EMPTY = <T>(): StrapiListResponse<T> => ({
  data: [],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 0, total: 0 } },
});

export async function getFeaturedArticles(): Promise<StrapiListResponse<ArticleNoContent>> {
  try {
    return await strapiGet<StrapiListResponse<ArticleNoContent>>(
      "/articles",
      {
        populate: "highlightedImage",
        fields: ["title", "description", "publishedAt", "featured"],
        filters: {
          featured: {
            $eq: true,
          },
        },
      },
      { tags: ["article"] },
    );
  } catch {
    return EMPTY<ArticleNoContent>();
  }
}

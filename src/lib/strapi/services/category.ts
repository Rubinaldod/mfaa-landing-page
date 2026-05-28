import { strapiGet } from "../client";
import type { Category } from "../types/category";
import type { StrapiListResponse } from "../types/common";

const EMPTY = <T>(): StrapiListResponse<T> => ({
  data: [],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 0, total: 0 } },
});

export async function getCategories(): Promise<StrapiListResponse<Category>> {
  try {
    return await strapiGet<StrapiListResponse<Category>>(
      "/categories",
      { sort: "Name" },
      { tags: ["category"] },
    );
  } catch {
    return EMPTY<Category>();
  }
}

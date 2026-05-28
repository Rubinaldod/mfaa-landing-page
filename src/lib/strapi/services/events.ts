import { strapiGet } from "../client";
import type { StrapiListResponse } from "../types/common";
import type { Event } from "../types/event";

const EMPTY = <T>(): StrapiListResponse<T> => ({
  data: [],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 0, total: 0 } },
});

export async function getNextEvents(): Promise<StrapiListResponse<Event>> {
  try {
    return await strapiGet<StrapiListResponse<Event>>(
      "/events",
      {
        sort: "startDate",
        populate: ["image"],
        filters: {
          startDate: {
            $gt: new Date().toISOString(),
          },
        },
      },
      { tags: ["event"], revalidate: 60 },
    );
  } catch {
    return EMPTY<Event>();
  }
}

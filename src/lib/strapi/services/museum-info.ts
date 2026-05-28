import { StrapiError, strapiGet } from "../client";
import type { StrapiListResponse, StrapiResponse } from "../types/common";
import type {
  Contact,
  HeroSection,
  ImportantInfo,
  OpeningHours,
} from "../types/museum-info";

// Strapi Single Types return 404 when no content has been published yet.
// All functions here return null (single types) or an empty list (collection
// types) on 404, so pages never crash due to missing CMS content.

const EMPTY_LIST = <T>(): StrapiListResponse<T> => ({
  data: [],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 0, total: 0 } },
});

export async function getHeroSectionData(): Promise<StrapiResponse<HeroSection> | null> {
  try {
    return await strapiGet<StrapiResponse<HeroSection>>(
      "/hero-section",
      { populate: "backgroundImage" },
      { tags: ["hero-section"] },
    );
  } catch (err) {
    if (err instanceof StrapiError && err.status === 404) return null;
    throw err;
  }
}

export async function getContact(): Promise<StrapiResponse<Contact> | null> {
  try {
    return await strapiGet<StrapiResponse<Contact>>("/contact", undefined, {
      tags: ["contact"],
    });
  } catch (err) {
    if (err instanceof StrapiError && err.status === 404) return null;
    throw err;
  }
}

export async function getImportantInfo(): Promise<StrapiListResponse<ImportantInfo>> {
  try {
    return await strapiGet<StrapiListResponse<ImportantInfo>>(
      "/important-infos",
      { sort: "createdAt" },
      { tags: ["important-info"] },
    );
  } catch (err) {
    if (err instanceof StrapiError && err.status === 404) return EMPTY_LIST<ImportantInfo>();
    throw err;
  }
}

export async function getOpeningHours(): Promise<StrapiListResponse<OpeningHours>> {
  try {
    return await strapiGet<StrapiListResponse<OpeningHours>>(
      "/openning-hours",
      undefined,
      { tags: ["opening-hours"] },
    );
  } catch (err) {
    if (err instanceof StrapiError && err.status === 404) return EMPTY_LIST<OpeningHours>();
    throw err;
  }
}

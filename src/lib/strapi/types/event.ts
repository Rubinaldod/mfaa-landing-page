import type { StrapiImage } from "./common";

export type Event = {
  title: string;
  description: string;
  location: string | null;
  startDate: string;
  endDate: string;
  image?: StrapiImage;
};

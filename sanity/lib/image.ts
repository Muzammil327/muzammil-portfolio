import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { projectId, dataset } from "./client";

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
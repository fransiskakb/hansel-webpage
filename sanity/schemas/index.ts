import { allDocuments } from "./documents";
import { allBlocks } from "./blocks";
import { seo, cta, portableText } from "./objects";

export const schemaTypes = [
  seo,
  cta,
  portableText,
  ...allBlocks,
  ...allDocuments,
];

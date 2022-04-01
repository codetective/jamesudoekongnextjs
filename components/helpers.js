import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

export const localUrl = "http://localhost/charity";

export function convertContentFromJSONToHTML(text) {
  let blocks = JSON.parse(text);
  return stateToHTML(convertFromRaw(blocks));
}

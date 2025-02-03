import { cleanString } from "./string";

export function addImageToJson(data, url) {
  const list = data.map((item) => {
    const imageName = cleanString(item.name, "_");
    const image = `/${url}/${imageName}.webp`;
    return { ...item, image: image };
  });
  return list;
}

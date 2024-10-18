import { CustomError } from "./error";

interface Product {
  id: number;
  name: string;
}

const map: Map<number, Product> = new Map([
  [1, { id: 1, name: "iPhone 16 Pro Max" }],
  [2, { id: 2, name: "Mac studio" }],
  [3, { id: 3, name: "iMac" }],
]);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProduct(id: Product["id"]) {
  await delay(500);

  if (!map.has(id)) {
    throw new CustomError("Product not found");
  }

  return map.get(id);
}

export const successProductTitle = (terminalWidth: number) => {
  const text = "**** 상품정보 ";
  const overLineDeleteCount = 4;
  const remainingWidth = terminalWidth - text.length - overLineDeleteCount;
  const line = text + "*".repeat(remainingWidth);
  return line;
};

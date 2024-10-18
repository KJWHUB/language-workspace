interface Product {
  id: number;
  name: string;
}

const map: Map<number, Product> = new Map([
  [1, { id: 1, name: "Product 1" }],
  [2, { id: 2, name: "Product 2" }],
  [3, { id: 3, name: "Product 3" }],
]);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProduct(id: Product["id"]) {
  await delay(500);

  if (!map.has(id)) {
    throw new Error("Product not found");
  }

  return map.get(id);
}

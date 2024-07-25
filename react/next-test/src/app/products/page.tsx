import { Card } from "@/components/ui/card";

import Image from "next/image";
import type { CSSProperties } from "react";

const imageClasses = `object-cover w-40 h-40 rounded-full border-2 border-gray-200 mb-4`;
const descriptionStyle: CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

async function fetchProducts(): Promise<
  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[]
> {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

export default async function Products() {
  const products = await fetchProducts();

  return (
    <main>
      {/* list */}

      <div className="flex flex-wrap justify-between items-center">
        {products.map((product) => (
          <div key={product.id} className="w-1/4 p-4">
            <Card className="w-full p-6  hover:bg-blue-50 transition-all">
              <div className="flex flex-col items-center">
                <Image src={product.image} alt={product.title} width={100} height={100} className={imageClasses} />
                <p className="text-gray-500 my-3">{product.price}$</p>
                <h2 className="w-full text-xl font-bold truncate">{product.title}</h2>
                <p className="w-full text-gray-500" style={descriptionStyle}>
                  {product.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

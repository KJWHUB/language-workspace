"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  //

  const list = Array.from({ length: 10 })
    .map((_, index) => ({
      id: index,
      title: `Product ${index + 1}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      price: 100 * (index + 1),
      image: `https://picsum.photos/seed/${index + 1}/400/400`,
    }))
    .map((product) => (
      <CarouselItem key={product.id} className="basis-1/5">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ));
  return (
    <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
      <CarouselContent>{list}</CarouselContent>
    </Carousel>
  );
}

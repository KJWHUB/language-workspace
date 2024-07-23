import { CarouselPlugin } from "@/components/CarouselPlugin";
import { Card, CardContent } from "@/components/ui/card";

function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen p-24">
      <div className="relative w-full">
        <div className=" absolute top-0 left-0 w-full blur-md">
          <CarouselPlugin />
        </div>
      </div>
      <Card className="relative  bg-transparent my-11 text-white ">
        <CardContent className="py-6">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </CardContent>
      </Card>

      {children}
    </div>
  );
}

export default ProductsLayout;

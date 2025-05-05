
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductGallery } from "@/components/ProductGallery";
import { products } from "@/data/products";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const { translate } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = ["All", ...new Set(products.map(product => product.category))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory && selectedCategory !== "All"
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">
            {translate("products.title")}
          </h1>
          
          {/* Categories */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category === "All" ? null : category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Products */}
          <ProductGallery products={filteredProducts} />
        </div>
      </main>
      
      {/* Footer (Simple version) */}
      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Blessed Threads Emporium. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;

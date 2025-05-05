
import { useState } from "react";
import { ProductCard, Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { LayoutGrid, LayoutList } from "lucide-react";

interface ProductGalleryProps {
  products: Product[];
  title?: string;
}

export function ProductGallery({ products, title }: ProductGalleryProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { translate } = useLanguage();
  
  return (
    <div className="space-y-4">
      {title && <h2 className="text-2xl font-serif">{title}</h2>}
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{translate("products.view")}:</span>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            className="h-8 w-8"
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">{translate("products.grid")}</span>
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            className="h-8 w-8"
          >
            <LayoutList className="h-4 w-4" />
            <span className="sr-only">{translate("products.list")}</span>
          </Button>
        </div>
      </div>
      
      <div className={viewMode === "grid" ? "grid-view" : "list-view"}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}

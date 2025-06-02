
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Eye, ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

export function ProductCard({ product, viewMode }: ProductCardProps) {
  const { translate } = useLanguage();
  
  return (
    <div className={`product-card group ${viewMode === "list" ? "flex flex-row h-32 md:h-40" : ""}`}>
      <div className={`product-img-container ${viewMode === "list" ? "w-32 md:w-40 h-full" : ""}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
        />
        {viewMode === "grid" && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {/* <Button size="sm" variant="secondary" className="rounded-full">
              <Eye className="h-4 w-4 mr-1" />
              <span className="text-xs">{translate("products.quickView")}</span>
            </Button> */}
          </div>
        )}
      </div>
      
      <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
        <div>
          <h3 className="font-medium text-sm mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-xs mb-2">{product.category}</p>
        </div>
        
        <div className="flex items-center justify-between">
          {/* <p className="font-semibold">${product.price.toFixed(2)}</p> */}
          {/* <Button size="sm" variant="outline">
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span className="text-xs hidden md:inline">{translate("products.addToCart")}</span>
          </Button> */}
        </div>
      </div>
    </div>
  );
}

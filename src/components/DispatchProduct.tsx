import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { getProducts, dispatchProduct } from "@/lib/storage";
import { Product } from "@/types/product";
import { Truck } from "lucide-react";

const DispatchProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    setProducts(getProducts());
  };

  const handleDispatch = (id: string, name: string) => {
    const success = dispatchProduct(id);
    
    if (success) {
      toast({
        title: "Product dispatched",
        description: `${name} has been marked as dispatched`,
      });
      loadProducts();
    } else {
      toast({
        title: "Cannot dispatch",
        description: "Product not found or out of stock",
        variant: "destructive",
      });
    }
  };

  const availableProducts = products.filter((p) => p.quantity > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dispatch Product</CardTitle>
        <CardDescription>Mark products as dispatched and update inventory</CardDescription>
      </CardHeader>
      <CardContent>
        {availableProducts.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No products available for dispatch</p>
        ) : (
          <div className="space-y-3">
            {availableProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{product.name}</h3>
                    <Badge variant="secondary">{product.category}</Badge>
                    {product.dispatched && (
                      <Badge variant="default">
                        <Truck className="h-3 w-3 mr-1" />
                        Dispatched
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-muted-foreground">Price: ${product.price.toFixed(2)}</span>
                    <span className="text-muted-foreground">Available: {product.quantity}</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleDispatch(product.id, product.name)}
                  disabled={product.quantity === 0}
                  size="sm"
                >
                  <Truck className="h-4 w-4" />
                  Dispatch
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DispatchProduct;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut, ShoppingBag } from "lucide-react";
import AddProduct from "@/components/AddProduct";
import UpdateProduct from "@/components/UpdateProduct";
import DeleteProduct from "@/components/DeleteProduct";
import DispatchProduct from "@/components/DispatchProduct";
import ViewInventory from "@/components/ViewInventory";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-secondary">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-semibold">E-Commerce Admin</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="add">Add Product</TabsTrigger>
            <TabsTrigger value="update">Update</TabsTrigger>
            <TabsTrigger value="delete">Delete</TabsTrigger>
            <TabsTrigger value="dispatch">Dispatch</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory">
            <ViewInventory />
          </TabsContent>

          <TabsContent value="add">
            <AddProduct />
          </TabsContent>

          <TabsContent value="update">
            <UpdateProduct />
          </TabsContent>

          <TabsContent value="delete">
            <DeleteProduct />
          </TabsContent>

          <TabsContent value="dispatch">
            <DispatchProduct />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;

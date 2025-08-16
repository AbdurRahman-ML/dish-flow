import { useState } from "react";
import { Plus, Edit, Trash2, Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import food images
import burgerImage from "@/assets/burger.jpg";
import caesarSaladImage from "@/assets/caesar-salad.jpg";
import salmonImage from "@/assets/salmon.jpg";
import pastaImage from "@/assets/pasta.jpg";

const menuCategories = ["All", "Appetizers", "Main Course", "Desserts", "Beverages"];

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, cheese, and our special sauce",
    price: 14.99,
    category: "Main Course",
    image: burgerImage,
    rating: 4.8,
    prepTime: "15-20 min",
    status: "available",
    isPopular: true
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with parmesan, croutons, and caesar dressing",
    price: 12.99,
    category: "Appetizers",
    image: caesarSaladImage,
    rating: 4.6,
    prepTime: "5-10 min",
    status: "available",
    isPopular: true
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with roasted vegetables and lemon herb sauce",
    price: 24.99,
    category: "Main Course",
    image: salmonImage,
    rating: 4.9,
    prepTime: "20-25 min",
    status: "available",
    isPopular: false
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    description: "Creamy pasta with pancetta, eggs, parmesan, and black pepper",
    price: 16.99,
    category: "Main Course",
    image: pastaImage,
    rating: 4.7,
    prepTime: "12-15 min",
    status: "low-stock",
    isPopular: true
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 8.99,
    category: "Desserts",
    image: null,
    rating: 4.8,
    prepTime: "10-12 min",
    status: "available",
    isPopular: false
  },
  {
    id: 6,
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh lemons and mint",
    price: 4.99,
    category: "Beverages",
    image: null,
    rating: 4.5,
    prepTime: "2-3 min",
    status: "available",
    isPopular: false
  }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge variant="outline" className="border-success text-success">Available</Badge>;
      case "low-stock":
        return <Badge className="bg-warning text-warning-foreground">Low Stock</Badge>;
      case "out-of-stock":
        return <Badge variant="destructive">Out of Stock</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Menu Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your restaurant's menu items and categories.
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Add New Item
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-muted/50"
          />
        </div>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full sm:w-auto">
          <TabsList className="grid grid-cols-5 w-full sm:w-auto">
            {menuCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="glass-card card-hover overflow-hidden">
            <div className="relative">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-card flex items-center justify-center">
                  <span className="text-muted-foreground">No Image</span>
                </div>
              )}
              
              {item.isPopular && (
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}
              
              <div className="absolute top-2 right-2">
                {getStatusBadge(item.status)}
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">${item.price}</span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {item.rating}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.prepTime}
                </div>
                <span className="text-xs uppercase tracking-wider">{item.category}</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <span className="text-6xl">🍽️</span>
          </div>
          <h3 className="text-lg font-medium mb-2">No menu items found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
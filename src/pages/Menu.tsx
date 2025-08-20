import { useState } from "react";
import { Plus, Edit, Trash2, Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Food image URLs - using high-quality food images
const burgerImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center";
const caesarSaladImage = "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&crop=center";
const salmonImage = "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&crop=center";
const pastaImage = "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop&crop=center";
const pastaImageFallback = "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center";
const chocolateCakeImage = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center";
const lemonadeImage = "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop&crop=center";
const pizzaImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center";
const sushiImage = "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&crop=center";
const iceCreamImage = "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center";
const coffeeImage = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&crop=center";

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
    image: chocolateCakeImage,
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
    image: lemonadeImage,
    rating: 4.5,
    prepTime: "2-3 min",
    status: "available",
    isPopular: false
  },
  {
    id: 7,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    price: 18.99,
    category: "Main Course",
    image: pizzaImage,
    rating: 4.7,
    prepTime: "20-25 min",
    status: "available",
    isPopular: true
  },
  {
    id: 8,
    name: "California Roll",
    description: "Fresh avocado, cucumber, and crab with premium sushi rice",
    price: 22.99,
    category: "Appetizers",
    image: sushiImage,
    rating: 4.9,
    prepTime: "8-12 min",
    status: "available",
    isPopular: true
  },
  {
    id: 9,
    name: "Vanilla Ice Cream",
    description: "Creamy vanilla ice cream with chocolate sauce and sprinkles",
    price: 6.99,
    category: "Desserts",
    image: iceCreamImage,
    rating: 4.6,
    prepTime: "2-3 min",
    status: "available",
    isPopular: false
  },
  {
    id: 10,
    name: "Espresso Coffee",
    description: "Rich Italian espresso served with a side of biscotti",
    price: 3.99,
    category: "Beverages",
    image: coffeeImage,
    rating: 4.8,
    prepTime: "1-2 min",
    status: "available",
    isPopular: true
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
                  loading="lazy"
                                     onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     // Try fallback image for pasta
                     if (item.name === "Pasta Carbonara" && target.src !== pastaImageFallback) {
                       target.src = pastaImageFallback;
                     } else {
                       target.style.display = 'none';
                       target.nextElementSibling?.classList.remove('hidden');
                     }
                   }}
                />
              ) : null}
              <div className={`w-full h-48 bg-gradient-card flex items-center justify-center ${item.image ? 'hidden' : ''}`}>
                <span className="text-muted-foreground">No Image</span>
              </div>
              
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
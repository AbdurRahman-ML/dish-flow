import { useState } from "react";
import { Plus, Edit, Trash2, Star, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { menuItems, menuCategories } from "@/data/menuData";

export default function Menu() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[language][0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === menuCategories[language][0] || item.category[language] === selectedCategory;
    const matchesSearch = item.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge variant="outline" className="border-success text-success">{t('available')}</Badge>;
      case "low-stock":
        return <Badge className="bg-warning text-warning-foreground">{t('lowStock')}</Badge>;
      case "out-of-stock":
        return <Badge variant="destructive">{t('outOfStock')}</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-text">{t('menuManagement')}</h1>
          <p className="text-muted-foreground mt-1">
            {t('manageMenuItems')}
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          {t('addNewItem')}
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder={t('searchMenuItems')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-muted/50"
          />
        </div>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full sm:w-auto">
          <TabsList className="grid grid-cols-5 w-full sm:w-auto">
            {menuCategories[language].map((category) => (
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
              <img
                src={item.image}
                alt={item.name[language]}
                className="w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className={`w-full h-48 bg-gradient-card flex items-center justify-center hidden`}>
                <span className="text-muted-foreground">No Image</span>
              </div>
              
              {item.isPopular && (
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  {t('popular')}
                </Badge>
              )}
              
              <div className="absolute top-2 right-2">
                {getStatusBadge(item.status)}
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{item.name[language]}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description[language]}
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">Rs. {item.price}</span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {item.rating}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.prepTime[language]}
                </div>
                <span className="text-xs uppercase tracking-wider">{item.category[language]}</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  {t('edit')}
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
          <h3 className="text-lg font-medium mb-2">{t('noMenuItems')}</h3>
          <p className="text-muted-foreground">
            {t('adjustFilters')}
          </p>
        </div>
      )}
    </div>
  );
}
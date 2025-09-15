import { useState } from "react";
import { Clock, CheckCircle, AlertCircle, ChefHat, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { pakistaniNames, menuItems } from "@/data/menuData";

const orders = [
  {
    id: "#001",
    table: { en: "Table 5", ur: "میز 5" },
    customerName: pakistaniNames[0],
    items: [
      { name: menuItems[0].name, quantity: 2, price: 1200 },
      { name: menuItems[2].name, quantity: 1, price: 600 },
      { name: { en: "Fresh Lime Water", ur: "تازہ لیمو پانی" }, quantity: 2, price: 150 }
    ],
    total: 3150,
    status: "preparing",
    orderTime: "2:15 PM",
    estimatedTime: { en: "15 min", ur: "15 منٹ" },
    progress: 45,
    specialRequests: { en: "No onions in karahi", ur: "کڑاہی میں پیاز نہیں" }
  },
  {
    id: "#002",
    table: { en: "Table 12", ur: "میز 12" },
    customerName: pakistaniNames[1],
    items: [
      { name: menuItems[3].name, quantity: 1, price: 1500 },
      { name: { en: "Kashmiri Chai", ur: "کشمیری چائے" }, quantity: 2, price: 200 }
    ],
    total: 1900,
    status: "ready",
    orderTime: "2:10 PM",
    estimatedTime: { en: "Ready", ur: "تیار" },
    progress: 100,
    specialRequests: null
  },
  {
    id: "#003",
    table: { en: "Table 3", ur: "میز 3" },
    customerName: pakistaniNames[2],
    items: [
      { name: menuItems[1].name, quantity: 3, price: 800 },
      { name: menuItems[6].name, quantity: 1, price: 400 }
    ],
    total: 2800,
    status: "served",
    orderTime: "1:45 PM",
    estimatedTime: { en: "Completed", ur: "مکمل" },
    progress: 100,
    specialRequests: { en: "Extra raita with biryani", ur: "بریانی کے ساتھ اضافی رائتہ" }
  },
  {
    id: "#004",
    table: { en: "Table 8", ur: "میز 8" },
    customerName: pakistaniNames[3],
    items: [
      { name: menuItems[5].name, quantity: 2, price: 700 },
      { name: { en: "Fresh Lime Water", ur: "تازہ لیمو پانی" }, quantity: 3, price: 150 }
    ],
    total: 1850,
    status: "new",
    orderTime: "2:20 PM",
    estimatedTime: { en: "20 min", ur: "20 منٹ" },
    progress: 0,
    specialRequests: { en: "Medium spice level", ur: "درمیانہ مسالہ" }
  }
];

export default function Orders() {
  const { language, t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState("all");

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "new":
        return {
          badge: <Badge variant="destructive">{t('newOrder')}</Badge>,
          icon: <AlertCircle className="w-4 h-4 text-destructive" />,
          color: "text-destructive"
        };
      case "preparing":
        return {
          badge: <Badge className="bg-warning text-warning-foreground">{t('preparing')}</Badge>,
          icon: <ChefHat className="w-4 h-4 text-warning" />,
          color: "text-warning"
        };
      case "ready":
        return {
          badge: <Badge className="bg-info text-info-foreground">{t('ready')}</Badge>,
          icon: <CheckCircle className="w-4 h-4 text-info" />,
          color: "text-info"
        };
      case "served":
        return {
          badge: <Badge variant="outline" className="border-success text-success">{t('served')}</Badge>,
          icon: <Utensils className="w-4 h-4 text-success" />,
          color: "text-success"
        };
      default:
        return {
          badge: <Badge variant="outline">Unknown</Badge>,
          icon: <Clock className="w-4 h-4" />,
          color: "text-muted-foreground"
        };
    }
  };

  const filteredOrders = orders.filter(order => {
    if (selectedTab === "all") return true;
    return order.status === selectedTab;
  });

  const getProgressColor = (status: string) => {
    switch (status) {
      case "new": return "bg-destructive";
      case "preparing": return "bg-warning";
      case "ready": return "bg-info";
      case "served": return "bg-success";
      default: return "bg-muted";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">{t('orderManagement')}</h1>
        <p className="text-muted-foreground mt-1">
          {t('trackOrders')}
        </p>
      </div>

      {/* Status Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-5 w-full max-w-md">
          <TabsTrigger value="all">{t('all')} ({orders.length})</TabsTrigger>
          <TabsTrigger value="new">{t('new')} ({orders.filter(o => o.status === "new").length})</TabsTrigger>
          <TabsTrigger value="preparing">{t('preparing')} ({orders.filter(o => o.status === "preparing").length})</TabsTrigger>
          <TabsTrigger value="ready">{t('ready')} ({orders.filter(o => o.status === "ready").length})</TabsTrigger>
          <TabsTrigger value="served">{t('served')} ({orders.filter(o => o.status === "served").length})</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredOrders.map((order) => {
              const statusInfo = getStatusInfo(order.status);
              
              return (
                <Card key={order.id} className="glass-card card-hover">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {statusInfo.icon}
                        {order.id}
                      </CardTitle>
                      {statusInfo.badge}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{order.table[language]} • {order.customerName}</span>
                      <span>{order.orderTime}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.quantity}x {item.name[language]}</span>
                          <span className="text-muted-foreground">Rs. {(item.quantity * item.price).toFixed(0)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Special Requests */}
                    {order.specialRequests && (
                      <div className="p-2 rounded bg-muted/30 border border-border/50">
                        <p className="text-xs text-muted-foreground mb-1">{t('specialRequests')}</p>
                        <p className="text-sm">{order.specialRequests[language]}</p>
                      </div>
                    )}

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{t('progress')}</span>
                        <span className={statusInfo.color}>{order.estimatedTime[language]}</span>
                      </div>
                      <Progress 
                        value={order.progress} 
                        className="h-2"
                      />
                    </div>

                    {/* Total and Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <span className="text-lg font-bold text-primary">Rs. {order.total.toFixed(0)}</span>
                      
                      <div className="flex gap-2">
                        {order.status === "new" && (
                          <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                            {t('startCooking')}
                          </Button>
                        )}
                        {order.status === "preparing" && (
                          <Button size="sm" variant="outline" className="border-info text-info">
                            {t('markReady')}
                          </Button>
                        )}
                        {order.status === "ready" && (
                          <Button size="sm" variant="outline" className="border-success text-success">
                            {t('markServed')}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <span className="text-6xl">📝</span>
              </div>
              <h3 className="text-lg font-medium mb-2">{t('noOrders')}</h3>
              <p className="text-muted-foreground">
                {selectedTab === "all" 
                  ? (language === 'en' ? "No orders have been placed yet." : "ابھی تک کوئی آرڈر نہیں آیا۔")
                  : (language === 'en' ? `No orders with status "${selectedTab}".` : `"${selectedTab}" اسٹیٹس کے ساتھ کوئی آرڈر نہیں۔`)
                }
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
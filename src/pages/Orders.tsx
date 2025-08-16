import { useState } from "react";
import { Clock, CheckCircle, AlertCircle, ChefHat, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const orders = [
  {
    id: "#001",
    table: "Table 5",
    customerName: "John Smith",
    items: [
      { name: "Classic Burger", quantity: 2, price: 14.99 },
      { name: "Caesar Salad", quantity: 1, price: 12.99 },
      { name: "Coca Cola", quantity: 2, price: 3.99 }
    ],
    total: 50.96,
    status: "preparing",
    orderTime: "2:15 PM",
    estimatedTime: "15 min",
    progress: 45,
    specialRequests: "No onions on burger"
  },
  {
    id: "#002",
    table: "Table 12",
    customerName: "Sarah Johnson",
    items: [
      { name: "Grilled Salmon", quantity: 1, price: 24.99 },
      { name: "House Wine", quantity: 2, price: 12.00 }
    ],
    total: 48.99,
    status: "ready",
    orderTime: "2:10 PM",
    estimatedTime: "Ready",
    progress: 100,
    specialRequests: null
  },
  {
    id: "#003",
    table: "Table 3",
    customerName: "Mike Wilson",
    items: [
      { name: "Pasta Carbonara", quantity: 3, price: 16.99 },
      { name: "Garlic Bread", quantity: 1, price: 6.99 }
    ],
    total: 57.96,
    status: "served",
    orderTime: "1:45 PM",
    estimatedTime: "Completed",
    progress: 100,
    specialRequests: "Extra parmesan cheese"
  },
  {
    id: "#004",
    table: "Table 8",
    customerName: "Emma Davis",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 18.99 },
      { name: "Sprite", quantity: 3, price: 3.99 }
    ],
    total: 49.95,
    status: "new",
    orderTime: "2:20 PM",
    estimatedTime: "20 min",
    progress: 0,
    specialRequests: "Thin crust"
  }
];

export default function Orders() {
  const [selectedTab, setSelectedTab] = useState("all");

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "new":
        return {
          badge: <Badge variant="destructive">New Order</Badge>,
          icon: <AlertCircle className="w-4 h-4 text-destructive" />,
          color: "text-destructive"
        };
      case "preparing":
        return {
          badge: <Badge className="bg-warning text-warning-foreground">Preparing</Badge>,
          icon: <ChefHat className="w-4 h-4 text-warning" />,
          color: "text-warning"
        };
      case "ready":
        return {
          badge: <Badge className="bg-info text-info-foreground">Ready</Badge>,
          icon: <CheckCircle className="w-4 h-4 text-info" />,
          color: "text-info"
        };
      case "served":
        return {
          badge: <Badge variant="outline" className="border-success text-success">Served</Badge>,
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
        <h1 className="text-3xl font-bold gradient-text">Order Management</h1>
        <p className="text-muted-foreground mt-1">
          Track and manage all incoming orders in real-time.
        </p>
      </div>

      {/* Status Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-5 w-full max-w-md">
          <TabsTrigger value="all">All ({orders.length})</TabsTrigger>
          <TabsTrigger value="new">New ({orders.filter(o => o.status === "new").length})</TabsTrigger>
          <TabsTrigger value="preparing">Preparing ({orders.filter(o => o.status === "preparing").length})</TabsTrigger>
          <TabsTrigger value="ready">Ready ({orders.filter(o => o.status === "ready").length})</TabsTrigger>
          <TabsTrigger value="served">Served ({orders.filter(o => o.status === "served").length})</TabsTrigger>
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
                      <span>{order.table} • {order.customerName}</span>
                      <span>{order.orderTime}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.quantity}x {item.name}</span>
                          <span className="text-muted-foreground">${(item.quantity * item.price).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Special Requests */}
                    {order.specialRequests && (
                      <div className="p-2 rounded bg-muted/30 border border-border/50">
                        <p className="text-xs text-muted-foreground mb-1">Special Requests:</p>
                        <p className="text-sm">{order.specialRequests}</p>
                      </div>
                    )}

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className={statusInfo.color}>{order.estimatedTime}</span>
                      </div>
                      <Progress 
                        value={order.progress} 
                        className="h-2"
                      />
                    </div>

                    {/* Total and Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <span className="text-lg font-bold text-primary">${order.total.toFixed(2)}</span>
                      
                      <div className="flex gap-2">
                        {order.status === "new" && (
                          <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                            Start Cooking
                          </Button>
                        )}
                        {order.status === "preparing" && (
                          <Button size="sm" variant="outline" className="border-info text-info">
                            Mark Ready
                          </Button>
                        )}
                        {order.status === "ready" && (
                          <Button size="sm" variant="outline" className="border-success text-success">
                            Mark Served
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
              <h3 className="text-lg font-medium mb-2">No orders found</h3>
              <p className="text-muted-foreground">
                {selectedTab === "all" 
                  ? "No orders have been placed yet." 
                  : `No orders with status "${selectedTab}".`
                }
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
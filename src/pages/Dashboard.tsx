import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  Clock,
  ChefHat,
  Star,
  Target
} from "lucide-react";
import { MetricCard } from "@/components/ui/metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const salesData = [
  { time: "9AM", sales: 1200, orders: 24 },
  { time: "10AM", sales: 2100, orders: 38 },
  { time: "11AM", sales: 1800, orders: 32 },
  { time: "12PM", sales: 4200, orders: 65 },
  { time: "1PM", sales: 5800, orders: 89 },
  { time: "2PM", sales: 3200, orders: 54 },
  { time: "3PM", sales: 2100, orders: 36 },
  { time: "4PM", sales: 1800, orders: 28 },
  { time: "5PM", sales: 3600, orders: 52 },
  { time: "6PM", sales: 6200, orders: 94 },
  { time: "7PM", sales: 7800, orders: 112 },
  { time: "8PM", sales: 6900, orders: 98 }
];

const categoryData = [
  { name: "Main Course", value: 45, color: "#F97316" },
  { name: "Appetizers", value: 25, color: "#22C55E" },
  { name: "Beverages", value: 20, color: "#3B82F6" },
  { name: "Desserts", value: 10, color: "#EAB308" }
];

const recentOrders = [
  { id: "#001", table: "Table 5", items: "2x Burger, 1x Salad", total: "$45.99", status: "preparing", time: "2 min ago" },
  { id: "#002", table: "Table 12", items: "1x Salmon, 2x Wine", total: "$78.50", status: "ready", time: "5 min ago" },
  { id: "#003", table: "Table 3", items: "3x Pasta, 1x Appetizer", total: "$62.25", status: "served", time: "8 min ago" },
  { id: "#004", table: "Table 8", items: "2x Pizza, 3x Soda", total: "$52.75", status: "preparing", time: "12 min ago" },
];

const topDishes = [
  { name: "Classic Burger", orders: 43, revenue: "$387.00" },
  { name: "Caesar Salad", orders: 31, revenue: "$279.00" },
  { name: "Grilled Salmon", orders: 28, revenue: "$560.00" },
  { name: "Pasta Carbonara", orders: 25, revenue: "$400.00" },
];

export default function Dashboard() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "preparing":
        return <Badge variant="destructive" className="text-xs">Preparing</Badge>;
      case "ready":
        return <Badge className="text-xs bg-warning text-warning-foreground">Ready</Badge>;
      case "served":
        return <Badge variant="outline" className="text-xs border-success text-success">Served</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Unknown</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening at your restaurant today.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Today's Revenue"
          value="$8,642.50"
          change="+12.5% from yesterday"
          changeType="positive"
          icon={DollarSign}
          variant="primary"
        />
        <MetricCard
          title="Active Tables"
          value="14/18"
          change="3 available"
          changeType="neutral"
          icon={Target}
          variant="success"
        />
        <MetricCard
          title="Orders Today"
          value="127"
          change="+8% from yesterday"
          changeType="positive"
          icon={ShoppingCart}
        />
        <MetricCard
          title="Staff on Duty"
          value="12"
          change="All shifts covered"
          changeType="positive"
          icon={Users}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Sales Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="time" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-primary" />
              Sales by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{order.id}</span>
                      <span className="text-muted-foreground text-sm">•</span>
                      <span className="text-muted-foreground text-sm">{order.table}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.items}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-medium text-sm">{order.total}</p>
                    {getStatusBadge(order.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Dishes */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Top Dishes Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDishes.map((dish, index) => (
                <div
                  key={dish.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{dish.name}</p>
                      <p className="text-muted-foreground text-xs">{dish.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm text-success">{dish.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
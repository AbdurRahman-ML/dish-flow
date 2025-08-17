import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from "recharts";
import { TrendingUp, TrendingDown, Users, Clock, Star, Target } from "lucide-react";

const revenueData = [
  { name: "Mon", revenue: 4200, orders: 34 },
  { name: "Tue", revenue: 5800, orders: 42 },
  { name: "Wed", revenue: 6200, orders: 38 },
  { name: "Thu", revenue: 7100, orders: 51 },
  { name: "Fri", revenue: 8900, orders: 67 },
  { name: "Sat", revenue: 12400, orders: 89 },
  { name: "Sun", revenue: 9800, orders: 73 },
];

const hourlyData = [
  { hour: "6AM", customers: 12 },
  { hour: "9AM", customers: 34 },
  { hour: "12PM", customers: 67 },
  { hour: "3PM", customers: 45 },
  { hour: "6PM", customers: 89 },
  { hour: "9PM", customers: 76 },
  { hour: "12AM", customers: 23 },
];

const menuPerformance = [
  { name: "Burger", value: 35, color: "#F97316" },
  { name: "Pasta", value: 25, color: "#22C55E" },
  { name: "Salad", value: 20, color: "#3B82F6" },
  { name: "Pizza", value: 15, color: "#EAB308" },
  { name: "Others", value: 5, color: "#EF4444" },
];

const topDishes = [
  { name: "Grilled Salmon", orders: 234, revenue: 3276, trend: "up" },
  { name: "Classic Burger", orders: 189, revenue: 2268, trend: "up" },
  { name: "Caesar Salad", orders: 156, revenue: 1872, trend: "down" },
  { name: "Pasta Carbonara", orders: 143, revenue: 2145, trend: "up" },
  { name: "Margherita Pizza", orders: 98, revenue: 1470, trend: "down" },
];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your restaurant's performance and insights</p>
        </div>
        <Badge variant="outline" className="text-primary border-primary">
          Last 7 Days
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$54,420"
          change="+12.5%"
          changeType="positive"
          icon={TrendingUp}
          className="hover-scale"
        />
        <MetricCard
          title="Total Orders"
          value="394"
          change="+8.2%"
          changeType="positive"
          icon={Target}
          className="hover-scale"
        />
        <MetricCard
          title="Avg. Order Value"
          value="$138"
          change="-2.1%"
          changeType="negative"
          icon={TrendingDown}
          className="hover-scale"
        />
        <MetricCard
          title="Customer Rating"
          value="4.8"
          change="+0.3"
          changeType="positive"
          icon={Star}
          className="hover-scale"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="glass-card hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Weekly Revenue
            </CardTitle>
            <CardDescription>Revenue and order trends over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  fill="url(#revenueGradient)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Peak Hours */}
        <Card className="glass-card hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Peak Hours Analysis
            </CardTitle>
            <CardDescription>Customer traffic throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar 
                  dataKey="customers" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Menu Performance & Top Dishes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Menu Performance */}
        <Card className="glass-card hover-scale">
          <CardHeader>
            <CardTitle>Menu Performance</CardTitle>
            <CardDescription>Distribution of orders by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={menuPerformance}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {menuPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {menuPerformance.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Dishes */}
        <Card className="glass-card hover-scale">
          <CardHeader>
            <CardTitle>Top Performing Dishes</CardTitle>
            <CardDescription>Best sellers this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDishes.map((dish, index) => (
                <div key={dish.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{dish.name}</p>
                      <p className="text-sm text-muted-foreground">{dish.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${dish.revenue.toLocaleString()}</p>
                    <div className="flex items-center gap-1">
                      {dish.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                      <span className={`text-xs ${dish.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {dish.trend === "up" ? "+5%" : "-3%"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle>Performance Goals</CardTitle>
          <CardDescription>Track your monthly targets and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Monthly Revenue</span>
                <span className="text-sm text-muted-foreground">$198K / $250K</span>
              </div>
              <Progress value={79} className="h-2" />
              <p className="text-xs text-muted-foreground">79% of monthly goal</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Customer Satisfaction</span>
                <span className="text-sm text-muted-foreground">4.8 / 5.0</span>
              </div>
              <Progress value={96} className="h-2" />
              <p className="text-xs text-muted-foreground">96% satisfaction rate</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Order Volume</span>
                <span className="text-sm text-muted-foreground">1,847 / 2,000</span>
              </div>
              <Progress value={92} className="h-2" />
              <p className="text-xs text-muted-foreground">92% of monthly target</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
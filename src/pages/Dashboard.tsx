import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  Clock,
  ChefHat,
  Star,
  Target,
  Moon
} from "lucide-react";
import { MetricCard } from "@/components/ui/metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BismillahHeader } from "@/components/BismillahHeader";
import { RestaurantStory } from "@/components/RestaurantStory";
import { TodaysSpecialStory } from "@/components/TodaysSpecialStory";
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
  { time: "Fajr (5AM)", sales: 800, orders: 12 },
  { time: "7AM", sales: 2100, orders: 28 },
  { time: "9AM", sales: 1800, orders: 24 },
  { time: "Zuhr (12PM)", sales: 6200, orders: 78 },
  { time: "1PM", sales: 8800, orders: 115 },
  { time: "Asr (3PM)", sales: 4200, orders: 58 },
  { time: "5PM", sales: 3600, orders: 42 },
  { time: "Maghrib (6PM)", sales: 7200, orders: 96 },
  { time: "8PM", sales: 9800, orders: 142 },
  { time: "Isha (9PM)", sales: 8900, orders: 124 },
  { time: "10PM", sales: 6400, orders: 86 },
  { time: "11PM", sales: 3200, orders: 34 }
];

const categoryData = [
  { name: "Rice & Biryani • چاول", value: 45, color: "hsl(142 54% 37%)" },
  { name: "Karahi & Handi • کڑاہی", value: 25, color: "hsl(45 93% 47%)" },
  { name: "BBQ & Grills • بی بی کیو", value: 20, color: "hsl(0 84% 60%)" },
  { name: "Beverages • مشروبات", value: 10, color: "hsl(18 79% 55%)" }
];

const recentOrders = [
  { id: "#KK001", table: "Table 5", items: "2x Karachi Biryani, 1x Raita", total: "Rs. 1,299", status: "preparing", time: "2 min ago", customer: "Ahmad bhai" },
  { id: "#KK002", table: "Table 12", items: "1x Mutton Karahi, 2x Naan", total: "Rs. 2,150", status: "ready", time: "5 min ago", customer: "Fatima Family" },
  { id: "#KK003", table: "Table 3", items: "3x Lahori Chargha, 1x Daal", total: "Rs. 1,875", status: "served", time: "8 min ago", customer: "Sohail sb" },
  { id: "#KK004", table: "Table 8", items: "2x Chicken Handi, 3x Lassi", total: "Rs. 1,650", status: "preparing", time: "12 min ago", customer: "Zara & Friends" },
];

const topDishes = [
  { name: "Special Biryani • خصوصی بریانی", orders: 43, revenue: "Rs. 38,700", chef: "Ustad Ramzan", specialty: "Family Recipe" },
  { name: "Mutton Karahi • مٹن کڑاہی", orders: 31, revenue: "Rs. 65,100", chef: "Master Akbar", specialty: "Frontier Style" },
  { name: "Lahori Chargha • لاہوری چرغہ", orders: 28, revenue: "Rs. 42,000", chef: "Chef Saleem", specialty: "Crispy & Spiced" },
  { name: "Chicken Handi • چکن ہانڈی", orders: 25, revenue: "Rs. 37,500", chef: "Begum Nasreen", specialty: "Home Style" },
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

  const currentTime = new Date().toLocaleTimeString('en-PK', { 
    timeZone: 'Asia/Karachi',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });

  const currentDate = new Date().toLocaleDateString('en-PK', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="space-y-6">
      <BismillahHeader />
      
      <div className="p-6 space-y-6">
        {/* Header with Cultural Touch */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text flex items-center gap-2">
              <Moon className="h-8 w-8" />
              Dashboard • ڈیش بورڈ
            </h1>
            <p className="text-muted-foreground mt-1">
              خوش آمدید! Welcome back, Malik Sahib. Allah ka karam, business chal raha hai.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="text-lg font-semibold">{currentTime} PKT</div>
            <div className="text-sm text-muted-foreground">{currentDate}</div>
          </div>
        </div>

        {/* Key Metrics - Pakistani Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Aaj Ki Kamayi • Today's Revenue"
            value="Rs. 2,64,850"
            change="+12.5% kal se zyada • from yesterday"
            changeType="positive"
            icon={DollarSign}
            variant="primary"
          />
          <MetricCard
            title="Active Tables • فعال میزیں"
            value="14/18"
            change="4 available for walk-ins"
            changeType="neutral"
            icon={Target}
            variant="success"
          />
          <MetricCard
            title="Orders Aaj • آج کے آرڈرز"
            value="187"
            change="+23% from yesterday MashAllah"
            changeType="positive"
            icon={ShoppingCart}
          />
          <MetricCard
            title="Staff Duty Par • عملہ"
            value="12/15"
            change="Nasir bhai on Namaz break"
            changeType="positive"
            icon={Users}
          />
        </div>

        {/* Cultural Dashboard Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RestaurantStory />
          <TodaysSpecialStory />
        </div>

        {/* Charts Row - Prayer Time Aware */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <Card className="glass-card cultural-pattern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Sales Overview • فروخت کا جائزہ
              </CardTitle>
              <p className="text-sm text-muted-foreground">Prayer times included for cultural accuracy</p>
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
          <Card className="glass-card cultural-pattern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" />
                Cuisine Categories • کھانے کی اقسام
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

        {/* Bottom Row - Enhanced with Pakistani Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <Card className="glass-card cultural-pattern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Haal Hi Ke Orders • Recent Orders
              </CardTitle>
            </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{order.id}</span>
                      <span className="text-muted-foreground text-sm">•</span>
                      <span className="text-muted-foreground text-sm">{order.table}</span>
                      <span className="text-muted-foreground text-sm">•</span>
                      <span className="text-xs text-primary">{order.customer}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.items}</p>
                    <p className="text-xs text-muted-foreground mt-1">{order.time}</p>
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

          {/* Top Dishes with Chef Stories */}
          <Card className="glass-card cultural-pattern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Aaj Ke Mashoor Khanay • Top Dishes Today
              </CardTitle>
            </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDishes.map((dish, index) => (
                <div
                  key={dish.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{dish.name}</p>
                      <p className="text-muted-foreground text-xs flex items-center gap-2">
                        <span>{dish.orders} orders</span>
                        <span>•</span>
                        <span>by {dish.chef}</span>
                      </p>
                      <Badge variant="outline" className="text-xs mt-1">{dish.specialty}</Badge>
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

        {/* Cultural Footer */}
        <div className="text-center py-4 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            الحمدللہ • Alhamdulillah for another blessed day of serving our community
          </p>
        </div>
      </div>
    </div>
  );
}
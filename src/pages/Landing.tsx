import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChefHat, 
  Users, 
  BarChart3, 
  Calendar, 
  ArrowRight,
  Star,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track sales, monitor performance, and make data-driven decisions with live dashboards."
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Efficiently manage your team, track schedules, and optimize operations."
  },
  {
    icon: Calendar,
    title: "Smart Reservations",
    description: "Streamline table bookings with intelligent reservation management."
  },
  {
    icon: ChefHat,
    title: "Menu Control",
    description: "Dynamic menu management with inventory tracking and pricing optimization."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for busy restaurant environments."
  }
];

const testimonials = [
  {
    name: "Chef Marco Rodriguez",
    role: "Executive Chef",
    restaurant: "Bella Vista",
    content: "RestaurantOS transformed our operations. We've increased efficiency by 40% and customer satisfaction is at an all-time high.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Restaurant Manager",
    restaurant: "Urban Spice",
    content: "The analytics dashboard gives us insights we never had before. Revenue tracking and staff management are now seamless.",
    rating: 5
  },
  {
    name: "Tony Martinelli",
    role: "Owner",
    restaurant: "Tony's Kitchen",
    content: "Best investment we've made. The reservation system alone has reduced no-shows by 60%.",
    rating: 5
  }
];

export default function Landing() {
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, rotation: number}>>([]);

  useEffect(() => {
    // Create floating background elements
    const elements = Array.from({length: 15}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-32 h-32 rounded-full bg-gradient-primary opacity-5 animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
              animationDelay: `${element.id * 0.5}s`,
              animationDuration: `${3 + element.id * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 glass-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">RestaurantOS</span>
            </div>
            <Link to="/dashboard">
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Transform</span> Your
              <br />
              Restaurant Operations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The most advanced restaurant management platform. Streamline operations, 
              boost revenue, and delight customers with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4 hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover:bg-sidebar-accent transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <p className="text-muted-foreground">Restaurants Powered</p>
              </CardContent>
            </Card>
            <Card className="glass-card card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">40%</div>
                <p className="text-muted-foreground">Efficiency Increase</p>
              </CardContent>
            </Card>
            <Card className="glass-card card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime Guarantee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed specifically for modern restaurant management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="glass-card card-hover group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Loved by Restaurant Owners
            </h2>
            <p className="text-xl text-muted-foreground">
              See what industry leaders are saying about RestaurantOS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="glass-card card-hover"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {Array.from({length: testimonial.rating}).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-6">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.restaurant}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card p-12">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4 gradient-text">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of successful restaurants using RestaurantOS to streamline operations and boost profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4 hover:opacity-90 transition-all duration-300 hover:scale-105">
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Schedule Demo
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Setup in Minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">RestaurantOS</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 RestaurantOS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
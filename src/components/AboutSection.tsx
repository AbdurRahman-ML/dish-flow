import { Card, CardContent } from "@/components/ui/card";
import { 
  ChefHat, 
  Users, 
  Target, 
  Heart,
  MapPin,
  Clock,
  Star
} from "lucide-react";

export function AboutSection() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Karachi Khana</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your complete restaurant management solution designed specifically for Pakistani restaurants, 
            helping local businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower Pakistani restaurants with modern technology, making it easier to manage 
                  operations, serve customers better, and grow their business sustainably.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Why We Built This</h3>
                <p className="text-muted-foreground">
                  Pakistani restaurants deserve world-class management tools. We created Karachi Khana 
                  to bridge the technology gap and help traditional businesses compete in today's market.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Who We Serve</h3>
                <p className="text-muted-foreground">
                  From family-owned dhabas to fine dining establishments, we serve Pakistani restaurants 
                  of all sizes looking to streamline their operations and enhance customer experience.
                </p>
              </div>
            </div>
          </div>

          <Card className="glass-card border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <ChefHat className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Restaurants Served</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-success mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Cities Covered</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-info to-info/80 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-warning to-warning/80 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">4.9</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="glass-card border-0 shadow-lg inline-block">
            <CardContent className="px-8 py-6">
              <p className="text-lg text-muted-foreground mb-0">
                <span className="font-semibold text-primary">Karachi Khana</span> - 
                Digitizing Pakistan's culinary heritage, one restaurant at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
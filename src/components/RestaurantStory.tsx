import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, MapPin } from "lucide-react";

export function RestaurantStory() {
  return (
    <Card className="glass-card cultural-pattern border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 gradient-text">
          <Heart className="h-5 w-5 text-primary" />
          Our Family Story
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
            <Users className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">The Khan Family Legacy</h4>
            <p className="text-sm text-muted-foreground">
              Founded in 1987 by Haji Muhammad Khan in old Karachi, our restaurant began as a small dhaba serving 
              authentic Karachi-style biryani. Three generations later, we continue to honor our Nana Jaan's 
              secret spice blends and traditional cooking methods.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
            <Award className="h-6 w-6 text-warning-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">Award-Winning Heritage</h4>
            <p className="text-sm text-muted-foreground">
              Winner of "Best Biryani in Karachi" 2019, 2021, 2023. Featured in Dawn Food Magazine 
              as "Preserving Authentic Flavors in Modern Times."
            </p>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline" className="text-xs">Heritage Recipe</Badge>
              <Badge variant="outline" className="text-xs">Halal Certified</Badge>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
            <MapPin className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">Community Connection</h4>
            <p className="text-sm text-muted-foreground">
              Proudly serving Defence, Gulshan, and Clifton areas. Partner with local farmers in Thatta 
              for fresh vegetables and supporting 15+ local families through our ingredient sourcing.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
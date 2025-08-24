import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Clock, Star } from "lucide-react";

export function TodaysSpecialStory() {
  const today = new Date().toLocaleDateString('en-PK', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Card className="glass-card border-warning/30 bg-gradient-to-br from-warning/5 to-transparent">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChefHat className="h-5 w-5 text-warning" />
          <span className="gradient-text">Aaj Ka Khaas • Today's Special</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{today}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 rounded-lg bg-gradient-gold/10 border border-warning/30">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">Memoni Mutton Biryani</h3>
            <Badge className="bg-gradient-gold text-warning-foreground">
              Chef's Choice
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Premium mutton cooked with our signature Memoni spices, aged basmati rice from Punjab, 
            and Ustad Ramzan's 40-year-old dum technique. Limited to 50 plates today.
          </p>
          
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-2 rounded bg-primary/10">
              <Clock className="h-4 w-4 mx-auto mb-1 text-primary" />
              <div className="text-xs font-medium">45 min</div>
              <div className="text-xs text-muted-foreground">Cooking Time</div>
            </div>
            <div className="p-2 rounded bg-warning/10">
              <Star className="h-4 w-4 mx-auto mb-1 text-warning" />
              <div className="text-xs font-medium">Rs. 850</div>
              <div className="text-xs text-muted-foreground">Full Plate</div>
            </div>
            <div className="p-2 rounded bg-success/10">
              <ChefHat className="h-4 w-4 mx-auto mb-1 text-success" />
              <div className="text-xs font-medium">23 left</div>
              <div className="text-xs text-muted-foreground">Available</div>
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-muted/30">
            <p className="text-xs text-muted-foreground italic">
              "This recipe comes from my late grandmother's kitchen in old Memoni Mohalla. 
              The secret is in the overnight marination with fresh dahi from local buffalos." 
              - Ustad Ramzan, Head Chef
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
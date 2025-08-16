import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
  variant?: "default" | "primary" | "success" | "warning" | "info";
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  className,
  variant = "default"
}: MetricCardProps) {
  const variantStyles = {
    default: "glass-card border-border/20",
    primary: "bg-gradient-primary border-primary/20 text-primary-foreground",
    success: "bg-gradient-success border-success/20 text-success-foreground",
    warning: "bg-warning/10 border-warning/20",
    info: "bg-info/10 border-info/20"
  };

  const changeStyles = {
    positive: "text-success",
    negative: "text-destructive",
    neutral: "text-muted-foreground"
  };

  return (
    <Card className={cn(
      "card-hover transition-all duration-300",
      variantStyles[variant],
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn(
          "text-sm font-medium",
          variant === "default" ? "text-muted-foreground" : ""
        )}>
          {title}
        </CardTitle>
        <Icon className={cn(
          "h-4 w-4",
          variant === "default" ? "text-muted-foreground" : "opacity-80"
        )} />
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-2xl font-bold",
          variant === "default" ? "text-foreground" : ""
        )}>
          {value}
        </div>
        {change && (
          <p className={cn(
            "text-xs mt-1",
            variant === "default" ? changeStyles[changeType] : "opacity-80"
          )}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
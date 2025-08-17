import { useState } from "react";
import { 
  Users, 
  UserPlus, 
  Clock, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Filter,
  Search,
  MoreVertical,
  Edit,
  Eye,
  UserX
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const staffMembers = [
  {
    id: 1,
    name: "Emma Rodriguez",
    role: "Head Chef",
    department: "Kitchen",
    status: "on-duty",
    avatar: "/placeholder.svg",
    email: "emma.rodriguez@restaurant.com",
    phone: "+1 (555) 123-4567",
    hourlyWage: 28.50,
    hoursWorked: 42,
    rating: 4.9,
    ordersServed: 156,
    joinDate: "2022-03-15",
    schedule: {
      monday: "08:00 - 16:00",
      tuesday: "08:00 - 16:00",
      wednesday: "OFF",
      thursday: "08:00 - 16:00",
      friday: "08:00 - 16:00",
      saturday: "10:00 - 18:00",
      sunday: "OFF"
    }
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Server",
    department: "Front of House",
    status: "on-break",
    avatar: "/placeholder.svg",
    email: "marcus.johnson@restaurant.com",
    phone: "+1 (555) 234-5678",
    hourlyWage: 15.00,
    hoursWorked: 38,
    rating: 4.7,
    ordersServed: 89,
    joinDate: "2023-01-20",
    schedule: {
      monday: "16:00 - 00:00",
      tuesday: "16:00 - 00:00",
      wednesday: "16:00 - 00:00",
      thursday: "OFF",
      friday: "16:00 - 02:00",
      saturday: "16:00 - 02:00",
      sunday: "OFF"
    }
  },
  {
    id: 3,
    name: "Sofia Chen",
    role: "Sous Chef",
    department: "Kitchen",
    status: "on-duty",
    avatar: "/placeholder.svg",
    email: "sofia.chen@restaurant.com",
    phone: "+1 (555) 345-6789",
    hourlyWage: 24.00,
    hoursWorked: 40,
    rating: 4.8,
    ordersServed: 134,
    joinDate: "2022-08-10",
    schedule: {
      monday: "12:00 - 20:00",
      tuesday: "12:00 - 20:00",
      wednesday: "12:00 - 20:00",
      thursday: "OFF",
      friday: "12:00 - 22:00",
      saturday: "12:00 - 22:00",
      sunday: "OFF"
    }
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Bartender",
    department: "Bar",
    status: "off-duty",
    avatar: "/placeholder.svg",
    email: "david.thompson@restaurant.com",
    phone: "+1 (555) 456-7890",
    hourlyWage: 18.00,
    hoursWorked: 35,
    rating: 4.6,
    ordersServed: 67,
    joinDate: "2023-05-03",
    schedule: {
      monday: "OFF",
      tuesday: "18:00 - 02:00",
      wednesday: "18:00 - 02:00",
      thursday: "18:00 - 02:00",
      friday: "18:00 - 03:00",
      saturday: "18:00 - 03:00",
      sunday: "OFF"
    }
  },
  {
    id: 5,
    name: "Isabella Garcia",
    role: "Server",
    department: "Front of House",
    status: "on-duty",
    avatar: "/placeholder.svg",
    email: "isabella.garcia@restaurant.com",
    phone: "+1 (555) 567-8901",
    hourlyWage: 15.00,
    hoursWorked: 41,
    rating: 4.9,
    ordersServed: 112,
    joinDate: "2022-11-12",
    schedule: {
      monday: "10:00 - 18:00",
      tuesday: "10:00 - 18:00",
      wednesday: "OFF",
      thursday: "10:00 - 18:00",
      friday: "10:00 - 18:00",
      saturday: "10:00 - 18:00",
      sunday: "12:00 - 20:00"
    }
  },
  {
    id: 6,
    name: "Ryan Walsh",
    role: "Kitchen Assistant",
    department: "Kitchen",
    status: "on-duty",
    avatar: "/placeholder.svg",
    email: "ryan.walsh@restaurant.com",
    phone: "+1 (555) 678-9012",
    hourlyWage: 13.50,
    hoursWorked: 44,
    rating: 4.3,
    ordersServed: 78,
    joinDate: "2023-09-18",
    schedule: {
      monday: "08:00 - 16:00",
      tuesday: "08:00 - 16:00",
      wednesday: "08:00 - 16:00",
      thursday: "08:00 - 16:00",
      friday: "08:00 - 16:00",
      saturday: "OFF",
      sunday: "OFF"
    }
  }
];

export default function Staff() {
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "on-duty":
        return {
          badge: <Badge variant="outline" className="border-success text-success">On Duty</Badge>,
          color: "text-success"
        };
      case "on-break":
        return {
          badge: <Badge className="bg-warning text-warning-foreground">On Break</Badge>,
          color: "text-warning"
        };
      case "off-duty":
        return {
          badge: <Badge variant="outline" className="border-muted text-muted-foreground">Off Duty</Badge>,
          color: "text-muted-foreground"
        };
      default:
        return {
          badge: <Badge variant="outline">Unknown</Badge>,
          color: "text-muted-foreground"
        };
    }
  };

  const filteredStaff = staffMembers.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === "all" || staff.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const onDutyCount = staffMembers.filter(s => s.status === "on-duty").length;
  const totalHours = staffMembers.reduce((sum, staff) => sum + staff.hoursWorked, 0);
  const avgRating = staffMembers.reduce((sum, staff) => sum + staff.rating, 0) / staffMembers.length;
  const totalOrders = staffMembers.reduce((sum, staff) => sum + staff.ordersServed, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Staff Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your team, track performance, and optimize schedules.
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Staff Member
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card card-hover">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">On Duty</p>
                <p className="text-2xl font-bold text-success">{onDutyCount}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card card-hover">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-2xl font-bold text-primary">{totalHours}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card card-hover">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold text-warning">{avgRating.toFixed(1)}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card card-hover">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Orders Served</p>
                <p className="text-2xl font-bold text-info">{totalOrders}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-info" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search staff members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterDepartment === "all" ? "default" : "outline"}
                onClick={() => setFilterDepartment("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={filterDepartment === "Kitchen" ? "default" : "outline"}
                onClick={() => setFilterDepartment("Kitchen")}
                size="sm"
              >
                Kitchen
              </Button>
              <Button
                variant={filterDepartment === "Front of House" ? "default" : "outline"}
                onClick={() => setFilterDepartment("Front of House")}
                size="sm"
              >
                Front of House
              </Button>
              <Button
                variant={filterDepartment === "Bar" ? "default" : "outline"}
                onClick={() => setFilterDepartment("Bar")}
                size="sm"
              >
                Bar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((staff) => {
          const statusInfo = getStatusInfo(staff.status);
          
          return (
            <Card 
              key={staff.id} 
              className="glass-card card-hover cursor-pointer transition-all duration-300 hover:scale-102"
              onClick={() => setSelectedStaff(staff.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={staff.avatar} alt={staff.name} />
                      <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{staff.name}</h3>
                      <p className="text-sm text-muted-foreground">{staff.role}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <UserX className="w-4 h-4 mr-2" />
                        Remove Staff
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    {statusInfo.badge}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Department</span>
                    <Badge variant="outline">{staff.department}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning fill-current" />
                      <span className="text-sm font-medium">{staff.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Hours (Week)</span>
                    <span className="text-sm font-medium">{staff.hoursWorked}h</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Orders Served</span>
                    <span className="text-sm font-medium">{staff.ordersServed}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Staff Details Modal */}
      {selectedStaff && (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Staff Details
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedStaff(null)}
              >
                ×
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const staff = staffMembers.find(s => s.id === selectedStaff);
              if (!staff) return null;

              return (
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={staff.avatar} alt={staff.name} />
                            <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-semibold">{staff.name}</h3>
                            <p className="text-muted-foreground">{staff.role}</p>
                            {getStatusInfo(staff.status).badge}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{staff.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{staff.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Joined {new Date(staff.joinDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-primary">${staff.hourlyWage}</div>
                            <div className="text-sm text-muted-foreground">Hourly Rate</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-success">{staff.hoursWorked}h</div>
                            <div className="text-sm text-muted-foreground">This Week</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-warning">{staff.rating}</div>
                            <div className="text-sm text-muted-foreground">Rating</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-info">{staff.ordersServed}</div>
                            <div className="text-sm text-muted-foreground">Orders</div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="space-y-4">
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(staff.schedule).map(([day, hours]) => (
                        <div key={day} className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                          <div className="font-medium capitalize">{day}</div>
                          <div className={hours === "OFF" ? "text-muted-foreground" : "text-foreground"}>
                            {hours}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="performance" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4 text-center">
                          <Award className="w-8 h-8 text-warning mx-auto mb-2" />
                          <div className="text-lg font-semibold">{staff.rating}/5.0</div>
                          <div className="text-sm text-muted-foreground">Customer Rating</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                          <div className="text-lg font-semibold">{staff.ordersServed}</div>
                          <div className="text-sm text-muted-foreground">Orders Served</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-lg font-semibold">{(staff.ordersServed / staff.hoursWorked).toFixed(1)}</div>
                          <div className="text-sm text-muted-foreground">Orders/Hour</div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              );
            })()}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
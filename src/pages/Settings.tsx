import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings as SettingsIcon, 
  ChefHat, 
  Users, 
  Bell, 
  Shield, 
  Palette,
  Clock,
  DollarSign,
  Printer,
  Wifi,
  Save
} from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your restaurant configuration and preferences</p>
        </div>
        <Badge variant="outline" className="text-primary border-primary">
          <SettingsIcon className="h-3 w-3 mr-1" />
          System Active
        </Badge>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full overflow-x-auto">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <ChefHat className="h-4 w-4" />
            <span className="hidden sm:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="staff" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Staff</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            <span className="hidden sm:inline">Integrations</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" />
                Restaurant Information
              </CardTitle>
              <CardDescription>Basic information about your restaurant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-name">Restaurant Name</Label>
                  <Input id="restaurant-name" defaultValue="Karachi Khana" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="restaurant-phone">Phone Number</Label>
                  <Input id="restaurant-phone" defaultValue="+92 300 1234567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="restaurant-address">Address</Label>
                <Input id="restaurant-address" defaultValue="Tariq Road, Karachi, Sindh, Pakistan" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="restaurant-description">Description</Label>
                <Textarea 
                  id="restaurant-description" 
                  defaultValue="Authentic Pakistani cuisine with traditional flavors, serving the best biryani, karahi, and kebabs in Karachi."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="opening-time">Opening Time</Label>
                  <Input id="opening-time" type="time" defaultValue="11:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="closing-time">Closing Time</Label>
                  <Input id="closing-time" type="time" defaultValue="22:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Total Capacity</Label>
                  <Input id="capacity" type="number" defaultValue="120" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Payment & Pricing
              </CardTitle>
              <CardDescription>Configure payment methods and pricing settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Input id="currency" defaultValue="PKR (₨)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                  <Input id="tax-rate" type="number" defaultValue="17" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Accept Cash Payments</Label>
                    <p className="text-sm text-muted-foreground">Allow cash payments at the restaurant</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Accept Card Payments</Label>
                    <p className="text-sm text-muted-foreground">Accept credit and debit cards</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Digital Wallet Support</Label>
                    <p className="text-sm text-muted-foreground">Accept Apple Pay, Google Pay, etc.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Staff Settings */}
        <TabsContent value="staff" className="space-y-6">
          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Staff Management
              </CardTitle>
              <CardDescription>Configure staff roles and permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto Clock-out</Label>
                    <p className="text-sm text-muted-foreground">Automatically clock out staff after shift hours</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Break Reminders</Label>
                    <p className="text-sm text-muted-foreground">Send break reminders to staff</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Performance Tracking</Label>
                    <p className="text-sm text-muted-foreground">Track staff performance metrics</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shift-start">Default Shift Start</Label>
                  <Input id="shift-start" type="time" defaultValue="09:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shift-end">Default Shift End</Label>
                  <Input id="shift-end" type="time" defaultValue="17:00" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Configure when and how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New Order Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when new orders arrive</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Low Stock Warnings</Label>
                    <p className="text-sm text-muted-foreground">Alert when inventory is running low</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Staff Schedule Changes</Label>
                    <p className="text-sm text-muted-foreground">Notify about schedule modifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Daily Reports</Label>
                    <p className="text-sm text-muted-foreground">Receive daily performance summaries</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Customer Feedback</Label>
                    <p className="text-sm text-muted-foreground">Get notified about customer reviews</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage security and access control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Login Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified of new logins</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Data Backup Frequency</Label>
                <Input id="backup-frequency" defaultValue="Daily" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize the look and feel of your dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Use dark theme interface</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Compact Layout</Label>
                    <p className="text-sm text-muted-foreground">Use more condensed layout</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Animation Effects</Label>
                    <p className="text-sm text-muted-foreground">Enable smooth animations</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Theme Color</Label>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-primary cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-transparent cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-transparent cursor-pointer"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-primary" />
                Third-party Integrations
              </CardTitle>
              <CardDescription>Connect with external services and applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Printer className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <Label>Kitchen Printer</Label>
                      <p className="text-sm text-muted-foreground">Print orders directly to kitchen</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <Label>Payment Gateway</Label>
                      <p className="text-sm text-muted-foreground">Stripe payment processing</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send SMS updates to customers</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-gradient-primary text-white hover:scale-105 transition-all duration-300" size="lg">
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
}
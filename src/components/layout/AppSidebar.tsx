import { 
  LayoutDashboard, 
  Menu, 
  ShoppingCart, 
  Users, 
  Grid3X3, 
  BarChart3,
  Settings,
  Bell,
  Search
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Menu", url: "/menu", icon: Menu },
  { title: "Orders", url: "/orders", icon: ShoppingCart },
  { title: "Tables", url: "/tables", icon: Grid3X3 },
  { title: "Staff", url: "/staff", icon: Users },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

const secondaryNavItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `${isActive 
      ? "bg-primary text-white font-medium sidebar-nav-item active" 
      : "text-primary hover:bg-accent hover:text-primary sidebar-nav-item"} transition-all duration-200 flex items-center ${collapsed ? 'justify-center px-0 min-w-[2.5rem]' : 'px-3'} py-2 rounded-md`;

  return (
    <Sidebar
      className={`${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 border-r border-border bg-card`}
      collapsible="icon"
    >
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8">
          {!collapsed ? (
            <NavLink to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">K</span>
              </div>
              <h1 className="text-lg font-semibold text-primary">Karachi Khana</h1>
            </NavLink>
          ) : (
            <NavLink to="/" className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto hover:opacity-80 transition-opacity">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </NavLink>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-primary/70 uppercase tracking-wider mb-3 font-medium">
            {!collapsed && "Main"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0`} />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs text-primary/70 uppercase tracking-wider mb-3 font-medium">
            {!collapsed && "System"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0`} />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
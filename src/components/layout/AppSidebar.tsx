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
  
  const getNavCls = (path: string) => {
    const active = isActive(path);
    const baseClasses = "transition-all duration-200 flex items-center rounded-md w-full";
    
    if (collapsed) {
      return `${baseClasses} justify-center h-10 w-10 mx-auto ${
        active 
          ? "bg-primary text-primary-foreground shadow-lg" 
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      }`;
    } else {
      return `${baseClasses} px-3 py-2.5 ${
        active 
          ? "bg-primary text-primary-foreground shadow-lg font-medium" 
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      }`;
    }
  };

  return (
    <Sidebar
      className={`${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 border-r border-sidebar-border bg-sidebar-background hidden md:flex`}
      collapsible="icon"
    >
      <SidebarContent className={collapsed ? "px-2 py-4" : "px-4 py-4"}>
        {/* Logo */}
        <div className={`mb-6 ${collapsed ? "flex justify-center" : ""}`}>
          {!collapsed ? (
            <NavLink to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-sm">K</span>
              </div>
              <h1 className="text-lg font-semibold text-sidebar-foreground group-hover:text-primary transition-colors">
                Karachi Khana
              </h1>
            </NavLink>
          ) : (
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
              <span className="text-primary-foreground font-bold text-sm">K</span>
            </NavLink>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-xs text-sidebar-foreground/60 uppercase tracking-wider mb-3 font-medium px-3">
              Main
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0 h-auto">
                    <NavLink to={item.url} end className={getNavCls(item.url)}>
                      <item.icon className={`h-5 w-5 flex-shrink-0 ${!collapsed ? 'mr-3' : ''}`} />
                      {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Navigation */}
        <SidebarGroup className={collapsed ? "mt-6" : "mt-8"}>
          {!collapsed && (
            <SidebarGroupLabel className="text-xs text-sidebar-foreground/60 uppercase tracking-wider mb-3 font-medium px-3">
              System
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0 h-auto">
                    <NavLink to={item.url} className={getNavCls(item.url)}>
                      <item.icon className={`h-5 w-5 flex-shrink-0 ${!collapsed ? 'mr-3' : ''}`} />
                      {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
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
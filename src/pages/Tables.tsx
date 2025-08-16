import { useState } from "react";
import { Users, Clock, DollarSign, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tables = [
  { id: 1, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 2, capacity: 4, status: "occupied", currentOrder: "#001", timeOccupied: "45 min", revenue: 67.50 },
  { id: 3, capacity: 6, status: "reserved", currentOrder: null, timeOccupied: null, reservationTime: "7:30 PM" },
  { id: 4, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 5, capacity: 4, status: "occupied", currentOrder: "#005", timeOccupied: "22 min", revenue: 45.99 },
  { id: 6, capacity: 8, status: "cleaning", currentOrder: null, timeOccupied: null },
  { id: 7, capacity: 2, status: "occupied", currentOrder: "#007", timeOccupied: "15 min", revenue: 28.75 },
  { id: 8, capacity: 4, status: "available", currentOrder: null, timeOccupied: null },
  { id: 9, capacity: 6, status: "reserved", currentOrder: null, timeOccupied: null, reservationTime: "8:00 PM" },
  { id: 10, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 11, capacity: 4, status: "occupied", currentOrder: "#011", timeOccupied: "38 min", revenue: 89.25 },
  { id: 12, capacity: 8, status: "available", currentOrder: null, timeOccupied: null },
  { id: 13, capacity: 2, status: "cleaning", currentOrder: null, timeOccupied: null },
  { id: 14, capacity: 4, status: "occupied", currentOrder: "#014", timeOccupied: "55 min", revenue: 156.80 },
  { id: 15, capacity: 6, status: "available", currentOrder: null, timeOccupied: null },
  { id: 16, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 17, capacity: 4, status: "reserved", currentOrder: null, timeOccupied: null, reservationTime: "9:00 PM" },
  { id: 18, capacity: 8, status: "available", currentOrder: null, timeOccupied: null },
];

export default function Tables() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "available":
        return {
          badge: <Badge variant="outline" className="border-success text-success">Available</Badge>,
          bgColor: "bg-success/10 border-success/30",
          textColor: "text-success"
        };
      case "occupied":
        return {
          badge: <Badge variant="destructive">Occupied</Badge>,
          bgColor: "bg-destructive/10 border-destructive/30",
          textColor: "text-destructive"
        };
      case "reserved":
        return {
          badge: <Badge className="bg-warning text-warning-foreground">Reserved</Badge>,
          bgColor: "bg-warning/10 border-warning/30",
          textColor: "text-warning"
        };
      case "cleaning":
        return {
          badge: <Badge className="bg-info text-info-foreground">Cleaning</Badge>,
          bgColor: "bg-info/10 border-info/30",
          textColor: "text-info"
        };
      default:
        return {
          badge: <Badge variant="outline">Unknown</Badge>,
          bgColor: "bg-muted/10 border-muted/30",
          textColor: "text-muted-foreground"
        };
    }
  };

  const availableTables = tables.filter(t => t.status === "available").length;
  const occupiedTables = tables.filter(t => t.status === "occupied").length;
  const reservedTables = tables.filter(t => t.status === "reserved").length;
  const totalRevenue = tables
    .filter(t => t.revenue)
    .reduce((sum, table) => sum + (table.revenue || 0), 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Table Management</h1>
          <p className="text-muted-foreground mt-1">
            Monitor table status and manage reservations.
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          New Reservation
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-success">{availableTables}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Occupied</p>
                <p className="text-2xl font-bold text-destructive">{occupiedTables}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Reserved</p>
                <p className="text-2xl font-bold text-warning">{reservedTables}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold text-primary">${totalRevenue.toFixed(2)}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table Layout */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Restaurant Floor Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-4 p-4">
            {tables.map((table) => {
              const statusInfo = getStatusInfo(table.status);
              const isSelected = selectedTable === table.id;
              
              return (
                <div
                  key={table.id}
                  onClick={() => setSelectedTable(table.id)}
                  className={`
                    relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                    ${statusInfo.bgColor}
                    ${isSelected ? 'ring-2 ring-primary scale-105' : 'hover:scale-102'}
                    card-hover
                  `}
                >
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-card border-2 border-current">
                      <span className="font-bold text-lg">{table.id}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">
                        {table.capacity} seats
                      </p>
                      {statusInfo.badge}
                    </div>

                    {table.status === "occupied" && (
                      <div className="space-y-1 text-xs">
                        <p className={statusInfo.textColor}>
                          {table.currentOrder}
                        </p>
                        <p className="text-muted-foreground">
                          {table.timeOccupied}
                        </p>
                        <p className="font-medium text-primary">
                          ${table.revenue?.toFixed(2)}
                        </p>
                      </div>
                    )}

                    {table.status === "reserved" && (
                      <div className="text-xs">
                        <p className={statusInfo.textColor}>
                          {table.reservationTime}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Table Details */}
      {selectedTable && (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Table {selectedTable} Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium mb-2">Status</h4>
                {getStatusInfo(tables.find(t => t.id === selectedTable)?.status || "").badge}
              </div>
              <div>
                <h4 className="font-medium mb-2">Capacity</h4>
                <p className="text-muted-foreground">
                  {tables.find(t => t.id === selectedTable)?.capacity} people
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Actions</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Assign Order</Button>
                  <Button size="sm" variant="outline">Mark Clean</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
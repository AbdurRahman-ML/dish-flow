import { useState } from "react";
import { Users, Clock, DollarSign, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { pakistaniTableNames } from "@/data/menuData";

const tables = [
  { id: 1, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 2, capacity: 4, status: "occupied", currentOrder: "#001", timeOccupied: { en: "45 min", ur: "45 منٹ" }, revenue: 3150 },
  { id: 3, capacity: 6, status: "reserved", currentOrder: null, timeOccupied: null, reservationTime: "7:30 PM" },
  { id: 4, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 5, capacity: 4, status: "occupied", currentOrder: "#005", timeOccupied: { en: "22 min", ur: "22 منٹ" }, revenue: 1850 },
  { id: 6, capacity: 8, status: "cleaning", currentOrder: null, timeOccupied: null },
  { id: 7, capacity: 2, status: "occupied", currentOrder: "#007", timeOccupied: { en: "15 min", ur: "15 منٹ" }, revenue: 1200 },
  { id: 8, capacity: 4, status: "available", currentOrder: null, timeOccupied: null },
  { id: 9, capacity: 6, status: "reserved", currentOrder: null, timeOccupied: null, reservationTime: "8:00 PM" },
  { id: 10, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 11, capacity: 4, status: "occupied", currentOrder: "#011", timeOccupied: { en: "38 min", ur: "38 منٹ" }, revenue: 2800 },
  { id: 12, capacity: 8, status: "available", currentOrder: null, timeOccupied: null },
  { id: 13, capacity: 2, status: "cleaning", currentOrder: null, timeOccupied: null },
  { id: 14, capacity: 4, status: "occupied", currentOrder: "#014", timeOccupied: { en: "55 min", ur: "55 منٹ" }, revenue: 4200 },
  { id: 15, capacity: 6, status: "available", currentOrder: null, timeOccupied: null },
  { id: 16, capacity: 2, status: "available", currentOrder: null, timeOccupied: null },
  { id: 17, capacity: 4, status: "reserved", currentOrder: null, timeOccupied: null, reservationTime: "9:00 PM" },
  { id: 18, capacity: 8, status: "available", currentOrder: null, timeOccupied: null },
];

export default function Tables() {
  const { language, t } = useLanguage();
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "available":
        return {
          badge: <Badge variant="outline" className="border-success text-success">{t('available')}</Badge>,
          bgColor: "bg-success/10 border-success/30",
          textColor: "text-success"
        };
      case "occupied":
        return {
          badge: <Badge variant="destructive">{t('occupied')}</Badge>,
          bgColor: "bg-destructive/10 border-destructive/30",
          textColor: "text-destructive"
        };
      case "reserved":
        return {
          badge: <Badge className="bg-warning text-warning-foreground">{t('reserved')}</Badge>,
          bgColor: "bg-warning/10 border-warning/30",
          textColor: "text-warning"
        };
      case "cleaning":
        return {
          badge: <Badge className="bg-info text-info-foreground">{t('cleaning')}</Badge>,
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
          <h1 className="text-3xl font-bold gradient-text">{t('tableManagement')}</h1>
          <p className="text-muted-foreground mt-1">
            {t('monitorTables')}
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          {t('newReservation')}
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('available')}</p>
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
                <p className="text-sm text-muted-foreground">{t('occupied')}</p>
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
                <p className="text-sm text-muted-foreground">{t('reserved')}</p>
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
                <p className="text-sm text-muted-foreground">{t('revenue')}</p>
                <p className="text-2xl font-bold text-primary">Rs. {totalRevenue.toFixed(0)}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Reservations */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {t('todaysReservations')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "12:00 PM", name: pakistaniTableNames[0], party: 4, table: 3, status: "confirmed" },
              { time: "1:30 PM", name: pakistaniTableNames[1], party: 6, table: 9, status: "confirmed" },
              { time: "7:30 PM", name: pakistaniTableNames[2], party: 2, table: 11, status: "pending" },
              { time: "8:00 PM", name: pakistaniTableNames[3], party: 8, table: 18, status: "confirmed" },
              { time: "9:00 PM", name: pakistaniTableNames[4], party: 4, table: 17, status: "pending" }
            ].map((reservation, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-semibold">{reservation.time}</div>
                  </div>
                  <div>
                    <div className="font-medium">{reservation.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {reservation.party} {t('guests')} • {t('table')} {reservation.table}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={reservation.status === "confirmed" ? "outline" : "secondary"}
                  className={reservation.status === "confirmed" ? "border-success text-success" : ""}
                >
                  {t(reservation.status)}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Table Layout */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>{t('restaurantFloorPlan')}</CardTitle>
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
                        {table.capacity} {t('seats')}
                      </p>
                      {statusInfo.badge}
                    </div>

                    {table.status === "occupied" && (
                      <div className="space-y-1 text-xs">
                        <p className={statusInfo.textColor}>
                          {table.currentOrder}
                        </p>
                        <p className="text-muted-foreground">
                          {table.timeOccupied?.[language]}
                        </p>
                        <p className="font-medium text-primary">
                          Rs. {table.revenue?.toFixed(0)}
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
          <CardTitle>{t('table')} {selectedTable} {t('tableDetails')}</CardTitle>
        </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium mb-2">{t('status')}</h4>
                {getStatusInfo(tables.find(t => t.id === selectedTable)?.status || "").badge}
              </div>
              <div>
                <h4 className="font-medium mb-2">{t('capacity')}</h4>
                <p className="text-muted-foreground">
                  {tables.find(t => t.id === selectedTable)?.capacity} {t('people')}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t('actions')}</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">{t('assignOrder')}</Button>
                  <Button size="sm" variant="outline">{t('markClean')}</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
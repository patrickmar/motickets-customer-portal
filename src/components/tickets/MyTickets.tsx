import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Ticket,
  Download,
  Calendar,
  Clock,
  MapPin,
  QrCode,
  User,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Mock ticket data
const upcomingTickets = [
  {
    id: 1,
    eventName: "Summer Music Festival 2024",
    date: "2024-07-15",
    time: "19:00",
    venue: "Central Park, New York",
    ticketType: "VIP",
    seatNumber: "Section A, Row 5, Seat 12",
    qrCode: "QR_CODE_VIP_001",
    status: "confirmed",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    eventName: "Tech Conference 2024",
    date: "2024-08-02",
    time: "09:00",
    venue: "Convention Center, San Francisco",
    ticketType: "Regular",
    seatNumber: "General Admission",
    qrCode: "QR_CODE_REG_002",
    status: "confirmed",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    eventName: "Food & Wine Expo",
    date: "2024-08-20",
    time: "11:00",
    venue: "Expo Hall, Los Angeles",
    ticketType: "Table",
    seatNumber: "Table 15",
    qrCode: "QR_CODE_TABLE_003",
    status: "confirmed",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
  },
];

const pastTickets = [
  {
    id: 4,
    eventName: "Jazz Night at Blue Note",
    date: "2024-06-20",
    time: "20:00",
    venue: "Blue Note Jazz Club, NYC",
    ticketType: "VIP",
    seatNumber: "Front Row Table 3",
    qrCode: "QR_CODE_PAST_004",
    status: "attended",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    eventName: "Art Gallery Opening",
    date: "2024-06-15",
    time: "18:00",
    venue: "Modern Art Museum, NYC",
    ticketType: "Regular",
    seatNumber: "General Admission",
    qrCode: "QR_CODE_PAST_005",
    status: "attended",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop",
  },
];

const cancelledTickets = [
  {
    id: 6,
    eventName: "Outdoor Concert (Cancelled)",
    date: "2024-06-30",
    time: "19:00",
    venue: "City Park, Boston",
    ticketType: "Regular",
    seatNumber: "General Admission",
    qrCode: "QR_CODE_CANCELLED_006",
    status: "cancelled",
    refundAmount: "$85.00",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=250&fit=crop",
  },
];

interface TicketCardProps {
  ticket: any;
  showRefund?: boolean;
}

function TicketCard({ ticket, showRefund = false }: TicketCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "attended":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTicketTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "vip":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "table":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "regular":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="overflow-hidden motickets-shadow hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={ticket.image}
            alt={ticket.eventName}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {ticket.eventName}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {ticket.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {ticket.time}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                {ticket.venue}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className={getTicketTypeColor(ticket.ticketType)}>
                  {ticket.ticketType}
                </Badge>
                <Badge
                  variant="outline"
                  className={getStatusColor(ticket.status)}
                >
                  {ticket.status}
                </Badge>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <QrCode className="h-10 w-10 text-gray-400" />
              </div>
              <span className="text-xs text-muted-foreground">QR Code</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm mb-4">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{ticket.seatNumber}</span>
          </div>

          {showRefund && ticket.refundAmount && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Refund Amount:</strong> {ticket.refundAmount}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {ticket.status === "confirmed" && (
              <>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button size="sm" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Add to Calendar
                </Button>
                <Button size="sm" variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  View Location
                </Button>
              </>
            )}

            {ticket.status === "attended" && (
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </Button>
            )}

            {ticket.status === "cancelled" && (
              <Button size="sm" variant="outline">
                View Refund Status
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function MyTickets() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary">My Tickets</h1>
        <p className="text-muted-foreground">
          Manage all your event tickets in one place
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <Ticket className="h-4 w-4" />
            Upcoming ({upcomingTickets.length})
          </TabsTrigger>
          <TabsTrigger value="past" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Past Events ({pastTickets.length})
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="flex items-center gap-2">
            <Badge className="h-4 w-4" />
            Cancelled ({cancelledTickets.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          {upcomingTickets.length > 0 ? (
            upcomingTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <Card className="p-8 text-center">
              <Ticket className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No upcoming tickets</h3>
              <p className="text-muted-foreground mb-4">
                You don&apos;t have any upcoming events. Browse events to get
                started!
              </p>
              <Button className="motickets-gradient">Browse Events</Button>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          {pastTickets.length > 0 ? (
            pastTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <Card className="p-8 text-center">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No past events</h3>
              <p className="text-muted-foreground">
                Your event history will appear here once you attend events.
              </p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-6">
          {cancelledTickets.length > 0 ? (
            cancelledTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} showRefund />
            ))
          ) : (
            <Card className="p-8 text-center">
              <Badge className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No cancelled tickets</h3>
              <p className="text-muted-foreground">
                Any cancelled or refunded tickets will appear here.
              </p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

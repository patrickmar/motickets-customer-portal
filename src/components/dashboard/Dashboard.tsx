import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription } from "../ui/alert";
import {
  Calendar,
  Clock,
  Star,
  Ticket,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Trophy,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

// Mock data
const upcomingEvents = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "2024-07-15",
    time: "19:00",
    countdown: "12 days",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    date: "2024-08-02",
    time: "09:00",
    countdown: "30 days",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Food & Wine Expo",
    date: "2024-08-20",
    time: "11:00",
    countdown: "48 days",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop",
  },
];

const recentPurchases = [
  {
    id: 1,
    event: "Jazz Night at Blue Note",
    date: "2024-06-20",
    ticketType: "VIP",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=100&fit=crop",
  },
  {
    id: 2,
    event: "Art Gallery Opening",
    date: "2024-06-15",
    ticketType: "General",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=150&h=100&fit=crop",
  },
];

const recommendations = [
  {
    id: 1,
    name: "Rock Concert Series",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Comedy Night Live",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Wine Tasting Event",
    price: "$65",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=150&fit=crop",
  },
];

export function Dashboard() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "info",
      title: "Event Update",
      message: "Summer Music Festival venue has been changed to Central Park.",
      dismissible: true,
    },
    {
      id: 2,
      type: "success",
      title: "Refund Processed",
      message:
        "Your refund for $120 has been processed and will appear in 3-5 business days.",
      dismissible: true,
    },
  ]);

  const [currentRecommendation, setCurrentRecommendation] = useState(0);

  const dismissAlert = (alertId: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== alertId));
  };

  const nextRecommendation = () => {
    setCurrentRecommendation((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentRecommendation(
      (prev) => (prev - 1 + recommendations.length) % recommendations.length
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your events
          </p>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <Alert key={alert.id} className="relative">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>{alert.title}:</strong> {alert.message}
              </AlertDescription>
              {alert.dismissible && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 h-6 w-6 p-0"
                  onClick={() => dismissAlert(alert.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </Alert>
          ))}
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Events Widget */}
        <Card className="lg:col-span-2 motickets-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Your next exciting experiences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center space-x-4 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{event.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-accent text-accent-foreground"
                  >
                    {event.countdown}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Loyalty Points Widget */}
        <Card className="motickets-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-accent" />
              MoLoyal Points
            </CardTitle>
            <CardDescription>Earn rewards with every purchase</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,450</div>
                <div className="text-sm text-muted-foreground">
                  Current Points
                </div>
              </div>
              <Progress value={68} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>550 points to next reward</span>
                <span>Gold Status</span>
              </div>
              <Button variant="outline" className="w-full">
                View Rewards
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Purchases Widget */}
        <Card className="motickets-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-primary" />
              Recent Purchases
            </CardTitle>
            <CardDescription>Your latest ticket purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPurchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="flex items-center space-x-3 p-2 rounded-lg border border-border"
                >
                  <img
                    src={purchase.image}
                    alt={purchase.event}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {purchase.event}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {purchase.date}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {purchase.ticketType}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Event Recommendations Carousel */}
        <Card className="lg:col-span-2 motickets-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              Recommended For You
            </CardTitle>
            <CardDescription>
              Events you might enjoy based on your preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevRecommendation}
                  disabled={recommendations.length <= 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextRecommendation}
                  disabled={recommendations.length <= 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={rec.id}
                    className={`space-y-3 transition-opacity duration-300 ${
                      index === currentRecommendation
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-full h-32 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-sm">{rec.name}</h4>
                      <p className="text-accent font-bold">{rec.price}</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full motickets-gradient"
                      disabled={index !== currentRecommendation}
                    >
                      Buy Ticket
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

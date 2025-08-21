"use client";
import { useState } from "react";
import { LoginForm } from "../components/auth/LoginForm";
import { SignupForm } from "../components/auth/SignupForm";
import { Sidebar } from "../components/layout/Sidebar";
import { Dashboard } from "../components/dashboard/Dashboard";
import { MyTickets } from "../components/tickets/MyTickets";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Star,
  Gift,
  User,
  CreditCard,
  Settings,
  Heart,
  Users,
  Bell,
  Mail,
  Lock,
  Plus,
  Trash2,
  MessageCircle,
  FileText,
  Search,
  Download,
  Filter,
  MoreVertical,
  Wallet,
  Calendar,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Smartphone,
  Copy,
  Share,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

interface PaymentMethodBase {
  id: number;
  type: "card" | "wallet";
  isDefault: boolean;
}

interface CardPaymentMethod extends PaymentMethodBase {
  type: "card";
  cardType: string; // Make this required for cards
  lastFour: string;
  expiryMonth: string;
  expiryYear: string;
}

interface WalletPaymentMethod extends PaymentMethodBase {
  type: "wallet";
  provider: string;
  email: string;
}

type PaymentMethod = CardPaymentMethod | WalletPaymentMethod;

export default function Home() {
  const [currentView, setCurrentView] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState<"login" | "signup" | "forgot">(
    "login"
  );
  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      type: "card",
      cardType: "Visa", // Now required
      lastFour: "4242",
      expiryMonth: "12",
      expiryYear: "26",
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      cardType: "Mastercard",
      lastFour: "8888",
      expiryMonth: "08",
      expiryYear: "25",
      isDefault: false,
    },
    {
      id: 3,
      type: "wallet",
      provider: "PayPal",
      email: "john.doe@email.com",
      isDefault: false,
    },
  ]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView("dashboard");
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentView("dashboard");
  };

  const handleSectionChange = (section: string) => {
    if (section === "login") {
      setIsAuthenticated(false);
      setCurrentView("login");
    } else {
      setCurrentView(section);
    }
  };

  const refundRequests = [
    {
      id: 1,
      eventName: "Outdoor Concert (Cancelled)",
      ticketId: "TKT-001",
      amount: "$85.00",
      requestDate: "2024-06-25",
      status: "approved",
      reason: "Event cancelled by organizer",
    },
    {
      id: 2,
      eventName: "Comedy Show",
      ticketId: "TKT-045",
      amount: "$45.00",
      requestDate: "2024-07-01",
      status: "pending",
      reason: "Unable to attend",
    },
    {
      id: 3,
      eventName: "Food Festival",
      ticketId: "TKT-022",
      amount: "$25.00",
      requestDate: "2024-06-20",
      status: "rejected",
      reason: "Refund policy violation",
    },
  ];

  const receipts = [
    {
      id: 1,
      eventName: "Summer Music Festival",
      ticketId: "TKT-789",
      amount: "$120.00",
      date: "2024-07-01",
      paymentMethod: "Visa ****4242",
      status: "paid",
    },
    {
      id: 2,
      eventName: "Jazz Night at Blue Note",
      ticketId: "TKT-456",
      amount: "$85.00",
      date: "2024-06-15",
      paymentMethod: "Mastercard ****8888",
      status: "paid",
    },
    {
      id: 3,
      eventName: "Art Gallery Opening",
      ticketId: "TKT-123",
      amount: "$35.00",
      date: "2024-06-10",
      paymentMethod: "PayPal",
      status: "paid",
    },
    {
      id: 4,
      eventName: "Tech Conference 2024",
      ticketId: "TKT-999",
      amount: "$150.00",
      date: "2024-05-20",
      paymentMethod: "Visa ****4242",
      status: "refunded",
    },
  ];

  // Mock reviews data
  const allReviews = [
    {
      id: 1,
      eventName: "Summer Music Festival",
      userName: "Sarah Johnson",
      rating: 5,
      date: "2024-07-02",
      review:
        "Absolutely incredible experience! The lineup was fantastic and the organization was top-notch.",
      helpful: 12,
      category: "Music",
    },
    {
      id: 2,
      eventName: "Tech Conference 2024",
      userName: "Mike Chen",
      rating: 4,
      date: "2024-08-03",
      review:
        "Great speakers and networking opportunities. The venue could have been better.",
      helpful: 8,
      category: "Conference",
    },
    {
      id: 3,
      eventName: "Food & Wine Expo",
      userName: "Emily Rodriguez",
      rating: 5,
      date: "2024-08-21",
      review:
        "Amazing variety of vendors and tastings. Definitely worth the price!",
      helpful: 15,
      category: "Food",
    },
    {
      id: 4,
      eventName: "Jazz Night at Blue Note",
      userName: "David Wilson",
      rating: 5,
      date: "2024-06-21",
      review:
        "Intimate venue with world-class musicians. The atmosphere was perfect.",
      helpful: 6,
      category: "Music",
    },
    {
      id: 5,
      eventName: "Art Gallery Opening",
      userName: "Lisa Thompson",
      rating: 3,
      date: "2024-06-16",
      review:
        "The art was beautiful but the venue was too crowded. Hard to enjoy the pieces.",
      helpful: 4,
      category: "Art",
    },
    {
      id: 6,
      eventName: "Comedy Show",
      userName: "Jason Miller",
      rating: 4,
      date: "2024-07-05",
      review:
        "Hilarious performance! The comedian really knew how to work the crowd.",
      helpful: 9,
      category: "Comedy",
    },
  ];

  // Add New Payment Method Modal Component
  const AddPaymentMethodModal = () => {
    const [paymentType, setPaymentType] = useState<"card" | "wallet">("card");
    const [cardData, setCardData] = useState({
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      holderName: "",
    });
    const [walletData, setWalletData] = useState({
      provider: "PayPal",
      email: "",
    });

    const handleAddPayment = () => {
      if (paymentType === "card") {
        const newCard = {
          id: paymentMethods.length + 1,
          type: "card" as const,
          cardType: "Visa", // This would be detected from card number in real app
          lastFour: cardData.cardNumber.slice(-4),
          expiryMonth: cardData.expiryMonth,
          expiryYear: cardData.expiryYear,
          isDefault: false,
        };
        setPaymentMethods((prev) => [...prev, newCard]);
      } else {
        const newWallet = {
          id: paymentMethods.length + 1,
          type: "wallet" as const,
          provider: walletData.provider,
          email: walletData.email,
          isDefault: false,
        };
        setPaymentMethods((prev) => [...prev, newWallet]);
      }
      setIsAddPaymentOpen(false);
      // Reset forms
      setCardData({
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        holderName: "",
      });
      setWalletData({ provider: "PayPal", email: "" });
    };

    return (
      <Dialog open={isAddPaymentOpen} onOpenChange={setIsAddPaymentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>
              Choose how you&apos;d like to pay for your tickets
            </DialogDescription>
          </DialogHeader>

          <Tabs
            value={paymentType}
            onValueChange={(value) =>
              setPaymentType(value as "card" | "wallet")
            }
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card">Credit Card</TabsTrigger>
              <TabsTrigger value="wallet">Digital Wallet</TabsTrigger>
            </TabsList>

            <TabsContent value="card" className="space-y-4 mt-4">
              <div>
                <Label>Card Number</Label>
                <Input
                  placeholder="1234 5678 9012 3456"
                  value={cardData.cardNumber}
                  onChange={(e) =>
                    setCardData((prev) => ({
                      ...prev,
                      cardNumber: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label>Cardholder Name</Label>
                <Input
                  placeholder="John Doe"
                  value={cardData.holderName}
                  onChange={(e) =>
                    setCardData((prev) => ({
                      ...prev,
                      holderName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label>Month</Label>
                  <Select
                    value={cardData.expiryMonth}
                    onValueChange={(value) =>
                      setCardData((prev) => ({
                        ...prev,
                        expiryMonth: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem
                          key={i + 1}
                          value={String(i + 1).padStart(2, "0")}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Year</Label>
                  <Select
                    value={cardData.expiryYear}
                    onValueChange={(value) =>
                      setCardData((prev) => ({
                        ...prev,
                        expiryYear: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="YY" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem
                          key={i}
                          value={String(new Date().getFullYear() + i).slice(-2)}
                        >
                          {String(new Date().getFullYear() + i).slice(-2)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>CVV</Label>
                  <Input
                    placeholder="123"
                    maxLength={4}
                    value={cardData.cvv}
                    onChange={(e) =>
                      setCardData((prev) => ({
                        ...prev,
                        cvv: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wallet" className="space-y-4 mt-4">
              <div>
                <Label>Wallet Provider</Label>
                <Select
                  value={walletData.provider}
                  onValueChange={(value) =>
                    setWalletData((prev) => ({
                      ...prev,
                      provider: value,
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PayPal">PayPal</SelectItem>
                    <SelectItem value="Apple Pay">Apple Pay</SelectItem>
                    <SelectItem value="Google Pay">Google Pay</SelectItem>
                    <SelectItem value="Venmo">Venmo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  placeholder="john.doe@email.com"
                  value={walletData.email}
                  onChange={(e) =>
                    setWalletData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsAddPaymentOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddPayment}
              className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500"
            >
              Add Payment Method
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  // Referral Program Section
  const ReferralSection = () => {
    const [referralStats] = useState({
      totalReferred: 12,
      successfulReferrals: 8,
      totalEarned: 240,
      pendingRewards: 60,
    });

    const [referralHistory] = useState([
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@email.com",
        status: "completed",
        reward: "$30",
        date: "2024-07-15",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@email.com",
        status: "completed",
        reward: "$30",
        date: "2024-07-10",
      },
      {
        id: 3,
        name: "Carol Davis",
        email: "carol@email.com",
        status: "pending",
        reward: "$30",
        date: "2024-07-20",
      },
      {
        id: 4,
        name: "David Wilson",
        email: "david@email.com",
        status: "completed",
        reward: "$30",
        date: "2024-07-05",
      },
    ]);

    const referralCode = "JOHN2024";
    const referralLink = `https://motickets.com/join?ref=${referralCode}`;

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      // In a real app, you'd show a toast notification here
    };

    const shareReferral = () => {
      if (navigator.share) {
        navigator.share({
          title: "Join MoTickets and save!",
          text: "Get $30 off your first ticket purchase with MoTickets!",
          url: referralLink,
        });
      } else {
        copyToClipboard(referralLink);
      }
    };

    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Referral Program</h1>
          <p className="text-muted-foreground mt-2">
            Earn rewards by inviting friends to MoTickets
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {referralStats.totalReferred}
              </div>
              <div className="text-sm text-muted-foreground">Total Invites</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">
                {referralStats.successfulReferrals}
              </div>
              <div className="text-sm text-muted-foreground">
                Successful Referrals
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent">
                ${referralStats.totalEarned}
              </div>
              <div className="text-sm text-muted-foreground">Total Earned</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600">
                ${referralStats.pendingRewards}
              </div>
              <div className="text-sm text-muted-foreground">
                Pending Rewards
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Referral Link */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share className="h-5 w-5 text-primary" />
                Share Your Referral Link
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Friends get $30 off their first purchase, you earn $30 for each
                successful referral!
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Your Referral Code</Label>
                <div className="flex gap-2 mt-1">
                  <Input value={referralCode} readOnly className="font-mono" />
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(referralCode)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label>Referral Link</Label>
                <div className="flex gap-2 mt-1">
                  <Input value={referralLink} readOnly className="text-sm" />
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(referralLink)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={shareReferral}
                >
                  <Share className="h-4 w-4 mr-2" />
                  Share Link
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    window.open(
                      `mailto:?subject=Join MoTickets and save!&body=Get $30 off your first ticket purchase: ${referralLink}`,
                      "_blank"
                    )
                  }
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Invite
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Share Your Link</h4>
                  <p className="text-sm text-muted-foreground">
                    Send your unique referral link to friends and family.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Friend Signs Up</h4>
                  <p className="text-sm text-muted-foreground">
                    They create an account and get $30 off their first purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-medium">You Earn Rewards</h4>
                  <p className="text-sm text-muted-foreground">
                    Earn $30 in MoTickets credit for each successful referral.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Referral History */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Referral History</CardTitle>
            <p className="text-sm text-muted-foreground">
              Track your referral progress
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {referralHistory.map((referral) => (
                <div
                  key={referral.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">{referral.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {referral.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-medium text-accent">
                        {referral.reward}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {referral.date}
                      </p>
                    </div>
                    <Badge
                      className={
                        referral.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {referral.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Preferences Section Component
  const PreferencesSection = () => {
    const [preferences, setPreferences] = useState({
      eventUpdates: {
        email: true,
        sms: false,
        push: true,
      },
      ticketDelivery: {
        email: true,
        sms: true,
        push: false,
      },
      promotions: {
        email: false,
        sms: false,
        push: true,
      },
      communicationMethod: "both", // email, sms, both
    });

    const updatePreference = (
      category: keyof typeof preferences,
      method: string,
      value: boolean
    ) => {
      setPreferences((prev) => ({
        ...prev,
        [category]: {
          ...(prev[category] as Record<string, boolean>), // Type assertion here
          [method]: value,
        },
      }));
    };

    return (
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-primary">
          Mobile & Email Preferences
        </h1>
        <p className="text-muted-foreground">
          Manage how you receive notifications and updates from MoTickets
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Notification Preferences */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notification Preferences
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Choose how you want to receive different types of notifications
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Updates */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <Label className="font-medium">Event Updates</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Notifications about event changes, cancellations, or important
                  announcements
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Email</span>
                    </div>
                    <Switch
                      checked={preferences.eventUpdates.email}
                      onCheckedChange={(checked) =>
                        updatePreference("eventUpdates", "email", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-green-600" />
                      <span className="text-sm">SMS</span>
                    </div>
                    <Switch
                      checked={preferences.eventUpdates.sms}
                      onCheckedChange={(checked) =>
                        updatePreference("eventUpdates", "sms", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Push</span>
                    </div>
                    <Switch
                      checked={preferences.eventUpdates.push}
                      onCheckedChange={(checked) =>
                        updatePreference("eventUpdates", "push", checked)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Ticket Delivery */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Label className="font-medium">Ticket Delivery</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  How you receive your tickets and confirmations
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Email</span>
                    </div>
                    <Switch
                      checked={preferences.ticketDelivery.email}
                      onCheckedChange={(checked) =>
                        updatePreference("ticketDelivery", "email", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-green-600" />
                      <span className="text-sm">SMS</span>
                    </div>
                    <Switch
                      checked={preferences.ticketDelivery.sms}
                      onCheckedChange={(checked) =>
                        updatePreference("ticketDelivery", "sms", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Push</span>
                    </div>
                    <Switch
                      checked={preferences.ticketDelivery.push}
                      onCheckedChange={(checked) =>
                        updatePreference("ticketDelivery", "push", checked)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Promotions */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-primary" />
                  <Label className="font-medium">Promotions & Offers</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Special deals, discounts, and promotional offers
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Email</span>
                    </div>
                    <Switch
                      checked={preferences.promotions.email}
                      onCheckedChange={(checked) =>
                        updatePreference("promotions", "email", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-green-600" />
                      <span className="text-sm">SMS</span>
                    </div>
                    <Switch
                      checked={preferences.promotions.sms}
                      onCheckedChange={(checked) =>
                        updatePreference("promotions", "sms", checked)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Push</span>
                    </div>
                    <Switch
                      checked={preferences.promotions.push}
                      onCheckedChange={(checked) =>
                        updatePreference("promotions", "push", checked)
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication Method & Additional Settings */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Preferred Communication Method
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Choose your default communication preference
                </p>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={preferences.communicationMethod}
                  onValueChange={(value) =>
                    setPreferences((prev) => ({
                      ...prev,
                      communicationMethod: value,
                    }))
                  }
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="email" id="email" />
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <Label htmlFor="email" className="cursor-pointer">
                        Email Only
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="sms" id="sms" />
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-green-600" />
                      <Label htmlFor="sms" className="cursor-pointer">
                        SMS Only
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="both" id="both" />
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <Smartphone className="h-4 w-4 text-green-600 -ml-1" />
                      </div>
                      <Label htmlFor="both" className="cursor-pointer">
                        Both Email & SMS
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Update your contact details for notifications
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Email Address</Label>
                  <Input defaultValue="john.doe@email.com" className="mt-1" />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input defaultValue="+1 (555) 123-4567" className="mt-1" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Verified</Label>
                    <p className="text-sm text-muted-foreground">
                      Your email is verified
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Phone Verified</Label>
                    <p className="text-sm text-muted-foreground">
                      Verify your phone number
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Quiet Hours</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Set times when you don't want to receive notifications
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Enable Quiet Hours</Label>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Start Time</Label>
                    <Input type="time" defaultValue="22:00" className="mt-1" />
                  </div>
                  <div>
                    <Label>End Time</Label>
                    <Input type="time" defaultValue="08:00" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500">
            Save Preferences
          </Button>
        </div>
      </div>
    );
  };

  // Payment & Refunds Section Component
  const PaymentSection = () => {
    const [receiptFilter, setReceiptFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const getStatusIcon = (status: string) => {
      switch (status) {
        case "approved":
          return <CheckCircle className="h-4 w-4 text-green-600" />;
        case "pending":
          return <Clock className="h-4 w-4 text-yellow-600" />;
        case "rejected":
          return <XCircle className="h-4 w-4 text-red-600" />;
        default:
          return null;
      }
    };

    const getStatusColor = (status: string) => {
      switch (status) {
        case "approved":
          return "bg-green-100 text-green-800";
        case "pending":
          return "bg-yellow-100 text-yellow-800";
        case "rejected":
          return "bg-red-100 text-red-800";
        case "paid":
          return "bg-green-100 text-green-800";
        case "refunded":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    const getCardIcon = (cardType: string) => {
      // In a real app, you'd use actual card brand icons
      return <CreditCard className="h-6 w-6" />;
    };

    const filteredReceipts = receipts.filter((receipt) => {
      const matchesFilter =
        receiptFilter === "all" || receipt.status === receiptFilter;
      const matchesSearch =
        receipt.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        receipt.ticketId.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    return (
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-primary">Payment & Refunds</h1>

        <Tabs defaultValue="payment-methods" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="payment-methods"
              className="flex items-center gap-2"
            >
              <CreditCard className="h-4 w-4" />
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="refunds" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Refund Requests
            </TabsTrigger>
            <TabsTrigger value="receipts" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Receipts
            </TabsTrigger>
          </TabsList>

          {/* Payment Methods Tab */}
          <TabsContent value="payment-methods" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Saved Payment Methods</h2>
              <Button
                className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500"
                onClick={() => setIsAddPaymentOpen(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Card/Wallet
              </Button>
            </div>

            <div className="grid gap-4">
              {paymentMethods.map((method) => (
                <Card key={method.id} className="shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {method.type === "card" ? (
                          <div className="p-2 bg-gray-100 rounded-lg">
                            {getCardIcon(method.cardType)}
                          </div>
                        ) : (
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Wallet className="h-6 w-6 text-blue-600" />
                          </div>
                        )}

                        <div>
                          {method.type === "card" ? (
                            <>
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">
                                  {method.cardType} ****
                                  {method.lastFour}
                                </h4>
                                {method.isDefault && (
                                  <Badge
                                    variant="outline"
                                    className="bg-primary/10 text-primary border-primary/20"
                                  >
                                    Default
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Expires {method.expiryMonth}/{method.expiryYear}
                              </p>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">
                                  {method.provider}
                                </h4>
                                {method.isDefault && (
                                  <Badge
                                    variant="outline"
                                    className="bg-primary/10 text-primary border-primary/20"
                                  >
                                    Default
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {method.email}
                              </p>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {!method.isDefault && (
                          <Button variant="outline" size="sm">
                            Set as Default
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Refund Requests Tab */}
          <TabsContent value="refunds" className="space-y-6">
            <h2 className="text-xl font-semibold">Refund Requests</h2>

            <div className="space-y-4">
              {refundRequests.map((refund) => (
                <Card key={refund.id} className="shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-medium">{refund.eventName}</h4>
                          <Badge className={getStatusColor(refund.status)}>
                            <div className="flex items-center gap-1">
                              {getStatusIcon(refund.status)}
                              {refund.status.charAt(0).toUpperCase() +
                                refund.status.slice(1)}
                            </div>
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Ticket ID:</span>{" "}
                            {refund.ticketId}
                          </div>
                          <div>
                            <span className="font-medium">Amount:</span>{" "}
                            {refund.amount}
                          </div>
                          <div>
                            <span className="font-medium">Request Date:</span>{" "}
                            {refund.requestDate}
                          </div>
                          <div className="md:col-span-1 col-span-2">
                            <span className="font-medium">Reason:</span>{" "}
                            {refund.reason}
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Receipts Tab */}
          <TabsContent value="receipts" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-xl font-semibold">Purchase Receipts</h2>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search receipts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>

                <Select value={receiptFilter} onValueChange={setReceiptFilter}>
                  <SelectTrigger className="w-full sm:w-32">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="refunded">Refunded</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredReceipts.map((receipt) => (
                <Card key={receipt.id} className="shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-medium">{receipt.eventName}</h4>
                          <Badge className={getStatusColor(receipt.status)}>
                            {receipt.status.charAt(0).toUpperCase() +
                              receipt.status.slice(1)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Ticket ID:</span>{" "}
                            {receipt.ticketId}
                          </div>
                          <div>
                            <span className="font-medium">Amount:</span>{" "}
                            {receipt.amount}
                          </div>
                          <div>
                            <span className="font-medium">Date:</span>{" "}
                            {receipt.date}
                          </div>
                          <div>
                            <span className="font-medium">Payment:</span>{" "}
                            {receipt.paymentMethod}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredReceipts.length === 0 && (
                <Card className="p-8 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No receipts found
                  </h3>
                  <p className="text-muted-foreground">
                    {searchTerm || receiptFilter !== "all"
                      ? "Try adjusting your search or filter criteria."
                      : "Your purchase receipts will appear here."}
                  </p>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <AddPaymentMethodModal />
      </div>
    );
  };

  // Reviews Section with Browse Reviews functionality
  const ReviewsSection = () => {
    const [reviewFilter, setReviewFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const filteredReviews = allReviews
      .filter((review) => {
        const matchesFilter =
          reviewFilter === "all" ||
          review.category.toLowerCase() === reviewFilter.toLowerCase();
        const matchesSearch =
          review.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.review.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          case "oldest":
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          case "rating":
            return b.rating - a.rating;
          case "helpful":
            return b.helpful - a.helpful;
          default:
            return 0;
        }
      });

    const renderStars = (rating: number) => {
      return Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-current text-yellow-400" : "text-gray-300"
          }`}
        />
      ));
    };

    return (
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-primary">Reviews & Feedback</h1>

        <Tabs defaultValue="leave-review" className="space-y-6">
          <TabsList>
            <TabsTrigger value="leave-review">Leave Review</TabsTrigger>
            <TabsTrigger value="my-reviews">My Reviews</TabsTrigger>
            <TabsTrigger value="browse-reviews">Browse Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="leave-review">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Leave a Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Select Event</Label>
                  <select className="w-full mt-1 p-2 border rounded-lg">
                    <option>Jazz Night at Blue Note</option>
                    <option>Art Gallery Opening</option>
                  </select>
                </div>
                <div>
                  <Label>Rating</Label>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-6 w-6 fill-current text-yellow-400 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Your Review</Label>
                  <Textarea
                    placeholder="Share your experience..."
                    className="mt-1"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500">
                  Submit Review
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-reviews">
            <div className="space-y-4">
              {[1, 2].map((review) => (
                <Card key={review} className="shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">Jazz Night at Blue Note</h4>
                        <div className="flex gap-1 my-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Amazing atmosphere and incredible music! The venue was
                          perfect.
                        </p>
                      </div>
                      <Badge variant="outline">June 20, 2024</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="browse-reviews" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-xl font-semibold">Community Reviews</h2>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>

                <Select value={reviewFilter} onValueChange={setReviewFilter}>
                  <SelectTrigger className="w-full sm:w-32">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="comedy">Comedy</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="art">Art</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-32">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="helpful">Most Helpful</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <Card key={review.id} className="shadow-lg">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{review.eventName}</h4>
                            <p className="text-sm text-muted-foreground">
                              by {review.userName}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-1">
                              {review.category}
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                              {review.date}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1">
                          {renderStars(review.rating)}
                        </div>

                        <p className="text-sm">{review.review}</p>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{review.helpful} found this helpful</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              👍 Helpful
                            </Button>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No reviews found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm || reviewFilter !== "all"
                      ? "Try adjusting your search or filter criteria."
                      : "Be the first to leave a review!"}
                  </p>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  const LoyaltySection = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Promo Codes & Loyalty</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-accent" />
              Enter Promo Code
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Enter code" />
              <Button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500">
                Apply
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Active Codes</h4>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-mono">SUMMER20</span>
                  <Badge className="bg-green-100 text-green-800">20% Off</Badge>
                </div>
                <p className="text-sm text-green-700">
                  Valid until Aug 31, 2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>MoLoyal Points</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,450</div>
              <div className="text-sm text-muted-foreground">
                Available Points
              </div>
            </div>
            <Progress value={68} className="h-3" />
            <div className="text-center text-sm text-muted-foreground">
              550 points to Gold Status
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 border rounded-lg text-center">
                <div className="font-bold">$5 Off</div>
                <div className="text-xs text-muted-foreground">500 pts</div>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <div className="font-bold">$10 Off</div>
                <div className="text-xs text-muted-foreground">1000 pts</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ProfileSection = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Profile Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input defaultValue="John" />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input defaultValue="Doe" />
              </div>
            </div>
            <div>
              <Label>Email</Label>
              <Input defaultValue="john.doe@email.com" />
            </div>
            <div>
              <Label>Phone</Label>
              <Input defaultValue="+1 (555) 123-4567" />
            </div>
            <Button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500">
              Update Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Favorite Event Genres</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Music", "Comedy", "Sports", "Arts", "Food & Drink"].map(
                  (genre) => (
                    <Badge
                      key={genre}
                      variant="outline"
                      className="cursor-pointer"
                    >
                      {genre}
                    </Badge>
                  )
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label>Newsletter Subscription</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label>Event Recommendations</Label>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const SupportSection = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Support & Help</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Subject</Label>
              <Input placeholder="How can we help?" />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea placeholder="Describe your issue..." />
            </div>
            <Button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500 w-full">
              Send Message
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Or start a live chat
            </div>
            <Button variant="outline" className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Live Chat
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "How do I refund my ticket?",
              "Can I transfer my ticket to someone else?",
              "What if the event is cancelled?",
              "How do I download my ticket?",
            ].map((faq, index) => (
              <div
                key={index}
                className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
              >
                <p className="text-sm">{faq}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const SecuritySection = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Security Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Password & Authentication</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security
                </p>
              </div>
              <Switch />
            </div>
            <Button variant="outline" className="w-full">
              <Lock className="h-4 w-4 mr-2" />
              Change Password
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Login History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              {
                device: "Chrome on MacBook",
                location: "New York, US",
                time: "2 hours ago",
              },
              {
                device: "iPhone App",
                location: "New York, US",
                time: "1 day ago",
              },
              {
                device: "Chrome on Windows",
                location: "Boston, US",
                time: "3 days ago",
              },
            ].map((login, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium">{login.device}</p>
                  <p className="text-xs text-muted-foreground">
                    {login.location}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {login.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const WishlistSection = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="shadow-lg overflow-hidden">
            <img
              src={`https://images.unsplash.com/photo-${
                item === 1
                  ? "1470229722913-7c0e2dbbafd3"
                  : item === 2
                  ? "1540575467063-178a50c2df87"
                  : item === 3
                  ? "1414235077428-338989a2e8c0"
                  : "1493225457124-a3eb161ffa5f"
              }?w=300&h=200&fit=crop`}
              alt="Event"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Future Event {item}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Coming soon...
              </p>
              <div className="flex justify-between items-center">
                <Button size="sm" variant="outline">
                  <Heart className="h-4 w-4 mr-2 fill-current text-red-500" />
                  Saved
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500"
                >
                  Get Notified
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        {authView === "login" && (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToSignup={() => setAuthView("signup")}
            onForgotPassword={() => setAuthView("forgot")}
          />
        )}
        {authView === "signup" && (
          <SignupForm
            onSignup={handleSignup}
            onSwitchToLogin={() => setAuthView("login")}
          />
        )}
        {authView === "forgot" && (
          <Card className="w-full max-w-md mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">
                Reset Password
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Enter your email to receive reset instructions
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-700 hover:to-blue-500">
                Send Reset Link
              </Button>
              <div className="text-center">
                <button
                  onClick={() => setAuthView("login")}
                  className="text-sm text-primary hover:underline"
                >
                  Back to Login
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "tickets":
        return <MyTickets />;
      case "reviews":
        return <ReviewsSection />;
      case "loyalty":
        return <LoyaltySection />;
      case "profile":
        return <ProfileSection />;
      case "payment":
        return <PaymentSection />;
      case "support":
        return <SupportSection />;
      case "security":
        return <SecuritySection />;
      case "preferences":
        return <PreferencesSection />;
      case "wishlist":
        return <WishlistSection />;
      case "referral":
        return <ReferralSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar
          activeSection={currentView}
          onSectionChange={handleSectionChange}
        />
        <main className="flex-1 md:ml-0">{renderContent()}</main>
      </div>
    </div>
  );
}

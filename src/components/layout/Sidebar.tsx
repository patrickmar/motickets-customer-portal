import {
  Home,
  Ticket,
  Star,
  Gift,
  User,
  CreditCard,
  HelpCircle,
  Shield,
  Settings,
  Heart,
  Users,
  Menu,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useState } from "react";
import Image from "next/image";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  className?: string;
}

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "tickets", label: "My Tickets", icon: Ticket },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "loyalty", label: "Promo & Loyalty", icon: Gift },
  { id: "profile", label: "Profile", icon: User },
  { id: "payment", label: "Payment & Refunds", icon: CreditCard },
  { id: "support", label: "Support & Help", icon: HelpCircle },
  { id: "security", label: "Security", icon: Shield },
  { id: "preferences", label: "Preferences", icon: Settings },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "referral", label: "Referral Program", icon: Users },
];

export function Sidebar({
  activeSection,
  onSectionChange,
  className,
}: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-64 h-12 bg-white rounded-lg flex items-center justify-center">
            {/* <Ticket className="h-5 w-5 text-primary-foreground" /> */}
            <Image
              width={72}
              height={12}
              src={"/images/logo2.png"}
              alt="logo"
            />
          </div>
          {/* <span className="text-xl font-bold text-primary">MoTickets</span> */}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-12",
                activeSection === item.id
                  ? "motickets-gradient text-primary-foreground"
                  : ""
              )}
              onClick={() => {
                onSectionChange(item.id);
                setIsMobileOpen(false);
              }}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onSectionChange("login")}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <Menu className="h-4 w-4" />
        )}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex w-72 bg-card border-r border-border",
          className
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-72 bg-card border-r border-border transform transition-transform duration-200 ease-in-out md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}

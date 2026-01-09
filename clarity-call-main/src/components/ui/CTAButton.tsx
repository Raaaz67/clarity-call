import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
  showIcon?: boolean;
  onClick?: () => void;
}

const CTAButton = ({ 
  children, 
  className, 
  size = "lg", 
  showIcon = true,
  onClick 
}: CTAButtonProps) => {
  const handleClick = () => {
    console.log("Book call clicked - integrate Calendly here");
    onClick?.();
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "bg-primary hover:bg-primary/90 text-primary-foreground font-bold",
        "shadow-cta hover:shadow-lg transition-all duration-300",
        "hover:scale-[1.02] active:scale-[0.98]",
        size === "lg" && "px-8 py-6 text-lg min-h-[56px]",
        size === "default" && "px-6 py-4 text-base min-h-[48px]",
        className
      )}
    >
      {showIcon && <Phone className="w-5 h-5 mr-2" />}
      {children}
    </Button>
  );
};

export default CTAButton;

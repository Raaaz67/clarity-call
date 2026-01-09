import CTAButton from "@/components/ui/CTAButton";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-lavender/30">
      <div className="container-wide py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-accent leading-tight mb-8 animate-fade-in-up text-balance">
            Finally understand where every pound in your business is actually going — in under 48 hours.
          </h1>

          {/* Video Placeholder */}
          <div 
            className="relative aspect-video max-w-3xl mx-auto rounded-2xl bg-card shadow-lg overflow-hidden mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors cursor-pointer group">
                  <Play className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  [VSL Embedded Here - Replace with actual video embed]
                </p>
              </div>
            </div>
          </div>

          {/* Below Video Text */}
          <p 
            className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            This short video explains what you'll receive, how it works, and whether this free audit is right for your business.
          </p>

          {/* CTA Button */}
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CTAButton size="lg">
              Book Your Free 15-Minute Call
            </CTAButton>
            
            {/* Small Note */}
            <p className="text-warm-grey text-sm mt-4">
              No credit card. No software required. No obligation.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

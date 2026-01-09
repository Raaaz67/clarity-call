import { TrendingUp, Shield } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

const outcomes = [
  {
    icon: Shield,
    title: "Worst case?",
    description: "You get a free snapshot of your finances and know exactly where your money is going."
  },
  {
    icon: TrendingUp,
    title: "Best case?",
    description: "You find money you didn't know you were wasting, improve your margins, and start making decisions with confidence instead of guesswork."
  }
];

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-accent via-accent to-midnight text-accent-foreground">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
            Ready to finally understand your numbers?
          </h2>
          <p className="text-xl text-accent-foreground/80">
            Two possible outcomes:
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="bg-accent-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-accent-foreground/20 hover:bg-accent-foreground/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-foreground/20 flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-heading mb-3">{outcome.title}</h3>
              <p className="text-accent-foreground/80 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <CTAButton 
            size="lg" 
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 shadow-lg"
          >
            Book Your Free Financial Snapshot Call
          </CTAButton>
          <p className="text-accent-foreground/60 text-sm mt-4">
            Limited slots available — every audit is personally reviewed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

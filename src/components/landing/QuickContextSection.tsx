import { Sparkles, Gift } from "lucide-react";

const QuickContextSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">
            Still unsure where your money is actually going?
          </h2>
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed prose-limit mx-auto">
            Most business owners aren't bad with money — they just lack clarity. We help small businesses uncover hidden costs, financial blind spots, and missing structure with a simple, human-led mini financial audit.
          </p>
        </div>

        {/* Highlight Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* What You Get */}
          <div className="bg-lavender/30 rounded-xl p-8 border border-lavender/50 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading text-accent">What you get</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              A clear visual breakdown of your spending, cash flow insights, profitability observations, and actionable quick wins — all within 48 hours.
            </p>
          </div>

          {/* What We Ask */}
          <div className="bg-lavender/30 rounded-xl p-8 border border-lavender/50 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-heading text-accent">What we ask</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Just a written review in return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContextSection;

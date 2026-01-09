import { Star } from "lucide-react";

const WhatWeAskSection = () => {
  return (
    <section className="section-padding bg-lavender/20">
      <div className="container-narrow">
        <div className="text-center">
          {/* Star Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Star className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-heading text-accent mb-4">
            Just one thing: a written review.
          </h2>
          
          <p className="text-2xl md:text-3xl font-heading text-primary/80 mb-8">
            That's it.
          </p>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              We're a new business, and having real written reviews of our work is incredibly valuable. If this audit helps you — whether that's finding a cost to cut, improving a margin, or just giving you peace of mind — we'd appreciate a quick review about what you found useful.
            </p>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <p className="text-foreground/90 leading-relaxed">
                <span className="font-semibold">No credit card. No upsell call. No pressure</span> to work together after. If you want deeper support later — monthly bookkeeping, regular reports, full financial clarity — we can talk then. But there's <span className="font-semibold text-primary">zero obligation</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAskSection;

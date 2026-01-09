import { Check, X } from "lucide-react";

const goodFit = [
  "Run a small or online business",
  "Feel unsure about your numbers — even though revenue is coming in",
  "Want clarity without accounting jargon or complicated dashboards",
  "Prefer human insight over software you never log into",
  "Are open to feedback and want to make smarter financial decisions"
];

const notFor = [
  "Tax filing or compliance work",
  "Large enterprises with complex structures",
  "Businesses looking for a full financial overhaul (yet)"
];

const WhoIsForSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-accent">
            Is this right for you?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Good Fit */}
          <div className="bg-success/5 rounded-2xl p-8 border border-success/20">
            <h3 className="text-xl font-heading text-accent mb-6">
              This is a good fit if you:
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20">
            <h3 className="text-xl font-heading text-accent mb-6">
              This is NOT designed for:
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;

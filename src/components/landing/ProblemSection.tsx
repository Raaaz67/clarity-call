import { Tag, TrendingDown, HelpCircle, FileX } from "lucide-react";

const problems = [
  {
    icon: Tag,
    text: "Transactions that aren't categorized properly — so reports don't tell the real story"
  },
  {
    icon: TrendingDown,
    text: "Expenses that quietly creep up — subscriptions, tools, fees you forgot about"
  },
  {
    icon: HelpCircle,
    text: "Cash flow that feels unpredictable — even when revenue looks good"
  },
  {
    icon: FileX,
    text: "Financial reports that are missing, outdated, or just... never looked at"
  }
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-accent mb-4">
            You're making money. But do you actually know where it's going?
          </h2>
          <p className="text-muted-foreground text-lg">
            Here's what we see all the time:
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/15 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-foreground/90 leading-relaxed pt-2">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="bg-accent/5 rounded-2xl p-8 border border-accent/10">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              The result? Decisions get delayed. Or worse — made on gut feel instead of actual data.
            </p>
            <p className="text-xl md:text-2xl font-heading text-primary mt-4">
              You don't have a money problem. You have a clarity problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

import { Search, PieChart, TrendingUp, BarChart3, Lightbulb, AlertCircle } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

const auditItems = [
  {
    icon: Search,
    area: "Transaction Review",
    description: "Spot messy or uncategorized transactions that are hiding your real numbers"
  },
  {
    icon: PieChart,
    area: "Spending Breakdown",
    description: "Visual pie chart of your top 3–5 expense categories — see where your money actually goes"
  },
  {
    icon: TrendingUp,
    area: "Cash Flow Comments",
    description: 'Insights like "Your expenses are outpacing income by 18%" — the kind your bank doesn\'t give you'
  },
  {
    icon: BarChart3,
    area: "Profitability Snapshot",
    description: 'Quick observations like "Gross profit margin appears low based on X" — so you know if your margins are healthy or tight'
  },
  {
    icon: Lightbulb,
    area: "Quick Wins",
    description: 'Immediate actions you can take this week — like "You\'re paying for two invoicing tools"'
  },
  {
    icon: AlertCircle,
    area: "What You're Missing",
    description: 'Gaps like "No financial reports in last 3 months" — so you know what needs attention'
  }
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-lavender/20">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-accent mb-4">
            The ZoroFlow Mini Financial Audit
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            A surface-level financial review designed to give you clarity — fast.
          </p>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            This isn't full bookkeeping. It's not tax preparation. It's a financial health check that shows you exactly what's working, what's not, and what's costing you money without you realizing it.
          </p>
        </div>

        {/* Audit Items Table - Mobile Cards / Desktop Table */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {auditItems.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-accent">{item.area}</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-card rounded-2xl shadow-md overflow-hidden border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-accent/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-bold text-accent uppercase tracking-wide">
                    Area
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-accent uppercase tracking-wide">
                    What You Get
                  </th>
                </tr>
              </thead>
              <tbody>
                {auditItems.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border last:border-0 hover:bg-lavender/10 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-accent">{item.area}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-foreground/80">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Note */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-center text-muted-foreground text-sm leading-relaxed bg-card rounded-xl p-6 border border-border">
            <span className="font-semibold text-foreground">Important:</span> This is a surface-level review. With full bookkeeping, we'd deliver this level of clarity monthly — plus visual reports and financial structure that lets you focus on growth instead of guesswork.
          </p>
        </div>

        {/* Mid-page CTA */}
        <div className="text-center mt-12">
          <CTAButton size="lg">
            Book Your Free 15-Minute Call
          </CTAButton>
          <p className="text-warm-grey text-sm mt-3">
            No cost. No catch. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

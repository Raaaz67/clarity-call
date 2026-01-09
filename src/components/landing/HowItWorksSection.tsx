import { Calendar, Upload, FileCheck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Calendar,
    title: "Book a short 15-minute call",
    description: "We'll confirm you're a good fit and explain exactly what we need from you (just a transaction export — no cleaning required)."
  },
  {
    number: "2",
    icon: Upload,
    title: "Send us your last 60–90 days of transactions",
    description: "You don't have to organize anything. That's our job."
  },
  {
    number: "3",
    icon: FileCheck,
    title: "Receive your mini audit within 48 hours",
    description: "A clear, visual breakdown of your finances — plus a quick walkthrough if you have questions."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-accent">
            Here's exactly what happens next:
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line - Hidden on Mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
                )}
                
                <div className="text-center group">
                  {/* Step Number */}
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/15 transition-colors">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading text-accent mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

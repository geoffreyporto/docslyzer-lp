import { Link } from "react-router-dom";
import { Zap, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Day 1 Ready",
    subtitle: "AI Accuracy",
    href: "/demo",
  },
  {
    icon: Zap,
    title: "Blazing",
    subtitle: "Fast APIs",
    href: "/demo",
  },
  {
    icon: Shield,
    title: "Secure",
    subtitle: "SOC 2 Type II",
    href: "/security",
  },
];

const WhyVeryfi = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Link
            to="/why-veryfi"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
          >
            Why Veryfi
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Link
              key={benefit.title}
              to={benefit.href}
              className="group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
              <p className="text-xl text-muted-foreground mt-1">{benefit.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVeryfi;

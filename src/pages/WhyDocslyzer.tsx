import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Check, X, Zap, Shield, Sparkles, Clock, Code, Globe } from "lucide-react";

const advantages = [
  { icon: Sparkles, title: "Day 1 Ready Accuracy", desc: "Pre-trained models deliver 99%+ accuracy out of the box. No templates, no training, no maintenance." },
  { icon: Zap, title: "Blazing Fast APIs", desc: "Sub-3-second processing times. Real-time extraction for receipts, invoices, and 30+ document types." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II, GDPR, HIPAA, and CCPA compliant. No humans in the loop—ever." },
  { icon: Clock, title: "Ship in Hours, Not Months", desc: "Free SDKs in 12+ languages, Postman collections, and sandbox environments." },
  { icon: Code, title: "Developer-First", desc: "RESTful APIs, webhooks, and comprehensive documentation built by developers, for developers." },
  { icon: Globe, title: "Global Coverage", desc: "Support for 50+ countries, multiple currencies, and multilingual documents." },
];

const comparison = [
  { feature: "Pre-trained models (no setup)", docslyzer: true, others: false },
  { feature: "Real-time processing (<3s)", docslyzer: true, others: false },
  { feature: "No human-in-the-loop", docslyzer: true, others: false },
  { feature: "SOC 2 Type II certified", docslyzer: true, others: false },
  { feature: "30+ document types", docslyzer: true, others: false },
  { feature: "Free SDKs (12+ languages)", docslyzer: true, others: false },
  { feature: "Fraud detection built-in", docslyzer: true, others: false },
  { feature: "Edge processing (on-device)", docslyzer: true, others: false },
];

const WhyDocslyzer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Why Choose Docslyzer?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The only Document AI platform that delivers production-grade accuracy from day one—no templates, no training, no humans in the loop.
            </p>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <a.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Docslyzer vs. Traditional OCR</h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 p-4 text-sm font-semibold">
                <span className="text-foreground">Feature</span>
                <span className="text-primary text-center">Docslyzer</span>
                <span className="text-muted-foreground text-center">Others</span>
              </div>
              {comparison.map((row) => (
                <div key={row.feature} className="grid grid-cols-3 p-4 border-t border-border text-sm">
                  <span className="text-foreground">{row.feature}</span>
                  <span className="text-center">{row.docslyzer ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />}</span>
                  <span className="text-center">{row.others ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience the Difference</h2>
            <p className="text-muted-foreground mb-8">Try Docslyzer free—no credit card required.</p>
            <div className="flex justify-center gap-4">
              <Link to="/demo" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Try Free Demo
              </Link>
              <Link to="/pricing" className="border border-border text-foreground px-8 py-3 rounded-full font-medium hover:border-primary/50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyDocslyzer;

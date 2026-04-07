import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Code, Layers, Zap, Settings, ArrowRight } from "lucide-react";

const features = [
  { icon: Code, title: "White-Label Solution", desc: "Embed Docslyzer's document processing directly into your product under your own brand." },
  { icon: Layers, title: "Pre-Built UI Components", desc: "Drop-in React components for document capture, review, and data visualization." },
  { icon: Zap, title: "API-First Architecture", desc: "Full REST API access with webhooks for real-time processing notifications." },
  { icon: Settings, title: "Custom Configuration", desc: "Configure extraction fields, validation rules, and output formats to match your workflow." },
];

const useCases = [
  { title: "Expense Management", desc: "Embed receipt scanning into your expense app for automatic data extraction." },
  { title: "Accounting Software", desc: "Add invoice processing capabilities to streamline accounts payable." },
  { title: "Banking Apps", desc: "Integrate check deposit and document verification into mobile banking." },
  { title: "Insurance Platforms", desc: "Automate claims processing with embedded document capture and extraction." },
];

const Embedded = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Embedded Solutions</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Embed Document AI Into Your Product
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                White-label Docslyzer's powerful document processing capabilities directly into your application. Your brand, our AI.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Contact Sales
                </Link>
                <Link to="/demo" className="border border-border text-foreground px-6 py-3 rounded-full font-medium hover:border-primary/50 transition-colors">
                  See Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-base font-bold text-foreground mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Embed?</h2>
            <p className="text-muted-foreground mb-8">Talk to our solutions team about embedding Docslyzer into your product.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Embedded;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { GitBranch, Zap, FileText, Mail, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  { icon: FileText, title: "Document Intake", desc: "Capture documents from email, mobile, web upload, or API." },
  { icon: Zap, title: "AI Processing", desc: "Automatic classification, data extraction, and validation." },
  { icon: GitBranch, title: "Route & Approve", desc: "Conditional routing, approval chains, and exception handling." },
  { icon: Mail, title: "Export & Notify", desc: "Push data to your ERP, accounting software, or custom endpoint." },
];

const templates = [
  "Expense Report Automation",
  "Invoice Processing Pipeline",
  "Receipt Digitization Flow",
  "Tax Document Collection",
  "Insurance Claims Processing",
  "Bank Statement Reconciliation",
];

const Workflows = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">No-Code Automation</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Automate Document Workflows
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Build powerful document processing pipelines without writing a single line of code. Connect, extract, validate, and route—all visually.
            </p>
            <Link to="/demo" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Try It Free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Pipeline Steps */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="relative text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="py-16 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Pre-Built Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((t) => (
                <div key={t} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Start Automating Today</h2>
            <p className="text-muted-foreground mb-8">No code required. Set up your first workflow in minutes.</p>
            <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Contact Sales
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workflows;

import { Link } from "react-router-dom";
import { ShieldAlert, Eye, Fingerprint, Database, AlertTriangle, FileWarning } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraudStats = [
  { icon: "📄", title: "Invoice and Billing Fraud", stat: "$100 billion annually", detail: "5-10% of all invoices contain errors or fraudulent charges." },
  { icon: "💳", title: "Check Fraud", stat: "$1.3 billion in losses", detail: "Major issue despite declining check usage (ABA 2018 report)." },
  { icon: "🎁", title: "Loyalty Program Fraud", stat: "$1 billion per year", detail: "About 1 in 5 loyalty accounts are affected by fraud." },
  { icon: "📊", title: "Expense Report Fraud", stat: "5% of business fraud", detail: "Median loss of $31,000 per case." },
  { icon: "🤖", title: "AI-Driven Synthetics", stat: "311% surge", detail: "1,100% increase in deepfake fraud attacks." },
  { icon: "🛡️", title: "Prevention > Detection", stat: "54% never recover", detail: "21% of organizations report losses of $1M+." },
];

const models = [
  { icon: Eye, title: "Vision Model", desc: "Analyzes document images for visual tampering, font inconsistencies, pixel manipulation, and AI-generated artifacts. Detects photoshopped receipts, screen captures, and synthetic documents." },
  { icon: Fingerprint, title: "Device Model", desc: "Fingerprints the submitting device to identify repeat offenders, suspicious submission patterns, and bot-driven fraud. Tracks device characteristics across submissions." },
  { icon: Database, title: "Data Model", desc: "Cross-references extracted data against known patterns, vendor databases, and historical submissions. Catches duplicate submissions, impossible values, and statistical anomalies." },
];

const upstreamVsDownstream = {
  upstream: { title: "Upstream Fraud Prevention", subtitle: "Docslyzer Power", items: ["At point of document submission/onboarding", "Validates document authenticity before data enters your systems", "Prevents fraudulent documents from even being processed"] },
  downstream: { title: "Downstream Fraud Detection", subtitle: "Traditional Audit", items: ["After transactions occur, during processing", "Analyzes transaction patterns, amounts, frequencies", "Catches fraudulent transactions after they've been initiated"] },
};

const FraudDetection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Enterprise Fraud Detection & Prevention Suite</h1>
              <p className="text-lg text-muted-foreground mb-8">
                AI Fraud Detection API software to protect your business at the point of collection. The Docslyzer API deploys advanced vision, device and data models to catch fraudulent documents as they enter your system while leveraging device fingerprinting to identify and block repeat offenders.
              </p>
              <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.veryfi.com/wp-content/uploads/Fraud-Detection_DarkMode_Hero.svg" alt="Fraud Detection" className="max-w-sm w-full" loading="lazy" />
            </div>
          </div>

          {/* Fraud Stats */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-4">What is Fraud Detection?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fraud detection identifies and blocks fraudulent activity by analyzing documents in real-time during submission or onboarding. AI-powered systems scan for suspicious patterns and anomalies—catching fraudulent events before they cause financial damage or destroy customer trust.
            </p>
            <p className="text-center text-lg font-semibold text-foreground mb-8 bg-card border border-border rounded-2xl p-6">
              54% of organizations never recover fraud losses. When the damage is done, recovery is unlikely. <span className="text-primary">You must catch it upfront.</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fraudStats.map((stat) => (
                <div key={stat.title} className="bg-card border border-border rounded-2xl p-6">
                  <span className="text-2xl">{stat.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mt-3 mb-1">{stat.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{stat.stat}</p>
                  <p className="text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Upstream vs Downstream */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upstream Fraud Prevention is Key</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{upstreamVsDownstream.upstream.title}</h3>
                <p className="text-sm text-primary font-semibold mb-4">{upstreamVsDownstream.upstream.subtitle}</p>
                <ul className="space-y-3">
                  {upstreamVsDownstream.upstream.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ShieldAlert className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{upstreamVsDownstream.downstream.title}</h3>
                <p className="text-sm text-muted-foreground font-semibold mb-4">{upstreamVsDownstream.downstream.subtitle}</p>
                <ul className="space-y-3">
                  {upstreamVsDownstream.downstream.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* How It Works - Tri-Model */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground mb-8">
              Docslyzer deploys a tri-model system combining vision, device, and data models to generate multiple fraud signals and calculate document authenticity with precision.
            </p>
            <div className="flex justify-center mb-10">
              <img src="https://cdn.veryfi.com/wp-content/uploads/fraud-prevention-how-it-works-v2.svg" alt="Fraud Detection Flowchart" className="max-w-2xl w-full" loading="lazy" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {models.map((model) => (
                <div key={model.title} className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <model.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{model.title}</h3>
                  <p className="text-sm text-muted-foreground">{model.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* JSON Example */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Fused JSON Example</h2>
            <div className="bg-card border border-border rounded-2xl p-6">
              <pre className="text-sm font-mono text-primary whitespace-pre-wrap">{`{
  "is_fraud": true,
  "fraud_score": 0.94,
  "fraud_signals": {
    "vision": {
      "is_tampered": true,
      "is_screen_capture": false,
      "is_ai_generated": true,
      "confidence": 0.97
    },
    "device": {
      "is_repeat_offender": true,
      "device_fingerprint": "abc123...",
      "submission_velocity": "high"
    },
    "data": {
      "is_duplicate": false,
      "vendor_verified": false,
      "amount_anomaly": true
    }
  }
}`}</pre>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-card border border-border rounded-2xl p-12">
            <FileWarning className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Protect your business from document fraud</h2>
            <p className="text-muted-foreground mb-8">Deploy fraud prevention at the point of entry. Stop losses before they happen.</p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
              <Link to="/contact" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">Contact Sales</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FraudDetection;

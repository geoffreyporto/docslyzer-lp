import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MessageCircle, Camera, Zap, Shield, ArrowRight } from "lucide-react";

const steps = [
  { step: "1", title: "User sends a photo", desc: "Snap a picture of a receipt, invoice, or any document and send it via WhatsApp." },
  { step: "2", title: "AI processes instantly", desc: "Docslyzer's OCR engine extracts all structured data in real-time." },
  { step: "3", title: "Data returned in chat", desc: "Extracted data is sent back as a formatted message or JSON—ready for your system." },
];

const features = [
  { icon: MessageCircle, title: "Conversational Interface", desc: "Users interact naturally via WhatsApp—no app downloads required." },
  { icon: Camera, title: "Smart Capture", desc: "Auto-crop, rotation correction, and quality enhancement on every image." },
  { icon: Zap, title: "Real-Time Processing", desc: "Results returned in seconds, right in the chat conversation." },
  { icon: Shield, title: "Secure & Compliant", desc: "End-to-end encryption. No images stored. SOC 2 Type II compliant." },
];

const WhatsappChatbot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">WhatsApp Chatbot</span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                  Process Documents via WhatsApp
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Turn WhatsApp into a powerful document processing channel. Users simply snap and send—Docslyzer does the rest.
                </p>
                <div className="flex gap-4">
                  <Link to="/demo" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                    Try Demo
                  </Link>
                  <Link to="/contact" className="border border-border text-foreground px-6 py-3 rounded-full font-medium hover:border-primary/50 transition-colors">
                    Contact Sales
                  </Link>
                </div>
              </div>
              <div className="bg-card border border-border rounded-3xl p-8 max-w-sm mx-auto w-full">
                <div className="space-y-3">
                  <div className="bg-muted rounded-2xl rounded-tl-sm p-3 text-sm text-foreground max-w-[80%]">
                    📸 Here's my receipt from lunch
                  </div>
                  <div className="bg-primary/10 rounded-2xl rounded-tr-sm p-3 text-sm text-foreground ml-auto max-w-[80%]">
                    ✅ Got it! Processing...<br /><br />
                    <span className="text-xs text-muted-foreground">
                      Vendor: Starbucks<br />
                      Total: $12.45<br />
                      Tax: $1.02<br />
                      Date: Mar 15, 2025
                    </span>
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm p-3 text-sm text-foreground max-w-[80%]">
                    Perfect! Add to expenses 💰
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-card/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-5">
                <f.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-base font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Launch Your WhatsApp Bot?</h2>
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

export default WhatsappChatbot;

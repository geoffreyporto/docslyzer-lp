import { Link } from "react-router-dom";
import { Sparkles, Zap, Shield, Check, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportedFields = [
  "Check Number", "MICR Code", "Routing Number", "Account Number",
  "Amount (Numeric)", "Amount (Written)", "Payee Name", "Payer Name",
  "Payer Address", "Date", "Memo", "Bank Name", "Signature Detection",
  "Endorsement (Back)", "Fractional Routing Number",
];

const features = [
  { title: "Front & Back Capture", desc: "Extract data from both sides of any check—front for payment details, back for endorsements and deposit stamps." },
  { title: "MICR Code Extraction", desc: "Read magnetic ink character recognition codes with bank-grade accuracy for routing, account, and check numbers." },
  { title: "Signature Detection", desc: "AI-powered signature presence and verification to automate check validation workflows." },
  { title: "Fraud Prevention", desc: "Built-in fraud signals including duplicate detection, tampering indicators, and anomaly scoring." },
];

const BankCheckOcrApi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Bank Check OCR API</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform check processing with Docslyzer's white-label API that captures and extracts data from both sides of any check. Get structured MICR codes, signatures, endorsements, and bank routing information in seconds—enabling fully automated check deposits.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
                <Link to="/demo" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">Free Demo</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.veryfi.com/wp-content/uploads/230227-DocBased-Check-Desktop-1-1.svg" alt="Bank Check OCR API" className="max-w-sm w-full" loading="lazy" />
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {[
              { icon: Sparkles, title: "Day 1 Ready", sub: "AI Accuracy", href: "/demo" },
              { icon: Zap, title: "Blazing", sub: "Fast APIs", href: "/demo" },
              { icon: Shield, title: "Secure", sub: "SOC 2 Type II", href: "/security" },
            ].map((b) => (
              <Link key={b.title} to={b.href} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{b.title}</h3>
                <p className="text-muted-foreground">{b.sub}</p>
              </Link>
            ))}
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Reject Mediocre, Use the Best!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Code example */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Request: Check Data Extraction</p>
                <pre className="text-sm font-mono text-primary whitespace-pre-wrap">{`import requests

url = "https://api.docslyzer.com/api/v8/partner/checks"
headers = {
  'CLIENT-ID': '<API_KEY>',
  'AUTHORIZATION': 'apikey <USER>:<KEY>'
}
files = {
  'file': open('check_front.jpg', 'rb'),
  'file_back': open('check_back.jpg', 'rb')
}
response = requests.post(url, headers=headers, files=files)
print(response.json())`}</pre>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Response: Structured JSON</p>
                <pre className="text-sm font-mono text-primary whitespace-pre-wrap">{`{
  "check_number": "1042",
  "routing_number": "021000021",
  "account_number": "1234567890",
  "amount": 1500.00,
  "amount_text": "One Thousand Five Hundred",
  "payee": "John Smith",
  "payer": "Jane Doe",
  "date": "2023-06-15",
  "bank_name": "Chase Bank",
  "memo": "Rent June 2023",
  "has_signature": true,
  "endorsement": "For Deposit Only"
}`}</pre>
              </div>
            </div>
          </section>

          {/* Supported Fields */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Supported Fields</h2>
            <div className="flex flex-wrap gap-2">
              {supportedFields.map((field) => (
                <span key={field} className="px-3 py-1.5 bg-card border border-border rounded-full text-xs text-muted-foreground">{field}</span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-card border border-border rounded-2xl p-12">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to automate check processing?</h2>
            <p className="text-muted-foreground mb-8">Start for free. Process up to 100 checks/month at no cost.</p>
            <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BankCheckOcrApi;

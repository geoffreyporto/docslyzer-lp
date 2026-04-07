import { Link } from "react-router-dom";
import { Sparkles, Zap, Shield, Check, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportedFields = [
  "Vendor Name", "Vendor Address", "Vendor Phone", "Vendor Type", "Vendor URL",
  "Date", "Time", "Currency Code", "Total", "Subtotal", "Tax", "Tip", "Discount",
  "Line Items (SKU, Description, Qty, Price, Total)", "Payment Type", "Card Number (last 4)",
  "Account Number", "Barcode", "Category", "OCR Text", "Handwriting", "Notes",
  "Bill To", "Ship To", "Due Date", "Reference Number", "Purchase Order",
];

const codeRequest = `import requests

url = "https://api.docslyzer.com/api/v8/partner/documents"

headers = {
  'CLIENT-ID': '<API_KEY_VALUE>',
  'AUTHORIZATION': 'apikey <USERNAME>:<API_KEY>'
}

payload = {'file_url': 'https://cdn...'}

response = requests.post(url, headers=headers, data=payload)
print(response.json())`;

const codeResponse = `{
  "account_number": "0053",
  "accounting_entry_type": "debit",
  "currency_code": "USD",
  "date": "2023-03-28 13:10:00",
  "line_items": [{
    "description": "RED BULL ENRGY DRNK CNS 8.4OZ 6PK",
    "price": 9.99,
    "quantity": 1,
    "total": 8.79
  }],
  "subtotal": 27.60,
  "tax": 1.93,
  "total": 29.53
}`;

const devFeatures = [
  "Day-1 Ready Pre-Trained Receipts AI Model",
  "SDKs & code samples in Python, Node.js, PHP, C#, Java, Go and more",
  "Detailed API Docs + FAQs that make sense",
  "Human support from experts at HQ in Silicon Valley",
];

const ReceiptOcrApi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Receipts OCR API</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform receipt chaos into structured data instantly using Docslyzer's multi-modal data extraction API. Extract every detail—line items (level 3 data), taxes, totals, barcodes, vendor detail, and more—across 91 currencies and 38 languages with enterprise-grade accuracy.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Get Started for Free
                </Link>
                <a href="#demo" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">
                  Free Demo
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.veryfi.com/wp-content/uploads/230217-DocBased-Receipt-d.svg" alt="Receipts OCR API" className="max-w-sm w-full" loading="lazy" />
            </div>
          </div>

          {/* Why Docslyzer badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {[
              { icon: Sparkles, title: "Day 1 Ready", sub: "AI Accuracy", href: "/demo" },
              { icon: Zap, title: "Blazing", sub: "Fast APIs", href: "/demo" },
              { icon: Shield, title: "Secure", sub: "SOC 2 Type II", href: "/security" },
            ].map((b) => (
              <Link key={b.title} to={b.href} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{b.title}</h3>
                <p className="text-muted-foreground">{b.sub}</p>
              </Link>
            ))}
          </div>

          {/* What is it */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Unlock a Wealth of Data from Receipts</h2>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">What is Receipts OCR API?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receipts OCR API is an API that turns your receipts into data in seconds using AI. You can send receipts to the API in any format (pdf, image, etc) and receive the response in a structured (key/value) JSON irrespective of receipt structure, geography or language. Docslyzer's AI runs proprietary foundational models trained on hundreds of millions of receipts so it can understand all possible data on these receipts and even those pesky taxes and handwriting in various geographies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">What is Receipts OCR?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receipt OCR (optical character recognition) is the electronic or mechanical conversion of receipt images, receipt paper, and handwritten or printed text into machine-encoded text using software. This work traditionally required manual human labor but that was inefficient and ripe for mistakes. Docslyzer Receipts OCR API will also return the OCR text in every JSON response.
                </p>
              </div>
            </div>
          </section>

          {/* Code example */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Request: Receipt Data Extraction</p>
                <pre className="text-sm font-mono text-primary whitespace-pre-wrap">{codeRequest}</pre>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Response: Structured JSON</p>
                <pre className="text-sm font-mono text-primary whitespace-pre-wrap">{codeResponse}</pre>
              </div>
            </div>
            <p className="text-center mt-4 text-sm text-primary font-medium">Support for over 150 fields 🤟</p>
          </section>

          {/* Developer Friendly */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Developer Friendly API</h2>
            <p className="text-muted-foreground mb-6">
              The only API you will ever need to accurately extract key/value data in a standardized format you can trust across any geography, language, or format — enabling seamless international business expansion without lifting a finger.
            </p>
            <ul className="space-y-3 mb-8">
              {devFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-medium mb-6">
              No bullshit. No months of training. No "contact sales" gatekeeping. Start impressing your customers today.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/demo" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Free Demo</Link>
              <a href="https://docs.veryfi.com/api/receipts-invoices/process-a-document/" target="_blank" rel="noopener noreferrer" className="border border-border text-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">Read API Docs</a>
            </div>
          </section>

          {/* Supported Fields */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Supported Fields</h2>
            <div className="flex flex-wrap gap-2">
              {supportedFields.map((field) => (
                <span key={field} className="px-3 py-1.5 bg-card border border-border rounded-full text-xs text-muted-foreground">
                  {field}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-card border border-border rounded-2xl p-12">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to extract data from receipts?</h2>
            <p className="text-muted-foreground mb-8">Start for free. Process up to 100 docs/month at no cost.</p>
            <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReceiptOcrApi;

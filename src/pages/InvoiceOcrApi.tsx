import { Link } from "react-router-dom";
import { Sparkles, Zap, Shield, Check, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportedFields = [
  "Vendor Name", "Vendor Address", "Vendor Phone", "Vendor VAT/Tax ID", "Vendor URL",
  "Bill To Name", "Bill To Address", "Ship To Name", "Ship To Address",
  "Invoice Number", "Invoice Date", "Due Date", "Purchase Order",
  "Currency Code", "Total", "Subtotal", "Tax", "Discount", "Amount Due",
  "Line Items (SKU, Description, Qty, Unit Price, Total, Tax Rate)",
  "Payment Terms", "Notes", "Category", "OCR Text",
];

const InvoiceOcrApi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Invoices OCR API</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform invoices into actionable data using Docslyzer's multi-modal data extraction API: Extract line-item details to trusted JSON key/value pairs in any language or currency. Supercharge your accounts payable and procure-to-pay processes with AI-powered automation.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
                <Link to="/demo" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">Free Demo</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.veryfi.com/wp-content/uploads/230217-DocBased-Invoice-d.svg" alt="Invoices OCR API" className="max-w-sm w-full" loading="lazy" />
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

          {/* What is it */}
          <section className="mb-20 bg-card border border-border rounded-2xl p-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Unlock a Wealth of Data in Invoices</h2>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">What is Invoices OCR API?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Invoices OCR API is an API that turns your invoices into data in seconds using AI. You can send invoices to the API in any format (pdf, image, etc) and receive the response in a structured (key/value) JSON irrespective of invoice structure, geography or language. Docslyzer's AI runs proprietary foundational models trained on hundreds of millions of invoices so it can understand all possible data on your invoices and even those pesky taxes and handwriting in various geographies.
              </p>
            </div>
          </section>

          {/* Code example */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Request: Invoice Data Extraction</p>
                <pre className="text-sm font-mono text-primary whitespace-pre-wrap">{`import requests

url = "https://api.docslyzer.com/api/v8/partner/documents"
headers = {
  'CLIENT-ID': '<API_KEY>',
  'AUTHORIZATION': 'apikey <USER>:<KEY>'
}
payload = {'file_url': 'https://cdn.../invoice.pdf'}
response = requests.post(url, headers=headers, data=payload)
print(response.json())`}</pre>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Response: Structured JSON</p>
                <pre className="text-sm font-mono text-primary whitespace-pre-wrap">{`{
  "invoice_number": "INV-2023-0042",
  "vendor": {"name": "Acme Corp", "address": "..."},
  "bill_to": {"name": "Client Inc"},
  "date": "2023-05-15",
  "due_date": "2023-06-15",
  "currency_code": "USD",
  "subtotal": 4500.00,
  "tax": 382.50,
  "total": 4882.50,
  "line_items": [{
    "description": "Consulting Services",
    "quantity": 30,
    "unit_price": 150.00,
    "total": 4500.00
  }]
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to extract data from invoices?</h2>
            <p className="text-muted-foreground mb-8">Start for free. Process up to 100 docs/month at no cost.</p>
            <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvoiceOcrApi;

import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Book,
  Key,
  FileText,
  Receipt,
  FileSpreadsheet,
  CreditCard,
  Shield,
  Webhook,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

const sidebarItems = [
  { icon: Book, label: "Introduction", id: "introduction" },
  { icon: Key, label: "Authentication", id: "authentication" },
  { icon: Receipt, label: "Receipt OCR", id: "receipt-ocr" },
  { icon: FileText, label: "Invoice OCR", id: "invoice-ocr" },
  { icon: CreditCard, label: "Check OCR", id: "check-ocr" },
  { icon: FileSpreadsheet, label: "Bank Statements", id: "bank-statements" },
  { icon: Shield, label: "Error Handling", id: "errors" },
  { icon: Webhook, label: "Webhooks", id: "webhooks" },
];

const CodeBlock = ({ code, lang = "bash" }: { code: string; lang?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden my-6">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
        <span className="text-xs text-muted-foreground font-mono uppercase">{lang}</span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code className="text-foreground whitespace-pre">{code}</code>
      </pre>
    </div>
  );
};

const Endpoint = ({
  method,
  path,
  description,
  children,
}: {
  method: string;
  path: string;
  description: string;
  children?: React.ReactNode;
}) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      <span
        className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
          method === "GET"
            ? "bg-blue-500/20 text-blue-400"
            : method === "POST"
            ? "bg-green-500/20 text-green-400"
            : method === "PUT"
            ? "bg-yellow-500/20 text-yellow-400"
            : "bg-red-500/20 text-red-400"
        }`}
      >
        {method}
      </span>
      <code className="text-sm font-mono text-foreground">{path}</code>
    </div>
    <p className="text-muted-foreground text-sm mb-4">{description}</p>
    {children}
  </div>
);

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pythonQuickstart = `from docslyzer import Client

client = Client(api_key="your_api_key")

# Process a receipt
result = client.process_document(
    file_path="receipt.jpg",
    document_type="receipt"
)

print(result.total)        # 42.50
print(result.vendor.name)  # "Starbucks"`;

  const curlAuth = `curl -X POST https://api.docslyzer.ai/v8/partner/documents/ \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"`;

  const receiptRequest = `curl -X POST https://api.docslyzer.ai/v8/partner/documents/ \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@receipt.jpg" \
  -F "categories=Receipt"`;

  const receiptResponse = `{
  "id": "doc_1234567890",
  "external_id": null,
  "file_url": "https://cdn.docslyzer.ai/docs/doc_1234567890.jpg",
  "img_thumbnail_url": "https://cdn.docslyzer.ai/thumbs/doc_1234567890.jpg",
  "document_type": "receipt",
  "currency_code": "USD",
  "date": "2024-01-15",
  "subtotal": 38.50,
  "tax": 4.00,
  "total": 42.50,
  "tip": 0.00,
  "vendor": {
    "name": "Starbucks",
    "address": "123 Market St, San Francisco, CA",
    "phone": "+1 (415) 555-0123",
    "raw_name": "STARBUCKS #2847"
  },
  "line_items": [
    {
      "id": "li_1",
      "description": "Grande Latte",
      "quantity": 2,
      "price": 5.25,
      "total": 10.50
    },
    {
      "id": "li_2",
      "description": "Croissant",
      "quantity": 1,
      "price": 3.50,
      "total": 3.50
    }
  ],
  "payment": {
    "type": "credit_card",
    "card_last_four": "4242"
  }
}`;

  const invoiceRequest = `curl -X POST https://api.docslyzer.ai/v8/partner/documents/ \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@invoice.pdf" \
  -F "categories=Invoice"`;

  const invoiceResponse = `{
  "id": "doc_0987654321",
  "document_type": "invoice",
  "currency_code": "USD",
  "date": "2024-01-01",
  "due_date": "2024-02-01",
  "invoice_number": "INV-2024-001",
  "subtotal": 950.00,
  "tax": 0.00,
  "total": 950.00,
  "vendor": {
    "name": "Acme Software Inc.",
    "address": "456 Enterprise Blvd, San Francisco, CA 94105",
    "tax_id": "87-1234567"
  },
  "bill_to": {
    "name": "Docslyzer Corp",
    "address": "210 S B St, San Mateo, CA 94401"
  },
  "line_items": [
    {
      "id": "li_1",
      "description": "API License - Starter Plan",
      "quantity": 1,
      "unit_of_measure": "month",
      "price": 500.00,
      "total": 500.00
    },
    {
      "id": "li_2",
      "description": "Professional Services",
      "quantity": 15,
      "unit_of_measure": "hour",
      "price": 150.00,
      "total": 2250.00
    }
  ],
  "payment_terms": "Net 30",
  "payment_method": "bank_transfer"
}`;

  const checkResponse = `{
  "id": "doc_chk_555666",
  "document_type": "check",
  "currency_code": "USD",
  "date": "2024-01-20",
  "amount": 1250.00,
  "payee": "John Doe",
  "memo": "Rent payment - January 2024",
  "check_number": "1024",
  "bank": {
    "name": "Wells Fargo",
    "routing_number": "121000248",
    "account_number": "****1234"
  },
  "account_type": "checking"
}`;

  const bankStatementResponse = `{
  "id": "doc_stmt_999888",
  "document_type": "bank_statement",
  "currency_code": "USD",
  "statement_period": {
    "start_date": "2024-01-01",
    "end_date": "2024-01-31"
  },
  "account_summary": {
    "opening_balance": 15234.56,
    "closing_balance": 18765.43,
    "total_deposits": 12500.00,
    "total_withdrawals": 8969.13,
    "interest_earned": 0.00
  },
  "account_holder": {
    "name": "Docslyzer Corp",
    "address": "210 S B St, San Mateo, CA 94401"
  },
  "transactions": [
    {
      "date": "2024-01-05",
      "description": "AWS SERVICES",
      "amount": -450.00,
      "type": "debit",
      "category": "software"
    },
    {
      "date": "2024-01-10",
      "description": "CUSTOMER PAYMENT",
      "amount": 5000.00,
      "type": "credit",
      "category": "revenue"
    }
  ]
}`;

  const errorResponse = `{
  "error": "invalid_document",
  "message": "The uploaded file could not be processed. Supported formats: PDF, PNG, JPG, TIFF, GIF, BMP, WEBP.",
  "code": 400,
  "details": {
    "file_type": "application/zip",
    "supported_types": ["application/pdf", "image/png", "image/jpeg"]
  }
}`;

  const webhookPayload = `{
  "event": "document.processed",
  "timestamp": "2024-01-15T14:30:00Z",
  "document": {
    "id": "doc_1234567890",
    "status": "completed",
    "document_type": "receipt",
    "file_url": "https://cdn.docslyzer.ai/docs/doc_1234567890.jpg"
  }
}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile sidebar toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="flex items-center gap-2 text-sm text-foreground bg-card border border-border px-4 py-2 rounded-lg"
            >
              <Book className="h-4 w-4" />
              {mobileSidebarOpen ? "Close" : "Documentation Menu"}
            </button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar */}
            <aside
              className={`${
                mobileSidebarOpen ? "block" : "hidden"
              } lg:block w-full lg:w-64 flex-shrink-0`}
            >
              <div className="lg:sticky lg:top-28">
                <div className="bg-card border border-border rounded-xl p-4">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 px-2">
                    API Reference
                  </h2>
                  <nav className="space-y-1">
                    {sidebarItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeSection === item.id
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                        {activeSection === item.id && (
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        )}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-6 pt-4 border-t border-border px-2">
                    <p className="text-xs text-muted-foreground mb-3">
                      Need help?
                    </p>
                    <Link
                      to="/contact"
                      className="text-sm text-primary hover:underline"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="max-w-3xl">
                {/* Introduction */}
                <section id="introduction" className="mb-16">
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    Docslyzer API Documentation
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Welcome to the Docslyzer API. Our REST API lets you extract structured data from documents — receipts, invoices, checks, bank statements, and more — with a single API call.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-foreground mb-2">Base URL</h3>
                    <code className="text-sm font-mono text-primary bg-background px-3 py-1.5 rounded border border-border">
                      https://api.docslyzer.ai/v8/partner/
                    </code>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Quick Start</h2>
                  <p className="text-muted-foreground mb-4">
                    Install our Python SDK and process your first document in under 60 seconds.
                  </p>
                  <CodeBlock code={pythonQuickstart} lang="python" />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    {[
                      { value: "<200ms", label: "Avg. response time" },
                      { value: "99.99%", label: "Uptime SLA" },
                      { value: "91", label: "Currencies supported" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Authentication */}
                <section id="authentication" className="mb-16">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Authentication</h2>
                  <p className="text-muted-foreground mb-4">
                    All API requests require an API key passed in the <code className="text-primary font-mono">Authorization</code> header using the Bearer scheme. You can generate and manage API keys from your Docslyzer Dashboard.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
                    <p className="text-sm text-yellow-400">
                      <strong>Keep your API keys secure.</strong> Never commit them to version control or expose them in client-side code.
                    </p>
                  </div>
                  <CodeBlock code={curlAuth} lang="curl" />
                </section>

                {/* Receipt OCR */}
                <section id="receipt-ocr" className="mb-16">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Receipt OCR</h2>
                  <p className="text-muted-foreground mb-6">
                    Extract itemized line items, vendor details, taxes, tips, and payment information from any receipt in seconds.
                  </p>
                  <Endpoint
                    method="POST"
                    path="/documents/"
                    description="Upload a receipt image or PDF and receive structured data."
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Request</h4>
                    <CodeBlock code={receiptRequest} lang="curl" />
                    <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Response</h4>
                    <CodeBlock code={receiptResponse} lang="json" />
                  </Endpoint>
                </section>

                {/* Invoice OCR */}
                <section id="invoice-ocr" className="mb-16">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Invoice OCR</h2>
                  <p className="text-muted-foreground mb-6">
                    Extract invoice numbers, due dates, payment terms, line items, vendor and bill-to information from invoices.
                  </p>
                  <Endpoint
                    method="POST"
                    path="/documents/"
                    description="Upload an invoice and receive structured invoice data."
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Request</h4>
                    <CodeBlock code={invoiceRequest} lang="curl" />
                    <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Response</h4>
                    <CodeBlock code={invoiceResponse} lang="json" />
                  </Endpoint>
                </section>

                {/* Check OCR */}
                <section id="check-ocr" className="mb-16">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Check OCR</h2>
                  <p className="text-muted-foreground mb-6">
                    Extract routing numbers, account numbers, check numbers, payee names, amounts, and memo fields from bank checks.
                  </p>
                  <Endpoint
                    method="POST"
                    path="/documents/"
                    description="Upload a bank check and receive structured check data."
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Response</h4>
                    <CodeBlock code={checkResponse} lang="json" />
                  </Endpoint>
                </section>

                {/* Bank Statements */}
                <section id="bank-statements" className="mb-16">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Bank Statements</h2>
                  <p className="text-muted-foreground mb-6">
                    Extract transaction history, opening and closing balances, account holder details, and categorize transactions from bank statements.
                  </p>
                  <Endpoint
                    method="POST"
                    path="/documents/"
                    description="Upload a bank statement and receive structured statement data."
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Response</h4>
                    <CodeBlock code={bankStatementResponse} lang="json" />
                  </Endpoint>
                </section>

                {/* Errors */}
                <section id="errors" className="mb-16">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Error Handling</h2>
                  <p className="text-muted-foreground mb-4">
                    Docslyzer uses conventional HTTP response codes and returns structured error payloads to help you diagnose issues quickly.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      { code: "200", meaning: "OK — Request succeeded" },
                      { code: "400", meaning: "Bad Request — Invalid parameters" },
                      { code: "401", meaning: "Unauthorized — Invalid API key" },
                      { code: "403", meaning: "Forbidden — Insufficient permissions" },
                      { code: "404", meaning: "Not Found — Resource does not exist" },
                      { code: "429", meaning: "Too Many Requests — Rate limit exceeded" },
                      { code: "500", meaning: "Server Error — Contact support" },
                      { code: "503", meaning: "Service Unavailable — Retry later" },
                    ].map((err) => (
                      <div key={err.code} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
                        <span className="text-xs font-mono font-bold text-primary w-10">{err.code}</span>
                        <span className="text-xs text-muted-foreground">{err.meaning}</span>
                      </div>
                    ))}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Error Response Format</h4>
                  <CodeBlock code={errorResponse} lang="json" />
                </section>

                {/* Webhooks */}
                <section id="webhooks" className="mb-16">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Webhooks</h2>
                  <p className="text-muted-foreground mb-4">
                    Subscribe to real-time events to be notified when documents are processed, updated, or fail. Configure webhook URLs in your Dashboard.
                  </p>
                  <div className="bg-card border border-border rounded-xl p-4 mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Supported Events</h4>
                    <ul className="space-y-2">
                      {[
                        "document.processed",
                        "document.updated",
                        "document.failed",
                        "document.deleted",
                      ].map((evt) => (
                        <li key={evt} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <code className="text-primary font-mono">{evt}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Webhook Payload</h4>
                  <CodeBlock code={webhookPayload} lang="json" />
                </section>

                {/* CTA */}
                <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Ready to integrate?</h2>
                  <p className="text-muted-foreground mb-6">
                    Get your free API key and start processing documents in minutes.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                      to="/register"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Get API Key
                    </Link>
                    <Link
                      to="/demo"
                      className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors"
                    >
                      Try Demo
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;

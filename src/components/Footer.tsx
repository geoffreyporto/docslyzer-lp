import { Link } from "react-router-dom";

const footerLinks = {
  Platform: [
    { label: "Document Capture", href: "/document-capture" },
    { label: "Data Extraction APIs", href: "/data-extraction" },
    { label: "Fraud Detection", href: "/fraud-detection" },
    { label: "Product Intelligence", href: "/product-intelligence" },
    { label: "Embedded", href: "/embedded" },
    { label: "Workflows", href: "/workflow-automation" },
    { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  ],
  "Data Extraction": [
    { label: "Receipts", href: "/receipt-ocr-api" },
    { label: "Invoices", href: "/invoice-ocr-api" },
    { label: "Bank Checks", href: "/bank-check-ocr-api" },
    { label: "Bank Statements", href: "/bank-statements-ocr-api" },
    { label: "W-2s", href: "/w2-ocr-api" },
    { label: "W-9s", href: "/w9-ocr-api" },
    { label: "Credit Cards", href: "/credit-card-extraction" },
  ],
  Developers: [
    { label: "Developer Hub", href: "/developers" },
    { label: "API Docs", href: "/api" },
    { label: "SDKs on GitHub", href: "/sdks" },
    { label: "Postman Collections", href: "/postman" },
    { label: "Status Page", href: "/status" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Customers", href: "/customers" },
    { label: "Security", href: "/security" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-docslyzer-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Docs</span>
              <span className="text-accent">lyzer</span>
            </span>
            <span className="text-xs text-muted-foreground ml-4">© {new Date().getFullYear()} Docslyzer, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

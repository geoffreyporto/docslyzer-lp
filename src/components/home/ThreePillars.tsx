import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Document Capture Software",
    href: "/document-capture",
    description: "Replace your standard camera with an AI-powered one.",
    items: [
      { label: "Browser SDK for Documents", href: "/lens/browser-document-scanner" },
      { label: "Mobile SDK for Checks", href: "/bank-check-ocr-api", badge: "Hot" },
      { label: "Mobile SDK for Credit Cards", href: "/lens/credit-card-extraction" },
      { label: "Mobile SDK for Documents", href: "/lens/mobile-document-scanner", badge: "Hot" },
    ],
  },
  {
    title: "Data Extraction APIs",
    href: "/data-extraction",
    description: "AI-Powered Multi-Modal APIs by Document Type:",
    items: [
      { label: "Bank Checks", href: "/bank-check-ocr-api", badge: "Popular" },
      { label: "Bank Statements", href: "/bank-statements-ocr-api" },
      { label: "Credit Cards", href: "/credit-card-extraction" },
      { label: "Driver's License Cards", href: "/drivers-license-ocr-api" },
      { label: "Invoices", href: "/invoice-ocr-api", badge: "Popular" },
      { label: "Receipts", href: "/receipt-ocr-api", badge: "Hot" },
      { label: "Hotel Folios", href: "/hotel-folio-ocr-api" },
      { label: "W2s", href: "/w2-ocr-api" },
      { label: "W9s", href: "/w9-ocr-api" },
    ],
  },
  {
    title: "Add-ons (to APIs)",
    href: "/data-services",
    description: "",
    items: [
      { label: "Chat With Your Data", href: "/business-insights" },
      { label: "Document Classification", href: "/document-classification" },
      { label: "Fraud Prevention", href: "/fraud-detection", badge: "Hot" },
      { label: "Product Intelligence", href: "/product-intelligence" },
    ],
    extra: {
      title: "No-Code Business Automation",
      items: [
        { label: "Embedded", href: "/embedded", badge: "New" },
        { label: "PDF Splitter", href: "/pdf-splitter" },
        { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot", badge: "Popular" },
        { label: "Workflows", href: "/workflow-automation", badge: "New" },
      ],
    },
  },
];

const badgeStyles: Record<string, string> = {
  Hot: "bg-red-500/20 text-red-400",
  Popular: "bg-blue-500/20 text-blue-400",
  New: "bg-primary/20 text-primary",
};

const ThreePillars = () => {
  return (
    <section className="py-20 bg-docslyzer-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            3 Pillars of AI Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Day-one-ready white-label AI tools that make you the hero your customers have been waiting for.{" "}
            <Link to="/use-cases" className="text-primary hover:underline">
              Things you can build
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-card border border-border rounded-2xl p-6">
              <Link to={pillar.href} className="text-lg font-bold text-primary hover:underline">
                {pillar.title}
              </Link>
              {pillar.description && (
                <p className="text-sm text-muted-foreground mt-2 mb-4">{pillar.description}</p>
              )}
              <ul className="space-y-2">
                {pillar.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      {item.label}
                      {item.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${badgeStyles[item.badge]}`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              {pillar.extra && (
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-3">{pillar.extra.title}</p>
                  <ul className="space-y-2">
                    {pillar.extra.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {item.label}
                          {item.badge && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${badgeStyles[item.badge]}`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;

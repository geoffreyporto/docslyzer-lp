import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Menu, X } from "lucide-react";

const navDropdowns: Record<string, { label: string; href: string; badge?: string }[]> = {
  Solutions: [
    { label: "FinTech", href: "/solutions/fintech" },
    { label: "CPG Brands", href: "/solutions/cpg-loyalty-program" },
    { label: "Backoffice Automation", href: "/solutions/accounts-payable-automation" },
    { label: "Construction", href: "/solutions/construction" },
    { label: "Healthcare", href: "/solutions/healthcare" },
    { label: "Real Estate", href: "/solutions/real-estate" },
  ],
  Platform: [
    { label: "Document Capture", href: "/document-capture" },
    { label: "Data Extraction APIs", href: "/data-extraction" },
    { label: "Fraud Detection", href: "/fraud-detection", badge: "Hot" },
    { label: "Product Intelligence", href: "/product-intelligence" },
    { label: "Embedded", href: "/embedded", badge: "New" },
    { label: "Workflows", href: "/workflow-automation", badge: "New" },
    { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot", badge: "Popular" },
  ],
  Developers: [
    { label: "Dev Resources", href: "/developers" },
    { label: "API Documentation", href: "/api" },
    { label: "Free SDKs on GitHub", href: "/sdks" },
    { label: "Postman Collections", href: "/postman" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Customer Stories", href: "/customers" },
    { label: "Why Docslyzer", href: "/why-docslyzer" },
    { label: "Security & Compliance", href: "/security" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg viewBox="0 0 120 30" className="h-7 w-auto" fill="none">
              <text x="0" y="24" fontFamily="Inter" fontWeight="700" fontSize="24" fill="white">
                very
              </text>
              <text x="56" y="24" fontFamily="Inter" fontWeight="700" fontSize="24" fill="hsl(160,100%,45%)">
                fi
              </text>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.entries(navDropdowns).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-primary text-xs">✦</span>
                  {key}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {openDropdown === key && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[220px]">
                      {items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        >
                          {item.label}
                          {item.badge && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                              item.badge === "Hot" ? "bg-red-500/20 text-red-400" :
                              item.badge === "New" ? "bg-primary/20 text-primary" :
                              "bg-blue-500/20 text-blue-400"
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/pricing" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              PRICING
            </Link>
            <Link to="/demo" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              DEMO
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="h-4 w-4" />
            </button>
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started for Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            {Object.entries(navDropdowns).map(([key, items]) => (
              <div key={key}>
                <button
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground py-2"
                  onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                >
                  {key}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === key ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === key && (
                  <div className="pl-4 space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block py-1.5 text-sm text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/pricing" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link to="/demo" className="block py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              Demo
            </Link>
            <div className="pt-4 border-t border-border space-y-3">
              <Link to="/login" className="block text-sm text-muted-foreground">Login</Link>
              <Link to="/register" className="block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium text-center">
                Get Started for Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

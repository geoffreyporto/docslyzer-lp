import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-veryfi-dark" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Document AI. One API Call.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
          Enterprise-grade multimodal document extraction and fraud detection — deploy in minutes via mobile SDKs or APIs. No ML expertise required. Turn receipts, invoices, checks and bank statements into automated expense tracking, instant payments, and fraud-protected transactions.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Start Free Trial
          </Link>
          <Link
            to="/demo"
            className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-muted/50 transition-all"
          >
            Demo Test-Drive
          </Link>
        </div>

        {/* Hero Illustration - Chip/Processor */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            {/* Document flowing in */}
            <div className="absolute -left-32 top-1/2 -translate-y-1/4 w-48 h-32 bg-card border border-border rounded-lg p-3 opacity-80">
              <div className="w-full h-2 bg-muted-foreground/20 rounded mb-2" />
              <div className="w-3/4 h-2 bg-muted-foreground/20 rounded mb-2" />
              <div className="w-1/2 h-2 bg-muted-foreground/20 rounded mb-4" />
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-muted rounded" />
                <div className="flex-1 space-y-1">
                  <div className="w-full h-1.5 bg-muted-foreground/20 rounded" />
                  <div className="w-2/3 h-1.5 bg-muted-foreground/20 rounded" />
                </div>
              </div>
            </div>

            {/* Central chip */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse-glow relative">
              {/* Circuit traces */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 bg-primary/60"
                  style={{
                    height: '20px',
                    top: i < 3 ? '-20px' : 'auto',
                    bottom: i >= 3 ? '-20px' : 'auto',
                    left: `${20 + (i % 3) * 30}%`,
                  }}
                />
              ))}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute h-0.5 bg-primary/60"
                  style={{
                    width: '20px',
                    left: i < 2 ? '-20px' : 'auto',
                    right: i >= 2 ? '-20px' : 'auto',
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                />
              ))}
              <span className="text-primary text-5xl md:text-7xl font-bold">V</span>
            </div>

            {/* Data labels coming out */}
            <div className="absolute -right-40 top-0 space-y-3">
              {[
                { icon: "👤", label: "VENDOR NAMES", color: "bg-card" },
                { icon: "%", label: "DISCOUNTS", color: "bg-card" },
                { icon: "$", label: "SALES TAX", color: "bg-primary/20" },
                { icon: "Σ", label: "TOTAL", color: "bg-card" },
                { icon: "📦", label: "PRODUCTS", color: "bg-card" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} border border-border rounded-full px-4 py-1.5 flex items-center gap-2 text-xs font-medium text-foreground shadow-lg`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Binary numbers */}
            <div className="absolute -right-16 top-0 bottom-0 flex flex-col justify-center text-primary/30 text-sm font-mono leading-loose select-none">
              {["1", "0", "1", "0", "1", "1", "0", "1", "0", "1"].map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

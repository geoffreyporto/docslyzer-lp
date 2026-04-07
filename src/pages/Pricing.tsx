import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Free",
    subtitle: "Process up to 100 docs/mo",
    price: "$0",
    priceSuffix: "",
    cta: "Free Forever",
    ctaHref: "/register",
    featured: false,
    features: ["All Document Types", "SDKs for Development"],
    platform: ["Limited Storage", "Email Support"],
  },
  {
    name: "Starter",
    subtitle: "$500/mo minimum commitment which buys you <5k docs per month",
    price: "$500+",
    priceSuffix: "/mo",
    cta: "Get Started For Free",
    ctaHref: "/register",
    featured: true,
    features: [
      "All Document Types",
      "SDKs + OpenClaw Skill",
      "Add-on: Embedded",
      "Add-on: Fraud Detection",
    ],
    platform: ["API Hub", "Add-on: The Vault", "Limited Storage", "Email Support"],
  },
  {
    name: "Growth",
    subtitle: "Volume discounts, white glove support, model fine-tuning",
    price: "Volume Discounts",
    priceSuffix: "",
    cta: "Contact Us",
    ctaHref: "/contact",
    featured: false,
    features: [
      "All Document Types",
      "SDKs + OpenClaw Skill",
      "Add-on: Embedded",
      "Add-on: Fraud Detection",
      "Add-on: Lens (Document Capture)",
      "Add-on: Product Matching",
      "Add-on: Workflows",
    ],
    platform: [
      "API Hub",
      "The Vault",
      "Unlimited Storage",
      "Custom Data Retention",
      "Model Training",
      "SLA Options",
      "SAML Single Sign-on (SSO)",
      "Email and Slack Support",
      "Quarterly Reviews",
    ],
  },
];

const pricingTable = [
  { name: "Invoices", free: "Up to 100/mo", starter: "$0.16 per invoice", growth: "Volume discounts" },
  { name: "Receipts", free: "Up to 100/mo", starter: "$0.08 per receipt", growth: "Volume discounts" },
  { name: "Bank Checks", free: "Up to 100/mo", starter: "$0.25 per check", growth: "Volume discounts" },
  { name: "Bank Statements", free: "Up to 100/mo", starter: "$0.25 per statement", growth: "Volume discounts" },
  { name: "W-2s & W-9s", free: "Up to 100/mo", starter: "$0.16 per form", growth: "Volume discounts" },
  { name: "100+ Other Docs", free: "Up to 100/mo", starter: "Contact Us", growth: "Contact Us" },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Platform Pricing</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              for Document Capture SDKs & Multi-Modal Data Extraction APIs. No hidden charges. Change plans or cancel at any time.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.featured
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-card border border-border"
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{plan.subtitle}</p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.priceSuffix}</span>
                </div>
                <Link
                  to={plan.ctaHref}
                  className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors mb-8"
                >
                  {plan.cta}
                </Link>
                <div className="space-y-4 flex-1">
                  <p className="text-sm font-semibold text-foreground">Features</p>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-foreground pt-4">Platform</p>
                  <ul className="space-y-2">
                    {plan.platform.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">Compare Plan Details</h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-semibold text-foreground">Multi-Modal + OCR 3.0 Data Extraction APIs</th>
                      <th className="p-4 text-sm font-semibold text-foreground text-center">Free</th>
                      <th className="p-4 text-sm font-semibold text-primary text-center">Starter</th>
                      <th className="p-4 text-sm font-semibold text-foreground text-center">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTable.map((row) => (
                      <tr key={row.name} className="border-b border-border/50">
                        <td className="p-4 text-sm font-medium text-foreground">{row.name}</td>
                        <td className="p-4 text-sm text-muted-foreground text-center">{row.free}</td>
                        <td className="p-4 text-sm text-muted-foreground text-center">{row.starter}</td>
                        <td className="p-4 text-sm text-muted-foreground text-center">{row.growth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">Start with our free plan and scale as you grow.</p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
                Start Free Trial
              </Link>
              <Link to="/contact" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

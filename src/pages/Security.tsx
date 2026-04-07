import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Users, Server, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const certifications = [
  {
    icon: Shield,
    title: "SOC 2 Type 2 Certified",
    description: "With a strong commitment to data security, Docslyzer establishes and consistently follows SOC 2 Type 2 security policies to reduce the risk of data breaches and to protect customer data.",
  },
  {
    icon: Lock,
    title: "Enterprise Encryption",
    description: "Docslyzer employs TLS 1.2 & 1.3, Salted Password Hashing, AES at Rest & In-Transit. NIST ISO used for auditing.",
  },
  {
    icon: Users,
    title: "GDPR, CCPA, HIPAA Compliant",
    description: "Docslyzer will sign a BAA upon request to protect sensitive PII data. Docslyzer delivers enterprise-grade security and compliance while giving you control over your data.",
  },
  {
    icon: Eye,
    title: "No Humans-in-the-Loop",
    description: "Docslyzer is 100% automated, with no humans in the loop gaining unauthorized access to your data.",
  },
];

const industries = [
  { name: "FinTech", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/solutions-2a.svg", href: "/solutions/fintech", description: "Elevate your apps with hands-free data entry, granular line-level policies, and speed up bill payments with level 3 data." },
  { name: "CPG Brands", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/loyalty-program-solutions.svg", href: "/solutions/cpg-loyalty-program", description: "Level up your loyalty app with long receipt capture, real-time validation, and fraud detection." },
  { name: "Backoffice Automation", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/solutions-1a.svg", href: "/solutions/accounts-payable-automation", description: "Empower your AP/Finance team by eliminating manual data entry." },
  { name: "Construction", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/Construction-Hero-Image-DM.svg", href: "/solutions/construction", description: "Automated data extraction streamlines construction workflows." },
  { name: "Healthcare", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/Healthcare-Hero-Image-DM-1.svg", href: "/solutions/healthcare", description: "HIPAA-compliant healthcare document processing & automation." },
  { name: "Real Estate", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/Real-Estate-Hero-Image.svg", href: "/solutions/real-estate", description: "Transform how landlords manage property documentation with AI." },
];

const apiFeatures = [
  "Trained on millions of real documents",
  "Powered by our own DGX H100s",
  "Continuously refined by our ML experts",
  "Ready for enterprise-scale deployment",
];

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Built for Enterprise Trust & Compliance
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Trusted by leading enterprises and innovative startups worldwide, Docslyzer's SOC 2 Type II certified platform delivers secure data capture and extraction that exceeds the compliance standards of regulated industries.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
                Get Started for Free
              </Link>
              <Link to="/demo" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">
                Free Demo
              </Link>
            </div>
            <img
              src="https://cdn.veryfi.com/wp-content/uploads/Vee-Hero-Illustration_Security.svg"
              alt="Docslyzer Security"
              className="mx-auto mt-12 max-w-md w-full"
              loading="lazy"
            />
          </div>

          {/* Certifications */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              Meet global standards for privacy and security with Docslyzer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {certifications.map((cert) => (
                <div key={cert.title} className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Have questions about Docslyzer security? Contact us at{" "}
                <a href="mailto:cso@docslyzer.com" className="text-primary hover:underline">cso@docslyzer.com</a>
              </p>
            </div>
          </section>

          {/* Fort Knox */}
          <section className="mb-20 bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Fort Knox AI: Your data never leaves our walls
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At the heart of Silicon Valley, we've built an impenetrable AI fortress where security is paramount. Unlike competitors who risk your sensitive information through third-party systems, our proprietary fleet of NVIDIA DGX H100s operates within our highly secured facilities.
                </p>
                <p className="text-sm font-semibold text-foreground mb-4">Each API is:</p>
                <ul className="space-y-3">
                  {apiFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://cdn.veryfi.com/wp-content/uploads/Alien_Shield-Happy.svg"
                  alt="Security Shield"
                  className="max-w-xs w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Transform Your Industry with AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <Link key={ind.name} to={ind.href} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                  <img src={ind.image} alt={ind.name} className="h-24 w-auto mb-4" loading="lazy" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{ind.name}</h3>
                  <p className="text-sm text-muted-foreground">{ind.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Bug Bounty */}
          <section className="bg-card border border-border rounded-2xl p-8 text-center">
            <Server className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Bug Bounty Program</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Docslyzer operates a bug bounty program designed to identify and address any existing vulnerabilities within our applications and internet-facing assets. If you've uncovered a vulnerability, contact us at{" "}
              <a href="mailto:cso@docslyzer.com" className="text-primary hover:underline">cso@docslyzer.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

const fields = [
  "Name", "Business Name", "Federal Tax Classification",
  "Exemptions (payee code)", "Exemptions (FATCA code)",
  "Address", "City, State, ZIP", "Account Numbers",
  "Taxpayer Identification Number (TIN)", "Social Security Number",
  "Employer Identification Number", "Signature", "Date", "Certification",
];

const W9OcrApi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Tax Documents</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">W-9 OCR API</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Automate W-9 form processing for vendor onboarding, 1099 preparation, and tax compliance workflows.
              </p>
              <div className="flex gap-4">
                <Link to="/demo" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Try Free
                </Link>
                <Link to="/contact" className="border border-border text-foreground px-6 py-3 rounded-full font-medium hover:border-primary/50 transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Extracted Fields</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {fields.map((f) => (
                <div key={f} className="flex items-center gap-2 bg-card border border-border rounded-lg p-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Sample API Response</h2>
            <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-muted-foreground">{JSON.stringify({
                name: "Jane Doe",
                business_name: "Doe Consulting LLC",
                tax_classification: "LLC - C Corporation",
                address: "123 Main St, Suite 100",
                city_state_zip: "San Francisco, CA 94105",
                tin: "***-**-5678",
                signature_present: true,
                date_signed: "2025-01-15",
              }, null, 2)}</pre>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Vendor Onboarding", desc: "Automatically extract TIN and business details during vendor registration." },
                { title: "1099 Preparation", desc: "Bulk process W-9s to prepare year-end 1099 forms accurately." },
                { title: "Compliance Audits", desc: "Verify W-9 data against IRS records for tax compliance." },
              ].map((uc) => (
                <div key={uc.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Automate W-9 Processing</h2>
            <Link to="/demo" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Try Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default W9OcrApi;

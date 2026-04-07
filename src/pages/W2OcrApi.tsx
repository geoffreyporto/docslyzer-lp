import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";

const fields = [
  "Employee SSN", "Employer EIN", "Wages & Tips", "Federal Tax Withheld",
  "Social Security Wages", "Medicare Wages", "State Income Tax",
  "Local Wages", "Employer Name & Address", "Employee Name & Address",
  "Box 12 Codes (a-d)", "Box 13 Checkboxes", "Box 14 Other", "Control Number",
];

const W2OcrApi = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">W-2 OCR API</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Extract all fields from W-2 forms with 99%+ accuracy. Automate tax document processing for payroll, HR, and financial services.
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
                employee_name: "John Smith",
                employee_ssn: "***-**-1234",
                employer_name: "Acme Corp",
                employer_ein: "12-3456789",
                wages_tips: 85000.00,
                federal_tax_withheld: 15200.00,
                social_security_wages: 85000.00,
                medicare_wages: 85000.00,
                state: "CA",
                state_income_tax: 4250.00,
                tax_year: 2024,
              }, null, 2)}</pre>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Instant Processing", desc: "Extract W-2 data in under 3 seconds per document." },
              { icon: Shield, title: "PII Protection", desc: "SSN masking and encryption. SOC 2 Type II compliant." },
              { icon: FileText, title: "All Variations", desc: "Supports W-2, W-2c, and state-specific variations." },
            ].map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6 text-center">
                <f.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Start Processing W-2s Today</h2>
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

export default W2OcrApi;

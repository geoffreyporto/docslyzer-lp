import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const documents = [
  { name: "Airway Bill (AWB)", image: "https://cdn.veryfi.com/wp-content/uploads/airway-bill_card.svg", href: "/airway-bill-ocr-api", tags: ["Logistics", "Universal"], desc: "Extract AWB numbers, flight details, shipper information, and cargo specifications from airway bills." },
  { name: "Bank Checks", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-check.svg", href: "/bank-check-ocr-api", tags: ["Banking", "Universal"], desc: "Extract data from bank checks, including routing and account numbers." },
  { name: "Bank Statements", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/bank-statement_card2.svg", href: "/bank-statements-ocr-api", tags: ["Banking", "Universal"], desc: "Accelerate loan underwriting and fraud detection from bank statements." },
  { name: "Business Cards", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-bc.svg", href: "/business-card-ocr-api", tags: ["Business", "Universal"], desc: "Supercharge your CRM with instant contact detail extraction." },
  { name: "Credit Cards", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-creditcard-01.svg", href: "/credit-card-extraction", tags: ["Finance", "Universal"], desc: "Streamline payment onboarding and reduce checkout friction." },
  { name: "Driver's License", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-check.svg", href: "/drivers-license-ocr-api", tags: ["Government", "US"], desc: "Extract identity details from driver's licenses for verification." },
  { name: "Hotel Folios", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-check.svg", href: "/hotel-folio-ocr-api", tags: ["Hospitality", "Universal"], desc: "Extract room charges, taxes, and guest details from hotel folios." },
  { name: "Invoices", image: "https://cdn.veryfi.com/wp-content/uploads/230217-DocBased-Invoice-d.svg", href: "/invoice-ocr-api", tags: ["Finance", "Universal"], desc: "Transform invoices into actionable data with line-item extraction." },
  { name: "Receipts", image: "https://cdn.veryfi.com/wp-content/uploads/230217-DocBased-Receipt-d.svg", href: "/receipt-ocr-api", tags: ["Retail", "Universal"], desc: "Extract every detail from receipts across 91 currencies and 38 languages." },
  { name: "W-2 Tax Forms", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-check.svg", href: "/w2-ocr-api", tags: ["Tax", "US"], desc: "Extract wage and tax information from W-2 forms." },
  { name: "W-9 Tax Forms", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-check.svg", href: "/w9-ocr-api", tags: ["Tax", "US"], desc: "Extract taxpayer identification data from W-9 forms." },
  { name: "Insurance Cards", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/auto-insurance_card.svg", href: "/auto-insurance-card-ocr-api", tags: ["Insurance", "US"], desc: "Automate insurance verification and eliminate manual data entry." },
  { name: "Bill of Lading", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/bill-of-lading_card2.svg", href: "/bill-of-lading-ocr-api", tags: ["Logistics", "Universal"], desc: "Accelerate freight processing and customs clearance." },
  { name: "Passports", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-check.svg", href: "/passport-ocr-api", tags: ["Government", "Universal"], desc: "Extract identity details from passports for verification." },
  { name: "Prescriptions", image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/icon-check.svg", href: "/prescription-ocr-api", tags: ["Healthcare", "Universal"], desc: "Extract medication details and patient information from prescriptions." },
  { name: "Diplomas", image: "https://cdn.veryfi.com/wp-content/uploads/diploma_card.svg", href: "/diploma-ocr-api", tags: ["Education", "Universal"], desc: "Verify credentials and validate academic achievements instantly." },
];

const DataExtraction = () => {
  const [search, setSearch] = useState("");

  const filtered = documents.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Multi-Modal Data Extraction APIs</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Docslyzer's Data Extraction APIs are Multi-Modal and use custom foundational models pre-trained in-house on hundreds of millions of documents to turn unstructured documents of any geographic origin into structured data in seconds.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
                <Link to="/demo" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">Free Demo</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.veryfi.com/wp-content/uploads/data-extraction.svg" alt="Data Extraction APIs" className="max-w-sm w-full" loading="lazy" />
            </div>
          </div>

          {/* Search & Filter */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">APIs To Turn Documents Into Data Instantly</h2>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents by name or industry..."
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                maxLength={100}
              />
            </div>
            <p className="text-sm text-muted-foreground mb-6">{filtered.length} documents shown</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((doc) => (
                <Link key={doc.name} to={doc.href} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group">
                  <img src={doc.image} alt={doc.name} className="h-16 w-auto mb-4" loading="lazy" />
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{doc.name} OCR API</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{doc.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataExtraction;

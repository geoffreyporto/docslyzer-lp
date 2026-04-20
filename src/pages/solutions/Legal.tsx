import IndustryPage from "@/components/IndustryPage";

const Legal = () => (
  <IndustryPage
    industry="Legal"
    title="Document intelligence for law firms and legal teams"
    subtitle="Extract structured data from contracts, court filings, evidence, and client documents in seconds — not hours."
    heroImage="https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/solutions-1a.svg"
    intro="Legal teams handle thousands of pages of unstructured documents every week. Docslyzer's OCR and AI-powered extraction turns contracts, agreements, IDs, and case files into clean, searchable, structured data — securely and with audit trails built in."
    useCases={[
      { title: "Contract review", description: "Auto-extract parties, dates, clauses, obligations and renewal terms from PDFs and scans." },
      { title: "Client onboarding (KYC)", description: "Capture IDs, proof of address, and supporting documents with fraud detection." },
      { title: "Litigation discovery", description: "Index and structure thousands of evidence documents for fast search and review." },
      { title: "Notarized document parsing", description: "Detect signatures, stamps and seals while preserving the original layout." },
      { title: "Compliance & audit", description: "Maintain complete audit trails of every document processed and field extracted." },
      { title: "Billing & invoices", description: "Automate matter-based billing by extracting line items from vendor invoices." },
    ]}
    documents={["Contracts", "NDAs", "Court Filings", "Power of Attorney", "IDs & Passports", "Affidavits", "Invoices", "Engagement Letters"]}
    benefits={[
      { metric: "95%", label: "Reduction in manual review time" },
      { metric: "99.5%", label: "Field-level extraction accuracy" },
      { metric: "SOC 2", label: "Type II compliant infrastructure" },
    ]}
    cta="Book a legal demo"
  />
);

export default Legal;

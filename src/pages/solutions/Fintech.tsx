import IndustryPage from "@/components/IndustryPage";

const Fintech = () => (
  <IndustryPage
    industry="Fintech"
    title="Power your fintech app with best-in-class OCR APIs"
    subtitle="Embed receipt, invoice, ID and bank statement extraction directly into your product with simple REST APIs and mobile SDKs."
    heroImage="https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/solutions-2a.svg"
    intro="Fintech leaders trust Docslyzer to power expense management, lending, KYC and accounts payable workflows. Get production-grade accuracy from day one with APIs purpose-built for developers and SOC 2 compliant infrastructure."
    useCases={[
      { title: "Expense management", description: "Capture receipts with line-item, tax and tip extraction in real time." },
      { title: "KYC & onboarding", description: "Verify IDs, passports and proof of address with anti-fraud checks." },
      { title: "Lending & underwriting", description: "Parse W-2s, pay stubs and bank statements to speed up loan decisions." },
      { title: "Accounts payable", description: "Match invoices to POs, extract line items, taxes and payment terms." },
      { title: "Card-linked offers", description: "Validate purchases at the line-item level for cashback and rewards." },
      { title: "Tax & accounting", description: "Categorize receipts, calculate sales tax and sync to your ledger." },
    ]}
    documents={["Receipts", "Invoices", "Bank Statements", "W-2s", "Pay Stubs", "IDs", "Credit Card Statements", "Tax Forms"]}
    benefits={[
      { metric: "<3s", label: "Average API response time" },
      { metric: "99.5%", label: "Field extraction accuracy" },
      { metric: "SOC 2", label: "Type II + GDPR + HIPAA" },
    ]}
    cta="Talk to sales"
  />
);

export default Fintech;

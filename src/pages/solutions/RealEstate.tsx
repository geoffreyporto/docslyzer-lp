import IndustryPage from "@/components/IndustryPage";

const RealEstate = () => (
  <IndustryPage
    industry="Real Estate"
    title="Document automation for real estate operations"
    subtitle="Extract data from leases, mortgages, property titles, IDs and utility bills to power faster closings and tenant onboarding."
    heroImage="https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/Real-Estate-Hero-Image.svg"
    intro="Real estate transactions and property management generate stacks of paperwork. Docslyzer turns leases, mortgage applications, appraisals, and tenant documents into structured data that flows directly into your PMS, CRM or closing platform."
    useCases={[
      { title: "Lease agreements", description: "Extract tenants, rent amount, term, deposits and clauses automatically." },
      { title: "Tenant onboarding", description: "Capture IDs, pay stubs and proof of income with built-in fraud detection." },
      { title: "Mortgage applications", description: "Process W-2s, bank statements and tax returns for faster underwriting." },
      { title: "Property titles & deeds", description: "Digitize legal property records into a searchable structured database." },
      { title: "Utility bills & expenses", description: "Automate operating expense tracking across your portfolio." },
      { title: "Appraisals & inspections", description: "Extract valuations, comparables and inspection findings instantly." },
    ]}
    documents={["Leases", "Mortgage Applications", "Property Titles", "IDs", "Pay Stubs", "Bank Statements", "Utility Bills", "Appraisals"]}
    benefits={[
      { metric: "75%", label: "Faster tenant onboarding" },
      { metric: "60%", label: "Lower mortgage processing cost" },
      { metric: "99.5%", label: "Field extraction accuracy" },
    ]}
    cta="Book a real estate demo"
  />
);

export default RealEstate;

import IndustryPage from "@/components/IndustryPage";

const Notaries = () => (
  <IndustryPage
    industry="Notaries"
    title="OCR and AI extraction for notarial offices"
    subtitle="Process IDs, deeds, powers of attorney and notarized documents at scale — with stamp, seal and signature detection."
    heroImage="https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/Card_Illustration_Notary.svg"
    intro="Notaries authenticate hundreds of documents every day. Docslyzer extracts every relevant field — names, IDs, dates, amounts, stamps and signatures — and routes the data into your notarial archive or case management system, while preserving original layout and chain of custody."
    useCases={[
      { title: "ID & passport verification", description: "Capture INE, passport, birth certificate and driver license data with fraud checks." },
      { title: "Deed & escritura processing", description: "Extract parties, properties, amounts and clauses from notarial deeds." },
      { title: "Power of attorney", description: "Identify grantor, grantee, scope and validity period in seconds." },
      { title: "Apostille & legalization", description: "Detect apostilles, stamps and official seals across multiple jurisdictions." },
      { title: "Digital archive", description: "Turn paper archives into a fully searchable structured database." },
      { title: "Client onboarding", description: "Streamline KYC and AML with automated identity document capture." },
    ]}
    documents={["INE", "Passports", "Birth Certificates", "Deeds", "Powers of Attorney", "Marriage Certificates", "Property Titles", "Apostilles"]}
    benefits={[
      { metric: "70%", label: "Reduction in document processing time" },
      { metric: "100+", label: "Document types supported out of the box" },
      { metric: "GDPR", label: "& SOC 2 compliant" },
    ]}
    cta="Book a notary demo"
  />
);

export default Notaries;

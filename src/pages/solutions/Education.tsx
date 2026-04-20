import IndustryPage from "@/components/IndustryPage";

const Education = () => (
  <IndustryPage
    industry="Education"
    title="Document automation for schools and universities"
    subtitle="Process transcripts, diplomas, IDs, financial aid forms and admission documents at scale — across every department."
    heroImage="https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/Card_Illustration_Healthcare.svg"
    intro="Education institutions handle a flood of paperwork — from admissions and financial aid to transcripts and research expenses. Docslyzer's APIs digitize every document, so your staff can focus on students rather than data entry."
    useCases={[
      { title: "Admissions", description: "Extract data from transcripts, diplomas and recommendation letters automatically." },
      { title: "Student ID verification", description: "Validate INE, passports and birth certificates during enrollment." },
      { title: "Financial aid", description: "Parse tax returns, W-2s and income statements for faster aid decisions." },
      { title: "Research expense tracking", description: "Capture receipts and invoices to track grant spending in real time." },
      { title: "Transcript digitization", description: "Turn legacy paper transcripts into a structured searchable archive." },
      { title: "Vendor invoices", description: "Automate AP across departments with line-item extraction." },
    ]}
    documents={["Transcripts", "Diplomas", "IDs & Passports", "Birth Certificates", "Tax Returns", "Receipts", "Invoices", "Recommendation Letters"]}
    benefits={[
      { metric: "85%", label: "Faster admissions processing" },
      { metric: "50%", label: "Lower administrative costs" },
      { metric: "FERPA", label: "Compliant data handling" },
    ]}
    cta="Book an education demo"
  />
);

export default Education;

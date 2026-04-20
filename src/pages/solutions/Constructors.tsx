import IndustryPage from "@/components/IndustryPage";

const Constructors = () => (
  <IndustryPage
    industry="Constructors"
    title="Digitize every document on the jobsite"
    subtitle="Automate the capture and processing of invoices, timesheets, blueprints, permits and compliance docs across all your projects."
    heroImage="https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/solutions/Construction-Hero-Image-DM.svg"
    intro="Construction projects generate massive amounts of paperwork — from subcontractor invoices to delivery slips and safety reports. Docslyzer's APIs ingest documents from email, mobile uploads or your ERP and return clean structured data ready for your project management and accounting systems."
    useCases={[
      { title: "Subcontractor invoices", description: "Match invoices to POs, extract line items, taxes and retention amounts automatically." },
      { title: "Field receipts capture", description: "Crews snap a photo on mobile — line items hit your accounting tool instantly." },
      { title: "Timesheets & payroll", description: "Convert handwritten or printed timesheets into structured payroll data." },
      { title: "Permits & compliance", description: "Extract permit numbers, expiration dates and inspector signatures from PDFs." },
      { title: "Material delivery slips", description: "Reconcile delivery quantities against purchase orders in real time." },
      { title: "Safety & incident reports", description: "Digitize safety forms and centralize compliance documentation." },
    ]}
    documents={["Invoices", "Purchase Orders", "Timesheets", "Delivery Slips", "Permits", "Safety Reports", "Receipts", "Lien Waivers"]}
    benefits={[
      { metric: "80%", label: "Faster invoice approval cycle" },
      { metric: "10x", label: "More documents processed per AP clerk" },
      { metric: "99%", label: "Accuracy on line-item extraction" },
    ]}
    cta="Book a construction demo"
  />
);

export default Constructors;

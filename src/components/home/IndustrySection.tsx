import { Link } from "react-router-dom";

const industries = [
  {
    title: "FinTech",
    description: "Build the next-gen fintech app with our OCR APIs. Implement instant receipt capture, extract line-item data for expense policies, process bill payments with Level 3 card data, and power your ERP integrations.",
    image: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/images/solutions/solutions-2a.svg",
    href: "/solutions/fintech",
  },
  {
    title: "CPG Brands",
    description: "Code loyalty experiences that convert. Integrate our mobile SDK for long-receipt capture, validate purchases in real-time without third-party delays, and build fraud detection right into your app.",
    image: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/images/solutions/loyalty-program-solutions.svg",
    href: "/solutions/cpg-loyalty-program",
  },
  {
    title: "Backoffice Automation",
    description: "Eliminate data entry bottlenecks in your workflow automation. Hook our APIs into your RPA platform, extract structured data from invoices and receipts with 99%+ accuracy.",
    image: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/images/solutions/solutions-1a.svg",
    href: "/solutions/accounts-payable-automation",
  },
  {
    title: "Construction",
    description: "Digitize construction workflows with intelligent document processing. Extract data from blueprints, invoices, timesheets, and compliance docs via API.",
    image: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/images/solutions/Construction-Hero-Image-DM.svg",
    href: "/solutions/construction",
  },
  {
    title: "Healthcare",
    description: "Build HIPAA-compliant healthcare apps with confidence. Integrate our APIs to capture insurance cards, extract patient data, automate claims processing.",
    image: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/images/solutions/Card_Illustration_Healthcare.svg",
    href: "/solutions/healthcare",
  },
  {
    title: "Real Estate",
    description: "Power property management platforms with intelligent document processing. Extract data from receipts, invoices, lease agreements with 99.9% accuracy.",
    image: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/images/solutions/Real-Estate-Hero-Image.svg",
    href: "/solutions/real-estate",
  },
];

const IndustrySection = () => {
  return (
    <section className="py-20 bg-docslyzer-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Transform Your Industry
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">Automate.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              to={industry.href}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="h-40 flex items-center justify-center mb-6">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{industry.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                Discover More
                <img src="https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/images/Icon-LearnMore.svg" alt="" className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;

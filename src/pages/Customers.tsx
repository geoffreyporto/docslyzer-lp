import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    company: "Navan",
    logo: "https://cdn.veryfi.com/wp-content/uploads/2023/01/Navan-Logo.png",
    quote: "Docslyzer's OCR API allowed us to automate expense reporting for millions of business travelers worldwide.",
    person: "VP of Engineering",
    industry: "Travel & Expense",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-125-700x394.jpg",
  },
  {
    company: "Rippling",
    logo: "https://cdn.veryfi.com/wp-content/uploads/2023/01/Rippling-Logo.png",
    quote: "Integration took less than a day. The accuracy on receipts and invoices is unmatched in the market.",
    person: "CTO",
    industry: "HR & Finance",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-11-700x394.png",
  },
  {
    company: "Square",
    logo: "https://cdn.veryfi.com/wp-content/uploads/2023/01/Square-Logo.png",
    quote: "We evaluated 12 OCR vendors. Docslyzer was the only one that delivered production-grade accuracy from day one.",
    person: "Head of Product",
    industry: "Fintech",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-10-700x394.png",
  },
  {
    company: "Volvo",
    logo: "https://cdn.veryfi.com/wp-content/uploads/2023/01/Volvo-Logo.png",
    quote: "Docslyzer processes thousands of fleet management documents daily with 99%+ accuracy.",
    person: "Digital Transformation Lead",
    industry: "Automotive",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-130-700x394.jpg",
  },
];

const stats = [
  { value: "99.5%", label: "Average Accuracy" },
  { value: "< 3s", label: "Processing Time" },
  { value: "500M+", label: "Documents Processed" },
  { value: "50+", label: "Countries Served" },
];

const Customers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how world-leading organizations use Docslyzer to automate document processing and unlock data from unstructured documents.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Stories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {stories.map((story, i) => (
              <div
                key={story.company}
                className={`flex flex-col ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center bg-card border border-border rounded-2xl p-8`}
              >
                <div className="md:w-1/2">
                  <img src={story.image} alt={story.company} className="rounded-xl w-full object-cover aspect-video" loading="lazy" />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{story.industry}</span>
                  <h3 className="text-2xl font-bold text-foreground">{story.company}</h3>
                  <div className="flex gap-2">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground italic">{story.quote}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">— {story.person}, {story.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to join them?</h2>
            <p className="text-muted-foreground mb-8">Start processing documents in minutes with our free tier.</p>
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

export default Customers;

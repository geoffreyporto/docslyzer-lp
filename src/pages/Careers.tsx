import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const values = [
  { title: "Innovation First", desc: "We push boundaries in AI and machine learning every day." },
  { title: "Customer Obsessed", desc: "Every feature we build starts with a real customer problem." },
  { title: "Move Fast", desc: "Ship early, iterate often, and learn from production data." },
  { title: "Transparency", desc: "Open communication and honest feedback at every level." },
];

const openings = [
  { title: "Senior ML Engineer", team: "AI/ML", location: "Remote", type: "Full-time" },
  { title: "Full Stack Developer", team: "Platform", location: "San Mateo, CA", type: "Full-time" },
  { title: "DevOps Engineer", team: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote", type: "Full-time" },
  { title: "Solutions Engineer", team: "Sales", location: "New York, NY", type: "Full-time" },
  { title: "Technical Writer", team: "Developer Relations", location: "Remote", type: "Contract" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build the Future of Document AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join a world-class team working on cutting-edge machine learning, computer vision, and NLP to transform how businesses process documents.
            </p>
            <a href="#openings" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              View Open Positions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">Benefits & Perks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Competitive Salary", "Equity Package", "Health Insurance", "Unlimited PTO", "Remote Friendly", "Learning Budget", "Home Office Stipend", "Team Retreats"].map((p) => (
                <div key={p} className="bg-card border border-border rounded-xl p-4">
                  <p className="text-sm font-medium text-foreground">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section id="openings" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Open Positions</h2>
            <div className="space-y-3">
              {openings.map((job) => (
                <div key={job.title} className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/50 transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.team}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

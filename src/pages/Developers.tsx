import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Code, Book, Terminal, Github, FileJson, Cpu, ArrowRight } from "lucide-react";

const sdks = [
  { name: "Python", color: "text-yellow-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Java", color: "text-red-400" },
  { name: "C#", color: "text-purple-400" },
  { name: "Go", color: "text-cyan-400" },
  { name: "Ruby", color: "text-red-500" },
  { name: "PHP", color: "text-indigo-400" },
  { name: "Swift", color: "text-orange-400" },
  { name: "Kotlin", color: "text-violet-400" },
  { name: "Dart", color: "text-blue-400" },
  { name: "Rust", color: "text-orange-500" },
  { name: "JavaScript", color: "text-yellow-300" },
];

const resources = [
  { icon: Book, title: "API Documentation", desc: "Complete REST API reference with examples for every endpoint.", href: "/developers/docs", cta: "Read Docs" },
  { icon: Github, title: "GitHub Repos", desc: "Open-source SDKs, sample projects, and automated test suites.", href: "https://github.com/docslyzer", cta: "View GitHub", external: true },
  { icon: FileJson, title: "Postman Collection", desc: "Pre-built Postman collection to test every API endpoint instantly.", href: "/developers/postman", cta: "Download" },
  { icon: Terminal, title: "CLI Tool", desc: "Command-line interface for batch processing and automation scripts.", href: "/developers/cli", cta: "Get CLI" },
  { icon: Cpu, title: "Sandbox Environment", desc: "Free sandbox with test documents and unlimited API calls for development.", href: "/demo", cta: "Try Sandbox" },
  { icon: Code, title: "Webhooks", desc: "Real-time notifications for async processing and event-driven architectures.", href: "/developers/webhooks", cta: "Learn More" },
];

const Developers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Built for Developers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ship document AI features in hours. Free SDKs, comprehensive docs, and a sandbox that just works.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/demo" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Start Free
              </Link>
              <a href="https://github.com/docslyzer" target="_blank" rel="noopener noreferrer" className="border border-border text-foreground px-8 py-3 rounded-full font-medium hover:border-primary/50 transition-colors flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Quick Start</h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="text-xs text-muted-foreground ml-2">terminal</span>
              </div>
              <div className="p-6">
                <pre className="text-sm font-mono leading-relaxed">
                  <span className="text-muted-foreground"># Install the SDK</span>{"\n"}
                  <span className="text-primary">$</span> <span className="text-foreground">pip install docslyzer</span>{"\n\n"}
                  <span className="text-muted-foreground"># Process a receipt</span>{"\n"}
                  <span className="text-accent">from</span> <span className="text-primary">docslyzer</span> <span className="text-accent">import</span> <span className="text-foreground">Client</span>{"\n\n"}
                  <span className="text-foreground">client</span> <span className="text-muted-foreground">=</span> <span className="text-foreground">Client</span><span className="text-muted-foreground">(</span><span className="text-primary">api_key</span><span className="text-muted-foreground">=</span><span className="text-primary">"your-api-key"</span><span className="text-muted-foreground">)</span>{"\n"}
                  <span className="text-foreground">result</span> <span className="text-muted-foreground">=</span> <span className="text-foreground">client.process_document</span><span className="text-muted-foreground">(</span><span className="text-primary">"receipt.jpg"</span><span className="text-muted-foreground">)</span>{"\n"}
                  <span className="text-accent">print</span><span className="text-muted-foreground">(</span><span className="text-foreground">result.total</span><span className="text-muted-foreground">)</span> <span className="text-muted-foreground"> # → 42.50</span>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16 bg-card/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">SDKs in Every Language</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {sdks.map((sdk) => (
                <span key={sdk.name} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors cursor-pointer">
                  {sdk.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Developer Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((r) => (
                <div key={r.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group">
                  <r.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
                  {r.external ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                      {r.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link to={r.href} className="text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                      {r.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
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

export default Developers;

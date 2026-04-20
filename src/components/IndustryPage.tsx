import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface IndustryPageProps {
  industry: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  useCases: IndustryUseCase[];
  documents: string[];
  benefits: { metric: string; label: string }[];
  cta?: string;
}

const IndustryPage = ({
  industry,
  title,
  subtitle,
  heroImage,
  intro,
  useCases,
  documents,
  benefits,
  cta = "Talk to an expert",
}: IndustryPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-4">
                Solutions · {industry}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  {cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Try the demo
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={heroImage} alt={title} className="max-w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Document automation built for {industry.toLowerCase()}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Use cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Documents we process
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {documents.map((doc) => (
                <span
                  key={doc}
                  className="px-5 py-2 bg-card border border-border rounded-full text-sm text-foreground"
                >
                  {doc}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {benefits.map((b) => (
                <div key={b.label}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{b.metric}</div>
                  <div className="text-sm text-muted-foreground">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to automate your {industry.toLowerCase()} workflows?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start processing documents in minutes with our APIs and SDKs.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                {cta}
              </Link>
              <Link
                to="/pricing"
                className="border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
              >
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryPage;

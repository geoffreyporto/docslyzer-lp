import { Link } from "react-router-dom";
import { Check, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import geoffreyImg from "@/assets/team/geoffrey.jpg";
import davidImg from "@/assets/team/david.jpeg";
import danielImg from "@/assets/team/daniel.png";
import michellyImg from "@/assets/team/michelly.jpg";
import greycianneImg from "@/assets/team/greycianne.jpg";
import vilsonImg from "@/assets/team/vilson.png";
import jonathanImg from "@/assets/team/jonathan.png";
import edivaniaImg from "@/assets/team/edivania.png";

const leaders = [
  {
    name: "Geoffrey Porto",
    title: "CTO / AI Software Engineer — Mexico",
    image: geoffreyImg,
    bio: "Co-Founder & AI Research at Tryggai/Monezify. AI Advisor at IAtros Systems. PhD Student in Computer Science, MSc in Artificial Intelligence, B.Sc Industrial Engineer.",
  },
  {
    name: "David Melquiades",
    title: "Business Development Director — Mexico",
    image: davidImg,
    bio: "Digital Transformation Strategist driving go-to-market and partnerships across LATAM.",
  },
  {
    name: "Daniel Araujo",
    title: "CFO / Investor — USA",
    image: danielImg,
    bio: "Chief Financial Officer at YMCA, Richmond, VA. Brings deep financial leadership and investment expertise.",
  },
  {
    name: "Jonathan Solano",
    title: "Entrepreneur & Investor",
    image: jonathanImg,
    bio: "Entrepreneur and investor backing innovative AI and technology ventures.",
  },
  {
    name: "Michelly Ribeiro",
    title: "Advisor in Finance — Brazil",
    image: michellyImg,
    bio: "CEO at MR Finanças. Trusted advisor on financial strategy and corporate growth.",
  },
  {
    name: "Greycianne Porto",
    title: "Art Visual Director — Canada",
    image: greycianneImg,
    bio: "Creative Lead at The Mustard Seed. Leads the vision and creative impact through strategic direction alongside the Manager, Campaigns and Digital Fundraising.",
  },
  {
    name: "Edivania Batista",
    title: "Chemist / Biologist — Investor & PhD Student in Public Health",
    image: edivaniaImg,
    bio: "Chemist and biologist, investor, and PhD student in Public Health bridging science and impact-driven investment.",
  },
  {
    name: "Vilson de Anastacio",
    title: "Partner / Advisor in Finance — Brazil",
    image: vilsonImg,
    bio: "Strategic finance partner and advisor supporting long-term capital and growth planning.",
  },
  {
    name: "Tiago de Anastacio",
    title: "Cloud Engineer — Brazil",
    image: null,
    bio: "Cloud engineer focused on scalable, secure infrastructure powering Docslyzer's AI services.",
  },
];

const apiFeatures = [
  "Trained on hundreds of millions of real documents like receipts, invoices, and more.",
  "Trained on our own DGX H100s in our Santa Clara data center.",
  "Infra on AWS Global with strategic locations worldwide for compliance and speed.",
  "Continuously refined by our ML team of experts and veterans.",
  "Flexible for everyone from startups to enterprise-scale deployments.",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Liberating human potential through the power of AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              At Docslyzer, we see data as the ultimate raw material for digital innovation. We're building a flexible, modular platform that puts powerful AI tools in your hands to turn dreams into reality.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
                Get Started for Free
              </Link>
              <Link to="/demo" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">
                Free Demo
              </Link>
            </div>
          </div>

          {/* 4th Industrial Revolution */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              🌍 Powering the Next Chapter of Human Innovation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to the 4th Industrial Revolution. While the world evolved from steam to electricity to digital, we're now witnessing something even bigger: AI isn't just another technological leap – it's humanity's next great power source. But here's the thing: only 13% of businesses have harnessed AI's true potential to slash costs and fuel growth. The rest? Still stuck in the manual data dark ages. That's where Docslyzer comes in.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're not just building another tech platform. We're liberating human potential by transforming raw data into pure business power. Think of us as your guides into a future where manual data entry is as outdated as steam engines, where AI-driven insights fuel personalized experiences, and where businesses can finally focus on what matters: innovation and growth.
            </p>
          </section>


          {/* Team Photo */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">Team</h2>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://cdn.veryfi.com/wp-content/uploads/team-veryfi-at-work-1.jpg"
                alt="Team Docslyzer"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </section>

          {/* Leadership */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader) => (
                <div key={leader.name} className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="w-40 h-40 rounded-full object-cover mb-6" loading="lazy" />
                  ) : (
                    <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center mb-6">
                      <User className="h-16 w-16 text-muted-foreground" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                  <p className="text-sm text-primary mb-4">{leader.title}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Section */}
          <section className="mb-20 bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              We have been doing AI before it became sexy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are a Silicon Valley team of builders and have been building precise large machine models (deterministic and non-deterministic) on our NVIDIA DGX H100s for years. We've built an impenetrable AI fortress with security at its core because we value privacy of your documents and data.
            </p>
            <p className="text-sm font-semibold text-foreground mb-4">Each API is:</p>
            <ul className="space-y-3">
              {apiFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learn More</h2>
            <p className="text-muted-foreground mb-8">
              Discover why Docslyzer is the preferred choice for forward-thinking companies integrating AI into their workflows and business processes.
            </p>
            <Link to="/why-docslyzer" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
              Why Docslyzer
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

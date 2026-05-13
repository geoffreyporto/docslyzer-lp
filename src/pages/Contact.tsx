import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const locations = [
  {
    city: "Dirección completa",
    address:
      "Calle Pico de Orizaba, Manzana 8 Lote 3, Número Interior 401, Colonia San Jeronimo Cuatro Vientos, C.P. 56589, Ixtapaluca, Estado de México.",
  },
];

const supportCards = [
  {
    title: "Getting Started",
    description: "Learn the basics of Docslyzer.",
    image: "https://cdn.veryfi.com/wp-content/uploads/Illustration-Card_Get-Started.svg",
    href: "/developers",
    cta: "Discover More",
  },
  {
    title: "FAQs",
    description: "Explore answers to frequently asked questions about Docslyzer.",
    image: "https://cdn.veryfi.com/wp-content/uploads/Illustration-Card_FAQs.svg",
    href: "/faq",
    cta: "Discover More",
  },
  {
    title: "Support",
    description: "Email us or use the private Slack channel (for existing customers).",
    image: "https://cdn.veryfi.com/wp-content/uploads/Illustration-Card_Customer-Support.svg",
    href: "mailto:support@docslyzer.com",
    cta: "Contact Support",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Contact Our Partnership Team
            </h1>
            <p className="text-lg text-muted-foreground">
              We're always happy to help. Fill out this form and we'll get in touch with you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">First Name *</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        maxLength={100}
                      />
                      {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        maxLength={100}
                      />
                      {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      maxLength={255}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      maxLength={200}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      maxLength={2000}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Locations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Locations</h2>
              <div className="space-y-4">
                {locations.map((loc) => (
                  <div key={loc.city} className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{loc.city}</p>
                      <p className="text-sm text-muted-foreground">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden mt-6">
                <img
                  src="https://cdn.veryfi.com/wp-content/uploads/Veryfi-HQ-Map.png"
                  alt="Docslyzer HQ Map"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Knowledge Base */}
          <section>
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">Knowledge Base & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all group"
                >
                  <img src={card.image} alt={card.title} className="h-24 w-auto mx-auto mb-4" loading="lazy" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                  <span className="text-sm text-primary font-medium group-hover:underline">{card.cta}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

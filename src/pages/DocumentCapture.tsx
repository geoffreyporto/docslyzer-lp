import { Link } from "react-router-dom";
import { Camera, Smartphone, Globe, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lensProducts = [
  {
    icon: Globe,
    title: "Lens™ for Browser",
    description: "Bring the same power of Lens™ for Mobile into your browser-based application running on any device. Chrome, Firefox, or Safari—provide your customers with the best AI-Powered Browser Document Capture experience embeddable using just HTML and requiring zero download.",
    image: "https://cdn.veryfi.com/wp-content/uploads/Lens-for-Browser-Web-Hero.svg",
    href: "/lens/browser-document-scanner",
  },
  {
    icon: Smartphone,
    title: "Lens™ for Mobile (iOS & Android)",
    description: "Transform your app with an intelligent document scanner that just works. You control the UI/UX and we give you the power of AI via our small but powerful camera framework & SDK that handles bad lighting, tricky angles, and messy backgrounds.",
    image: "https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/document_types/lp_lens-for-mobile.svg",
    href: "/lens/mobile-document-scanner",
  },
  {
    icon: Camera,
    title: "Lens™ for Credit Card Capture",
    description: "A mobile framework camera with a light machine model that embeds into your app to capture credit card info (front & back), reads embossed and debossed text in real-time while keeping PCI data securely on-device.",
    image: "https://cdn.veryfi.com/wp-content/uploads/230227-DocBased-CreditCard-Desktop-1.svg",
    href: "/lens/credit-card-extraction",
  },
  {
    icon: MessageCircle,
    title: "Lens™ for WhatsApp Bot",
    description: "Elevate your WhatsApp bot's capabilities, turning it into a complete document processing tool. Simply tap, capture, and instantly process receipts within the existing WhatsApp interface—no additional apps required.",
    image: "https://cdn.veryfi.com/wp-content/uploads/vee_whatsapp-chatbot.svg",
    href: "/whatsapp-chatbot",
  },
];

const integrationTools = [
  { title: "Framework", desc: "Veryfi Lens™ is a robust framework offering self-contained and reusable code components for seamless integration. Developed in native code, optimized for fast performance and low memory usage.", image: "https://cdn.veryfi.com/wp-content/uploads/framework_card.svg" },
  { title: "Wrappers", desc: "Wrappers facilitate integration into your cross-platform implementation. Support for Cordova, React Native, Flutter, Xamarin, and Ionic.", image: "https://cdn.veryfi.com/wp-content/uploads/wrapper_card.svg" },
  { title: "SDKs", desc: "Open-source SDKs available in Swift, Kotlin, Objective-C, and all major mobile frameworks. Start building without delay.", image: "https://cdn.veryfi.com/wp-content/uploads/sdks_card.svg" },
];

const otherCapture = [
  { title: "PDF Content Splitter", desc: "Split consolidated PDFs with multiple receipts/invoices into separate documents in real-time.", href: "/pdf-splitter" },
  { title: "Email Engine", desc: "Auto-capture and process documents received via email.", href: "/email-engine" },
];

const DocumentCapture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Document Capture Software</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Docslyzer Lens™ is a custom camera capture software with a lightweight machine learning model you can embed into your app to delight your customers to capture documents with precision and speed from any device. Whether you're scanning receipts, invoices, prescriptions, shipping labels—our free SDKs get you up and running in minutes.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
                <Link to="/demo" className="border border-border text-foreground px-8 py-3 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors">Free Demo</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.veryfi.com/wp-content/uploads/Lens-for-Browser-Web-Hero.svg" alt="Document Capture" className="max-w-sm w-full" loading="lazy" />
            </div>
          </div>

          {/* About Lens */}
          <section className="mb-20 bg-card border border-border rounded-2xl p-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">AI Document Capture using Docslyzer Lens™</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Docslyzer Lens™ is compiled software with a UI for your mobile app to give it document capture superpowers in minutes.</strong> Let Docslyzer handle the complexities of frame processing, asset preprocessing, edge routing, and machine vision challenges in document capture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Built by developers for developers;</strong> making the whole process of integrating Lens™ into your app fast and easy with as few lines as possible. Lens™ is built in native code and optimized for fast performance, clean user experience and low memory usage. Available natively for iOS (Swift) and Android (Kotlin) with free SDKs for Cordova, React Native, Flutter, Xamarin, Ionic and more.
            </p>
          </section>

          {/* Lens Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-4">White-labelled Software for your App</h2>
            <p className="text-muted-foreground mb-8">
              State of the art document capture software that you can embed into your mobile or web application in minutes. You control the UI/UX and we give you the power of AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lensProducts.map((product) => (
                <Link key={product.title} to={product.href} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group">
                  <div className="flex items-start gap-4">
                    <img src={product.image} alt={product.title} className="h-20 w-auto flex-shrink-0" loading="lazy" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Integration Tools */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-4">Move Fast → Deploy Today</h2>
            <p className="text-muted-foreground mb-8">Garbage in, Garbage out? NO MORE when using Lens™. You also get all the tools to integrate with ease.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationTools.map((tool) => (
                <div key={tool.title} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <img src={tool.image} alt={tool.title} className="h-20 w-auto mx-auto mb-4" loading="lazy" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other Capture */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Other Capture Solutions</h2>
            <p className="text-muted-foreground mb-6">Give your customers every way possible to capture and pre-process documents.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherCapture.map((item) => (
                <Link key={item.title} to={item.href} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-card border border-border rounded-2xl p-12">
            <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to upgrade your document capture?</h2>
            <p className="text-muted-foreground mb-8">Embed Lens™ into your app in minutes. Start with our free tier.</p>
            <Link to="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">Get Started for Free</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentCapture;

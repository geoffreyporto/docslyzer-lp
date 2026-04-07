import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = ["All", "Technology", "Product", "Industry", "Company"];

const posts = [
  { title: "What If Your Browser Could Scan Documents Like a Native App?", category: "Product", date: "Mar 28, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Square-1200x1200-11.png", slug: "/blog/lens-for-browser-v3" },
  { title: "AnyDocs for Lens for Browser: Document Capture for Complex Workflows", category: "Technology", date: "Mar 20, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-130-700x394.jpg", slug: "/blog/anydocs-lens-browser" },
  { title: "ABBYY Is Losing Ground in IDP. Here's What We Found.", category: "Industry", date: "Mar 12, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-11-700x394.png", slug: "/blog/abbyy-vs-docslyzer" },
  { title: "How Yupi Powered a National WhatsApp Promotion Using OCR", category: "Company", date: "Mar 5, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-10-700x394.png", slug: "/blog/yupi-whatsapp-promotion" },
  { title: "Intelligent Document Processing APIs: The $16B API Economy", category: "Technology", date: "Feb 27, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-125-700x394.jpg", slug: "/blog/idp-api-economy" },
  { title: "OCR vs IDP: Understanding the Difference in 2025", category: "Technology", date: "Feb 20, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-130-700x394.jpg", slug: "/blog/ocr-vs-idp" },
  { title: "Top 5 Receipt Scanning APIs for Expense Management", category: "Product", date: "Feb 14, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-11-700x394.png", slug: "/blog/top-receipt-scanning-apis" },
  { title: "How Docslyzer Achieves SOC 2 Type II Compliance", category: "Company", date: "Feb 7, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-10-700x394.png", slug: "/blog/soc2-compliance" },
  { title: "The Future of Invoice Processing Automation", category: "Industry", date: "Jan 30, 2025", image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-125-700x394.jpg", slug: "/blog/future-invoice-automation" },
];

const Blog = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg mb-8">Insights on document AI, OCR technology, and industry trends.</p>
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link key={post.slug} to={post.slug} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary font-medium">{post.category}</span>
                      <span className="text-xs text-muted-foreground">· {post.date}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

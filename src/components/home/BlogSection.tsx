import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    title: "What If Your Browser Could Scan Documents Like a Native App? Meet Lens for Browser v3",
    image: "https://cdn.veryfi.com/wp-content/uploads/Square-1200x1200-11.png",
    category: "Veryfi Lens",
    href: "/veryfi-lens/lens-for-browser-document-scanning",
  },
  {
    title: "AnyDocs for Lens for Browser: Document Capture for the Workflows That Break Everything Else",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-130-700x394.jpg",
    category: "Technology",
    href: "/technology/anydocs-lens-for-browser-document-capture",
  },
  {
    title: "ABBYY Is Losing Ground in IDP. Here's What We Actually Found.",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-11-700x394.png",
    category: "Technology",
    href: "/technology/abbyy-vs-veryfi-idp-comparison",
  },
  {
    title: "How Yupi Powered a National WhatsApp Promotion Using Veryfi's OCR and Antifraud Technology",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-10-700x394.png",
    category: "Technology",
    href: "/technology/how-yupi-powered-whatsapp-promotion",
  },
  {
    title: "Intelligent Document Processing APIs: The Infrastructure Layer Driving the $16B API Economy",
    image: "https://cdn.veryfi.com/wp-content/uploads/Blog-Hero-1920x1080-125-700x394.jpg",
    category: "Technology",
    href: "/technology/intelligent-document-processing-api",
  },
];

const BlogSection = () => {
  const [offset, setOffset] = useState(0);
  const visible = 3;
  const maxOffset = Math.max(0, articles.length - visible);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dig deeper into our tech stack & industry insights
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setOffset(Math.max(0, offset - 1))}
              disabled={offset === 0}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setOffset(Math.min(maxOffset, offset + 1))}
              disabled={offset >= maxOffset}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{ transform: `translateX(-${offset * (100 / visible)}%)` }}
          >
            {articles.map((article, i) => (
              <Link
                key={i}
                to={article.href}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] group"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">{article.category}</span>
                    <h3 className="text-sm font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

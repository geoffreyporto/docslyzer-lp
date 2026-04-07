const logos = [
  { name: "Navan", url: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/powered-by/Navan-ocr-powered-by-Docslyzer.svg?2023080701" },
  { name: "Rippling", url: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/powered-by/Rippling-ocr-powered-by-Docslyzer.svg?2023080701" },
  { name: "Merkle", url: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/powered-by/Merkle-ocr-powered-by-Docslyzer.svg?2023080701" },
  { name: "Square", url: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/powered-by/Square-ocr-powered-by-Docslyzer.svg?2023080701" },
  { name: "Volvo", url: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/powered-by/Volvo-ocr-powered-by-Docslyzer.svg?2023080701" },
  { name: "Abbott", url: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/powered-by/Abbott-ocr-powered-by-docslyzer.svg?2023080902" },
  { name: "PepsiCo", url: "https://cdn.docslyzer.com/wp-content/themes/docslyzer_2.0/assets/powered-by/PepsiCo-ocr-powered-by-Docslyzer.svg?2023080701" },
];

const LogoCarousel = () => {
  return (
    <section className="py-16 border-y border-border bg-docslyzer-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10">
          Trusted by World-Leading Organizations
        </h2>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-scroll-left">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-8 flex items-center justify-center h-12">
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
          <a href="https://www.g2.com/products/docslyzer/reviews" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span className="font-bold text-foreground">G2</span> 4.8 Star Rating
          </a>
          <a href="/customers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span className="font-bold text-foreground">Docslyzer Customers</span>
          </a>
          <a href="https://www.capterra.com/p/180429/Docslyzer/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span className="font-bold text-foreground">Capterra</span> 4.8 Star Rating
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;

import { Link } from "react-router-dom";

const sdks = ["C Sharp", "Dart", "Go", "Java", "Kotlin", "Node.JS", "PHP", "Python", "Ruby", "Rust", "JavaScript", "Swift"];

const DevSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Code snippets */}
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-xs text-muted-foreground mb-3 font-medium">Easy to Use RESTful APIs</p>
              <pre className="text-sm font-mono leading-relaxed">
                <span className="text-blue-400">from</span>{" "}
                <span className="text-primary">veryfi</span>{" "}
                <span className="text-blue-400">import</span>{" "}
                <span className="text-foreground">Client</span>
                {"\n\n"}
                <span className="text-foreground">my_client</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-foreground">Client</span>
                <span className="text-muted-foreground">().</span>
                <span className="text-yellow-400">config_receipt</span>
                <span className="text-muted-foreground">(</span>
                <span className="text-primary">"api-key"</span>
                <span className="text-muted-foreground">)</span>
                {"\n\n"}
                <span className="text-foreground">receipt_doc</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-foreground">my_client.</span>
                <span className="text-yellow-400">doc_from_path</span>
                <span className="text-muted-foreground">(</span>
                <span className="text-primary">"/path/to/receipt.jpg"</span>
                <span className="text-muted-foreground">)</span>
              </pre>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-xs text-muted-foreground mb-3 font-medium">Mobile Capture Framework</p>
              <pre className="text-sm font-mono text-muted-foreground leading-relaxed">
                <span className="text-primary">$</span> node server.js && veryfi listen
                {"\n"}
                <span className="text-muted-foreground">&gt; Ready! Waiting for requests...</span>
                {"\n\n"}
                <span className="text-muted-foreground">2022-09-04 13:54:57</span>{" "}
                <span className="text-primary">[200]</span>{" "}
                <span className="text-foreground">receipt_data.created</span>
                {"\n"}
                <span className="text-muted-foreground">2022-09-04 13:54:57</span>{" "}
                <span className="text-primary">[200]</span>{" "}
                <span className="text-foreground">charge.succeeded</span>
              </pre>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ship AI Faster. Be the Hero!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Stop writing boilerplate and start shipping features. Grab our free SDKs in your language of choice and you're already 80% done. Our GitHub repo has the sample projects, automated tests, and Postman collections you wish every API provided.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {sdks.map((sdk) => (
                <span
                  key={sdk}
                  className="px-3 py-1.5 bg-muted/50 border border-border rounded-full text-xs text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {sdk}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/developers"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Dev Resources
              </Link>
              <a
                href="https://github.com/veryfi"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
              >
                Free SDKs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSection;

import { Link } from "react-router-dom";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-veryfi-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.veryfi.com/wp-content/uploads/veryfi-soc2-type2-compliant.png"
              alt="SOC 2 Type II Certified"
              className="w-32 h-32 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Enterprise-Grade Security & Compliance
            </h3>
            <p className="text-sm text-muted-foreground mb-1">SOC 2 Type II Certified</p>
            <p className="text-muted-foreground mt-4">
              Veryfi is SOC2 Type2 certified and compliant with <strong className="text-foreground">GDPR, HIPAA, CCPA and ITAR</strong> standards. Contact us for the full report.
            </p>
            <Link
              to="/security"
              className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Security & Compliance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

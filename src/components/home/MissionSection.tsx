import { Link } from "react-router-dom";

const MissionSection = () => {
  return (
    <section className="py-20 bg-veryfi-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              For the advancement of humankind.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From finance and insurance to healthcare and education, data shapes our world. Veryfi exists to liberate human potential by making data available and actionable.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                About
              </Link>
              <Link
                to="/careers"
                className="border border-border text-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://cdn.veryfi.com/wp-content/themes/veryfi_2.0/assets/images/team-veryfi-work.jpg"
              alt="Team Veryfi"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

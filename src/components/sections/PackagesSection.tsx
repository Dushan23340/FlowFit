import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Starter Plan",
    tagline: "Perfect for beginners",
    price: "$79",
    period: "month",
    features: [
      "1 session per week",
      "Group class access",
      "Basic nutrition tips",
      "Email support",
      "App access",
    ],
    highlighted: false,
  },
  {
    name: "Transformation Plan",
    tagline: "Most popular choice",
    price: "$159",
    period: "month",
    features: [
      "3 sessions per week",
      "Unlimited group classes",
      "Custom nutrition plan",
      "Weekly check-ins",
      "Priority booking",
      "Progress tracking",
    ],
    highlighted: true,
  },
  {
    name: "VIP 1-to-1",
    tagline: "Premium personalized coaching",
    price: "$299",
    period: "month",
    features: [
      "5 private sessions/week",
      "Unlimited group classes",
      "Complete meal planning",
      "24/7 WhatsApp support",
      "Home workout plans",
      "Monthly assessments",
      "Lifestyle coaching",
    ],
    highlighted: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Packages & Pricing
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Invest in Your Wellness
          </h2>
          <p className="text-muted-foreground">
            Flexible plans designed to fit your goals and lifestyle. Start with
            a free consultation to find your perfect match.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl p-6 lg:p-8 transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground scale-105 shadow-elevated"
                  : "bg-background shadow-soft hover-lift"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg animate-float">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3
                    className={`font-serif text-2xl font-semibold ${
                      pkg.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      pkg.highlighted
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl lg:text-5xl font-bold ${
                      pkg.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`${
                      pkg.highlighted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    /{pkg.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.highlighted
                            ? "text-primary-foreground/90"
                            : "text-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.highlighted ? "secondary" : "cta"}
                  size="lg"
                  className="w-full btn-hover"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

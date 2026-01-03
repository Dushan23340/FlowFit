import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="heading-section text-primary-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Book a free 20-minute consultation call and discover the perfect
            plan for your goals. No commitment, just a friendly chat about your
            wellness journey.
          </p>
          <Button
            variant="secondary"
            size="xl"
            onClick={scrollToContact}
            className="mt-4 btn-hover"
          >
            Book Free Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

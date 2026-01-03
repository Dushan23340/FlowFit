import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";

const stats = [
  { icon: Users, value: "120+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "8+", label: "Years Experience" },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-widest uppercase text-primary animate-fade-up opacity-0">
                Personal Training & Yoga Studio
              </p>
              <h1 className="heading-display text-foreground animate-fade-up opacity-0 stagger-1">
                Strong Body,
                <br />
                <span className="gradient-text">Calm Mind,</span>
                <br />
                Better You.
              </h1>
              <p className="text-lg text-muted-foreground max-w-md animate-fade-up opacity-0 stagger-2">
                Transform your life with personalized fitness programs and
                mindful yoga sessions. Available online and in-person.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-3">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contact")}
              >
                Book Free Consultation
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => scrollToSection("#classes")}
              >
                View Class Schedule
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up opacity-0 stagger-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-xl px-4 py-3 shadow-soft animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-up opacity-0 stagger-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Yoga and fitness training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-2xl p-4 shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center">
                  <span className="text-2xl">🧘</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Free Trial</p>
                  <p className="text-sm text-muted-foreground">First class on us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

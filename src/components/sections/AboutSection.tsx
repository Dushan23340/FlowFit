import { CheckCircle, Sparkles, Heart, Users } from "lucide-react";

const certifications = [
  "ACE Certified Personal Trainer",
  "RYT-500 Yoga Alliance",
  "Precision Nutrition Coach",
  "Mobility & Movement Specialist",
];

const values = [
  {
    icon: Sparkles,
    title: "Personalized Plans",
    description: "Custom programs designed for your unique goals",
  },
  {
    icon: Heart,
    title: "Beginner Friendly",
    description: "All skill levels welcome with patient guidance",
  },
  {
    icon: Users,
    title: "Online & In-Person",
    description: "Flexible sessions that fit your schedule",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-8xl">🧘‍♀️</span>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-widest uppercase text-primary">
                Meet Your Coach
              </p>
              <h2 className="heading-section text-foreground">
                Transforming Lives Through Movement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Sarah Chen, founder of FlowFit Studio. With over 8 years
                of experience in personal training and yoga instruction, I've
                helped hundreds of clients discover their strength, find inner
                peace, and achieve lasting results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines science-backed fitness training with
                mindful movement practices, creating a holistic path to wellness
                that goes beyond just physical transformation.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-background rounded-2xl p-6 shadow-soft hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

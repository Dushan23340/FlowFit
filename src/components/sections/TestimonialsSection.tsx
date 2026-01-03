import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "FlowFit completely changed my relationship with fitness. Sarah's approach is so encouraging and personalized. I've lost 8kg and gained so much confidence!",
    name: "Amanda R.",
    role: "Marketing Manager",
    result: "-8kg in 3 months",
    avatar: "🙋‍♀️",
  },
  {
    quote:
      "The combination of HIIT and yoga is perfect. I'm stronger than ever but also more relaxed. The online sessions fit perfectly into my busy schedule.",
    name: "David K.",
    role: "Software Engineer",
    result: "Improved flexibility",
    avatar: "🙋‍♂️",
  },
  {
    quote:
      "As a complete beginner, I was nervous to start. Sarah made me feel so welcome. Now I can't imagine my week without my yoga sessions!",
    name: "Michelle T.",
    role: "Teacher",
    result: "First headstand at 45",
    avatar: "🙋‍♀️",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Client Stories
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Real Results, Real People
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our amazing community
            has to say about their transformation journey.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-3xl p-6 lg:p-8 shadow-soft hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Result badge */}
              <div className="mt-4 inline-flex items-center gap-2 bg-secondary-light text-secondary px-3 py-1 rounded-full text-sm font-medium">
                <span>✨</span>
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", package: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Get in Touch
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Book Your Session
          </h2>
          <p className="text-muted-foreground">
            Ready to transform? Fill out the form below or reach out directly.
            We usually respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Select
                    value={formData.package}
                    onValueChange={(value) =>
                      setFormData({ ...formData, package: value })
                    }
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Interested In" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter Plan</SelectItem>
                      <SelectItem value="transformation">
                        Transformation Plan
                      </SelectItem>
                      <SelectItem value="vip">VIP 1-to-1</SelectItem>
                      <SelectItem value="unsure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="bg-background border-border focus:ring-primary resize-none"
                />
              </div>

              <Button variant="cta" size="lg" type="submit" className="w-full sm:w-auto btn-hover">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-background rounded-2xl p-6 shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                How It Works
              </h3>
              <ol className="space-y-4">
                {[
                  "Submit your inquiry",
                  "We'll schedule a free call",
                  "Discuss your goals & find your plan",
                  "Start your transformation!",
                ].map((step, index) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary-light text-primary text-sm font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@flowfit.studio"
                className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft hover-lift"
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-medium text-foreground">
                    hello@flowfit.studio
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/15550000000"
                className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft hover-lift"
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-foreground">
                    +1 (555) 000-0000
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">
                    Colombo, Sri Lanka
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Online sessions worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

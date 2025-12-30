import { useState } from "react";
import { Send, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Get In Touch</h2>
          <div className="glow-line max-w-xs mx-auto" />
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="glass-card p-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="neon-button w-full rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass-card p-6 hover:neon-border transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Email
                  </h4>
                  <a
                    href="mailto:felixlingam@gmail.com"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    felixlingam@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:neon-border transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Phone
                  </h4>
                  <a
                    href="tel:9019213672"
                    className="font-body text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +91 9019213672
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:neon-border transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Location
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Belagavi, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/FelixDevX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-card p-4 flex items-center justify-center gap-3 hover:neon-border transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-body text-muted-foreground group-hover:text-primary transition-colors">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/felix-lingam-9354b327a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-card p-4 flex items-center justify-center gap-3 hover:neon-border transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-body text-muted-foreground group-hover:text-primary transition-colors">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ContactSection;

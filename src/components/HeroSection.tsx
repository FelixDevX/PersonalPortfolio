import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container mx-auto text-center z-10">
        <div className="space-y-6 animate-fade-in">
          {/* Greeting */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground tracking-wide">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider">
            <span className="neon-text">FELIX</span>{" "}
            <span className="text-foreground">Y</span>{" "}
            <span className="neon-text-purple">LINGAM</span>
          </h1>

          {/* Role */}
          <div className="flex items-center justify-center gap-4">
            <div className="glow-line w-16 md:w-32" />
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-accent tracking-widest uppercase">
              Full Stack Developer
            </h2>
            <div className="glow-line w-16 md:w-32" />
          </div>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate developer interested in web & software development
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-6">
            <a
              href="https://github.com/FelixDevX"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:neon-border transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/felix-lingam-9354b327a/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:neon-border transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:felixlingam@gmail.com"
              className="glass-card p-4 hover:neon-border transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="#contact"
              className="neon-button inline-block rounded-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-body text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;

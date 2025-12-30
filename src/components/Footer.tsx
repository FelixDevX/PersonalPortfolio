import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-xl font-bold neon-text tracking-wider"
          >
            FELIX<span className="text-secondary">.</span>DEV
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/FelixDevX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/felix-lingam-9354b327a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:felixlingam@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Felix Y Lingam. Made with{" "}
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

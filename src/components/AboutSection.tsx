import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">About Me</h2>
          <div className="glow-line max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm Felix Y Lingam, a passionate Full Stack Developer currently pursuing 
              my Bachelor's degree in Computer Science. I thrive on turning complex 
              problems into elegant, user-friendly solutions.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              My journey in tech is driven by curiosity and a desire to create 
              meaningful digital experiences. From front-end interfaces to back-end 
              systems, I enjoy exploring every layer of web development.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, and continuously expanding 
              my skill set to stay at the forefront of innovation.
            </p>
          </div>

          {/* Education Card */}
          <div
            className="glass-card p-8 animate-fade-in hover:neon-border transition-all duration-500"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Bachelor of Computer Science
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Computer Science Branch
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-lg text-foreground">
                    Jain College of Engineering
                  </p>
                  <p className="font-body text-muted-foreground">
                    Belagavi, Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-lg text-foreground">
                    Present – 2025
                  </p>
                  <p className="font-body text-muted-foreground">
                    Expected Graduation
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
};

export default AboutSection;

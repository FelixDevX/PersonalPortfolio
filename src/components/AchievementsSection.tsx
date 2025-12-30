import { Trophy, Award, Lightbulb } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Achievements</h2>
          <div className="glow-line max-w-xs mx-auto" />
        </div>

        {/* Achievement Card */}
        <div className="glass-card p-8 md:p-12 hover:neon-border transition-all duration-500 animate-fade-in relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Trophy className="w-8 h-8 text-primary animate-float" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
                Certifications & Achievements
              </h3>
              <Award className="w-8 h-8 text-secondary animate-float" style={{ animationDelay: "0.5s" }} />
            </div>

            {/* Achievement Item */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-muted/30 border border-border/50">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <Lightbulb className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                  Ideathon Participant
                </h4>
                <p className="font-body text-lg text-muted-foreground">
                  Participated in Ideathon at{" "}
                  <span className="text-secondary font-medium">
                    Visvesvaraya Technological University (VTU)
                  </span>
                </p>
                <p className="font-body text-sm text-muted-foreground/70 mt-2">
                  Showcased innovative thinking and problem-solving abilities in a competitive environment
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold neon-text mb-2">
                  1+
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Competition
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold neon-text-purple mb-2">
                  VTU
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  University Level
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  2025
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Graduating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default AchievementsSection;

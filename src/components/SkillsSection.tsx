import { Code2, Globe, Database, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: "cyan" | "purple" | "blue" | "pink";
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["C", "C++"],
    color: "cyan",
  },
  {
    title: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    color: "purple",
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "MongoDB"],
    color: "blue",
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git & GitHub", "VS Code", "Linux basics", "REST APIs"],
    color: "pink",
  },
];

const colorStyles = {
  cyan: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    hover: "hover:border-primary hover:shadow-[0_0_20px_hsl(180_100%_50%/0.3)]",
    skillHover: "hover:border-primary hover:bg-primary/10",
  },
  purple: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    hover: "hover:border-secondary hover:shadow-[0_0_20px_hsl(280_100%_60%/0.3)]",
    skillHover: "hover:border-secondary hover:bg-secondary/10",
  },
  blue: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    hover: "hover:border-accent hover:shadow-[0_0_20px_hsl(220_100%_60%/0.3)]",
    skillHover: "hover:border-accent hover:bg-accent/10",
  },
  pink: {
    bg: "bg-neon-pink/10",
    border: "border-neon-pink/30",
    text: "text-neon-pink",
    hover: "hover:border-neon-pink hover:shadow-[0_0_20px_hsl(320_100%_60%/0.3)]",
    skillHover: "hover:border-neon-pink hover:bg-neon-pink/10",
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Skills</h2>
          <div className="glow-line max-w-xs mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const styles = colorStyles[category.color];
            return (
              <div
                key={category.title}
                className={`glass-card p-8 transition-all duration-500 ${styles.hover} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg ${styles.bg} border ${styles.border}`}
                  >
                    <span className={styles.text}>{category.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-tag ${styles.skillHover}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default SkillsSection;

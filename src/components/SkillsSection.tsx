const skills = [
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3 / Tailwind", level: 90, category: "frontend" },
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "TypeScript", level: 82, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Git / GitHub", level: 80, category: "tools" },
  { name: "Responsive Design", level: 92, category: "frontend" },
  { name: "REST API", level: 78, category: "backend" },
];

const technologies = [
  "React", "TypeScript", "Tailwind CSS", "Vite", "Git", 
  "Figma", "VS Code", "npm", "ESLint", "Prettier"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Навички
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Мій <span className="text-gradient">технічний стек</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Технології та інструменти, які я використовую для створення сучасних
            веб-застосунків.
          </p>
        </div>

        {/* Skills bars */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-card border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technologies tags */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Інструменти та технології</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-smooth animate-scale-in cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

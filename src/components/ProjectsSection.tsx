import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Адміністративна панель для управління інтернет-магазином з аналітикою та статистикою продажів.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Task Manager App",
    description:
      "Застосунок для управління завданнями з підтримкою drag-and-drop та категоризацією.",
    tags: ["React", "Redux", "Styled Components"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Application",
    description:
      "Погодний застосунок з геолокацією та прогнозом на тиждень через OpenWeather API.",
    tags: ["JavaScript", "API", "CSS Grid"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Персональний сайт-портфоліо з адаптивним дизайном та анімаціями.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "Платформа для ведення блогу з підтримкою Markdown та коментарями.",
    tags: ["Next.js", "MDX", "Prisma"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Recipe Finder",
    description:
      "Пошук рецептів за інгредієнтами з фільтрацією та збереженням улюблених.",
    tags: ["React", "API", "LocalStorage"],
    github: "https://github.com",
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Портфоліо
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Мої <span className="text-gradient">проєкти</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Вибрані роботи, які демонструють мої навички та підхід до розробки.
          </p>
        </div>

        {/* Featured projects - large cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 shadow-card hover:shadow-card-hover transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project thumbnail placeholder */}
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-muted-foreground/30" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-smooth"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-smooth"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects - compact list */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">
            Інші проєкти
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-smooth group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <Folder className="w-5 h-5 text-primary" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="font-medium mb-1 group-hover:text-primary transition-smooth">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

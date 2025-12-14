import { Code, Palette, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Чистий код",
    description:
      "Пишу зрозумілий та підтримуваний код з дотриманням найкращих практик.",
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description:
      "Створюю естетичні та інтуїтивно зрозумілі інтерфейси користувача.",
  },
  {
    icon: Zap,
    title: "Оптимізація",
    description:
      "Забезпечую швидке завантаження та плавну роботу веб-застосунків.",
  },
  {
    icon: Users,
    title: "Командна робота",
    description:
      "Ефективно співпрацюю з дизайнерами, розробниками та менеджерами.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text */}
          <div className="animate-fade-in-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Про мене
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Студент та{" "}
              <span className="text-gradient">Frontend розробник</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Я студентка Київського політехнічного інституту, спеціалізуюся на
              розробці веб-застосунків. Захоплююся створенням інтерактивних та
              адаптивних інтерфейсів.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Мій підхід поєднує технічну експертизу з увагою до деталей
              дизайну, що дозволяє створювати продукти, якими приємно
              користуватися.
            </p>
          </div>

          {/* Right column - Features grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-smooth group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

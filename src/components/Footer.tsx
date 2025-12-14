import { Code2, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">DevPortfolio</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Fullstack розробниця
            </p>
          </div>

          {/* Quick links */}
          <nav className="text-center">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Про мене
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Проєкти
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/fwrwxx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/olha-shtyfliuk-146740296/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shtyfliuko@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} DevPortfolio. Створено з{" "}
            <Heart className="w-4 h-4 text-destructive inline" /> в Україні
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

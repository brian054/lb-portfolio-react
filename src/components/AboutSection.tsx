import { Briefcase, Code, User } from "lucide-react";
import resumePdf from "../../src/assets/Resume_BrianRowell.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="containre mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Developer</h3>

            <p className="text-muted-foreground">
              I earned my Bachelor's in Computer Science from the University of
              Kentucky in 2023 and have since gained three years of industry
              experience in full stack web development. All of my experience so
              far has been using C#, SQL, JavaScript, TypeScript, Angular, and
              React. I've primarily worked on MVC .NET applications, Angular
              frontends, and .NET based APIs.
            </p>

            <p className="text-muted-foreground">
              Outside of work, I'm developing 2D Games using the Monogame
              framework (C# based), and I am hoping to release my "Intro to Game
              Development using C# and Monogame" course in late 2025!
            </p>

            <p className="text-muted-foreground">
              I'm also actively expanding my development skills and integrating
              AI when appropriate to solve the problems I face every day as a
              developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={resumePdf}
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV/Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Programs</h4>
                  <p className="text-muted-foreground">
                    Recently, and in my previous jobs, I've written AI tools to
                    increase efficiency in my workflows and the companies I've worked for.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Driven</h4>
                  <p className="text-muted-foreground">
                    I am a coachable and driven individual, and I pride myself
                    on continuously improving my skills daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

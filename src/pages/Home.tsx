import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { LB_HomeSection } from "@/components/LB_HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactsSection } from "@/components/ContactsSection";

export const Home = () => {
  return (
    <div className="min-h-screen  bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        {/* <LB_MainSection /> */}
        <LB_HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      {/* Footer */}
    </div>
  );
};

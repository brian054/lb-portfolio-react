import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme !== "light";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    // if (isDarkMode) {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    //   setIsDarkMode(false);
    // } else {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark"); // so the browser will 'remember' that we prefer dark mode
    //   setIsDarkMode(true);
    // }
    setIsDarkMode(prev => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {" "}
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

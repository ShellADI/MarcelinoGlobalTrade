
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Coffee } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "coffee" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("dark");
        applyTheme("dark");
      }
    }
  }, []);

  function applyTheme(newTheme: Theme) {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "coffee");
    
    if (newTheme === "system") {
      const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? "dark" 
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  }

  function setThemeWithStorage(newTheme: Theme) {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "coffee" && <Coffee className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "system" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeWithStorage("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeWithStorage("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeWithStorage("coffee")}>
          Coffee
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeWithStorage("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <span className="">Theme</span>
      <div className="inline-flex items-center gap-2 bg-muted rounded-full p-1">
        <button
          type="button"
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors text-xs font-medium
    hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring
    ${theme === "light" ? "bg-accent text-primary" : "dark:text-white"}
  `}
          aria-pressed={theme === "light"}
          onClick={() => setTheme("light")}
        >
          <Sun className="w-4 h-4 mr-1" />
        </button>
        <button
          type="button"
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors text-xs font-medium
    hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring
    ${theme === "system" ? "bg-accent text-primary" : "dark:text-white"}
  `}
          aria-pressed={theme === "system"}
          onClick={() => setTheme("system")}
        >
          <MonitorCog className="w-4 h-4 mr-1" />
        </button>
        <button
          type="button"
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors text-xs font-medium
    hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring
    ${theme === "dark" ? "bg-accent text-primary" : "dark:text-white"}
  `}
          aria-pressed={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          <Moon className="w-4 h-4 mr-1" />
        </button>
      </div>
    </>
  );
}

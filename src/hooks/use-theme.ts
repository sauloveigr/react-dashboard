import { useEffect, useState } from "react";

const STORAGE_KEY = "dashboard-theme";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const persistedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (persistedTheme === "dark") return true;
    if (persistedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
}

// components/theme-toggle.jsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ classNames }: { classNames?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-md cursor-pointer bg-light-background dark:bg-dark-background border-2 border-primary dark:border-dark-primary ${classNames}`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

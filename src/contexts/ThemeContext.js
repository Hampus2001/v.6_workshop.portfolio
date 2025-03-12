import { createContext, useEffect, useState } from "react";

export const HandleThemeContext = createContext([]);

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme")) || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <HandleThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HandleThemeContext.Provider>
  );
}

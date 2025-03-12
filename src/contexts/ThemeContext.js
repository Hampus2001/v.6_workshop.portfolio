import { createContext, useState } from "react";

export const HandleThemeContext = createContext([]);

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <HandleThemeContext.Provider value={theme}>
      {children}
    </HandleThemeContext.Provider>
  );
}

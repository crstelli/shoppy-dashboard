import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  function switchTheme() {
    setIsDark((isDark) => !isDark);
    document.querySelector("html").classList.toggle("dark");
  }

  return (
    <DarkModeContext.Provider value={{ isDark, switchTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeProvider };

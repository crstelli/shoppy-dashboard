import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function useDarkMode() {
  const { isDark, switchTheme } = useContext(DarkModeContext);

  return { isDark, switchTheme };
}

export { useDarkMode };

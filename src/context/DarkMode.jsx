import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  useEffect(
    function () {
      if (isDark === false) {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      } else {
        document.documentElement.classList.remove("light-mode");
        document.documentElement.classList.add("dark-mode");
      }
    },
    [isDark]
  );
  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error(
      "You used the dark mode context outside the dark mode provider."
    );
  return context;
}
export { DarkModeProvider, useDarkMode };

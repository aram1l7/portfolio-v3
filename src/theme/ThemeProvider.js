import React, {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
const ThemeContext = createContext({
  theme:
    typeof window !== "undefined" ?? localStorage.getItem("theme") === "dark",
  toggle: () => {},
});
export default ThemeContext;

export const ThemeProvider = (props) => {
  const getLocalStorageTheme = () => {
    if (typeof window !== "undefined" && !!localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
  };
  let themeValue = getLocalStorageTheme();
  const [theme, setTheme] = useState(themeValue || "light");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      theme === "dark"
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(theme);
  }, [theme]);

  const toggle = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

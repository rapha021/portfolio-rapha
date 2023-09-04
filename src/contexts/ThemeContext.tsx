import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IThemeContext {
  isDark: boolean;
  toggleCurrentTheme: (dark: boolean) => void;
}

interface IThemeProvider {
  children: ReactNode;
}

interface ColorThemeType {
  dark: boolean;
}

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeProvider({ children }: IThemeProvider) {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleCurrentTheme = (dark: boolean) => {
    document.documentElement.setAttribute(
      "data-color-scheme",
      dark ? "dark" : "light"
    );

    setIsDark(dark);
    localStorage.setItem("dark", JSON.stringify({ dark }));

    const root = document.getElementById("root")!;

    dark ? root.classList.add("dark") : root.classList.remove("dark");
  };

  const getCurrentTheme = () => {
    const colorTheme = localStorage.getItem("dark");
    const userSystemCurrentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (colorTheme === null) {
      localStorage.setItem("dark", JSON.stringify({ dark: userSystemCurrentTheme }));
    } else {
      const colorThemeParsed: ColorThemeType = JSON.parse(colorTheme);
      setIsDark(colorThemeParsed.dark);

      toggleCurrentTheme(colorThemeParsed.dark);
    }
  };

  useEffect(() => {
    getCurrentTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

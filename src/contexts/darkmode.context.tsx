import { createTheme, responsiveFontSizes, Theme } from "@mui/material"
import { pink, red } from "@mui/material/colors"
import React, { createContext, useContext, useEffect, useState } from "react"

interface IThemeContext {
  dark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
  handleTheme: () => void
  theme: Theme
}

interface IThemeProps {
  children: React.ReactNode
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider = ({ children }: IThemeProps) => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("@Rapha:dark")!)

    theme ? setDark(true) : setDark(false)
  }, [])

  const handleTheme = () => {
    localStorage.setItem("@Rapha:dark", `${!dark}`)
  }

  let theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      background: { default: dark ? "#121212" : "#f7f7f7" },
      primary: pink,
      secondary: { main: pink[900] },
    },

    typography: {
      h1: { color: "#fff" },
      h2: { color: dark ? "#fff" : "#333" },
      h4: { color: dark ? "#fff" : "#333" },
      h5: { color: dark ? "#fff" : "#333" },
    },
  })
  theme = responsiveFontSizes(theme)

  return (
    <ThemeContext.Provider value={{ dark, setDark, handleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export default ThemeProvider

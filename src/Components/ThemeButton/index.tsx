import { DarkMode, LightMode } from "@mui/icons-material"
import { Fab, Slide } from "@mui/material"
import { useThemeContext } from "../../contexts/darkmode.context"

const ThemeButton = () => {
  const { dark, setDark, handleTheme } = useThemeContext()
  return (
    <Slide direction="left" in={true} timeout={800} unmountOnExit>
      <Fab
        size="large"
        aria-label="darkmode"
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: !dark ? "#121212" : "#fff",
          color: !dark ? "#fff" : "#121212",
          ":hover": {
            backgroundColor: !dark ? "#333" : "#e6e6e6",
          },
        }}
        onClick={() => {
          setDark(!dark)
          handleTheme()
        }}
      >
        {!dark ? <DarkMode /> : <LightMode />}
      </Fab>
    </Slide>
  )
}

export default ThemeButton

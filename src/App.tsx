import { Grid, ThemeProvider } from "@mui/material"
import Header from "./Components/Header"
import ThemeButton from "./Components/ThemeButton"
import { useThemeContext } from "./contexts/darkmode.context"
import GlobalStyle, { Container } from "./globalStyle"
import MainRoutes from "./routes"

function App() {
  const { dark, setDark, handleTheme, theme } = useThemeContext()

  return (
    <>
      <GlobalStyle dark={dark} palette={theme.palette} />

      <ThemeProvider theme={theme}>
        <Container>
          <Header />

          <MainRoutes />

          <ThemeButton />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App

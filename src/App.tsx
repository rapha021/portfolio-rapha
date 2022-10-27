import { ThemeProvider } from "@mui/material"
import Header from "./Components/Header"
import ThemeButton from "./Components/ThemeButton"
import { useThemeContext } from "./contexts/darkmode.context"
import GlobalStyle, { Container } from "./globalStyle"
import MainRoutes from "./routes/routes"

function App() {
  const { dark, theme } = useThemeContext()

  const color = dark ? "#272727" : "#E91E63"

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", color)

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

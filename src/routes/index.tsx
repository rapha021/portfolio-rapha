import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  )
}

export default MainRoutes

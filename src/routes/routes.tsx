import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<>404</>} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default MainRoutes

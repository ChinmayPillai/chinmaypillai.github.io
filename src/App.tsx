import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/Utilities/ScrollToTop";

const Home = lazy(() => import("./components/Home/Home"));
const Work = lazy(() => import("./components/Work/Work"));
const Interns = lazy(() => import("./components/Interns/Interns"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const About = lazy(() => import("./components/About/About"));
const Test = lazy(() => import("./components/Home/Test"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="interns" element={<Interns />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="test" element={<Test />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

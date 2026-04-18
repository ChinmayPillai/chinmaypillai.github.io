import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/Utilities/ScrollToTop";

const Home = lazy(() => import("./components/Home/Home"));
const Work = lazy(() => import("./components/Work/Work"));
const Interns = lazy(() => import("./components/Interns/Interns"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const About = lazy(() => import("./components/About/About"));
const Test = lazy(() => import("./components/Home/Test"));

function PageLoader() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </>
  );
}

export default App;

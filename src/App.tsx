import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Interns from "./components/Interns/Interns";
import Projects from "./components/Projects/Projects";
import Test from "./components/Home/Test";
import About from "./components/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="interns" element={<Interns />} />
        <Route path="projects" element={<Projects />} />
        <Route path="test" element={<Test />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;

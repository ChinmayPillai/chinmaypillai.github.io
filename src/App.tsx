import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Interns from "./components/Interns/Interns";
import Test from "./components/Home/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="interns" element={<Interns />} />
        <Route path="projects" element={<Interns />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;

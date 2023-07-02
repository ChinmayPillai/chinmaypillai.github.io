import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Test from "./components/Home/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="exp" element={<Experience />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;

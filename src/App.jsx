import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vans from "./components/pages/Vans";
import VanDetail from "./components/pages/VanDetail";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
        <Route path="/vans/:id" element={<VanDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

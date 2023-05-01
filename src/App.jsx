import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import "./server";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/vans/:id" element={<VanDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

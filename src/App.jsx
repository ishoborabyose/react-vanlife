import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import "./server";
import Layout from "./components/Layout";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Reviews from "./components/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./components/host/HostVans";
import HostVanDetails from "./components/host/HostVanDetails";
import HostVanInfo from "./components/host/HostVanInfo";
import HostVanPricing from "./components/host/HostVanPricing";
import HostVanPhotos from "./components/host/HostVanPhotos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans">
            <Route index element={<Vans />}></Route>
            <Route path=":id" element={<VanDetail />}></Route>
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="vans" element={<HostVans />}></Route>
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />}></Route>
              <Route path="pricing" element={<HostVanPricing />}></Route>
              <Route path="photos" element={<HostVanPhotos />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

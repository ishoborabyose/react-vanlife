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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Home from "./pages/Home";
import About from "./pages/About";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/vans/VanDetail";
import "./server";
import Layout from "./components/Layout";
import Dashboard, {
  loader as dashboardLoader,
} from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Reviews from "./components/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVanLoader } from "./components/host/HostVans";
import HostVanDetails, {
  loader as HostVanLoaderDetails,
} from "./components/host/HostVanDetails";
import HostVanInfo from "./components/host/HostVanInfo";
import HostVanPricing from "./components/host/HostVanPricing";
import HostVanPhotos from "./components/host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { loader as loginLoader } from "./pages/Login";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="login" element={<Login />} loader={loginLoader}></Route>
      <Route path="vans">
        <Route
          index
          element={<Vans />}
          errorElement={<Error />}
          loader={vansLoader}
        ></Route>
        <Route
          path=":id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        ></Route>
      </Route>

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader}
          // loader={async () => await requireAuth}
        ></Route>
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        ></Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        ></Route>
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          // loader={async () => {
          //   return hostVanLoader;
          // }}
        ></Route>
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={HostVanLoaderDetails}
          // loader={async () => {
          //   return null;
          // }}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          ></Route>
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          ></Route>
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          ></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

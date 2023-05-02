import { useEffect, useState } from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Link to=".." relative="path" className="">
        {" "}
        &larr;<span>Back to all vans</span>
      </Link>
      <img src={currentVan.imageUrl} width={150} />
      <h2>{currentVan.name}</h2>
      <p>{currentVan.price}</p>
      <p>{currentVan.type}</p>

      <nav className="flex items-start">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616] p-2"
              : "p-2 hover:underline hover:text-[#161616]"
          }
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616] p-2"
              : "p-2 hover:underline hover:text-[#161616]"
          }
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616] p-2"
              : "p-2 hover:underline hover:text-[#161616]"
          }
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ currentVan }} />
    </div>
  );
};

export default HostVanDetail;

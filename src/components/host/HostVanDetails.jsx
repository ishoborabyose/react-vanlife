import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getVansHost } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth();
  return getVansHost(params.id);
}

const HostVanDetail = () => {
  const currentVan = useLoaderData();

  return (
    <div className="max-w-7xl pb-10 mx-auto px-4">
      <Link
        to=".."
        relative="path"
        className=" font-medium text-base leading-6 text-[#201f1d]"
      >
        {" "}
        &larr;<span className="ml-2">Back to all vans</span>
      </Link>
      <div className="bg-[#FFFFFF] mt-10  py-6 px-7">
        <div className=" mt-10 flex items-center  gap-8">
          <img src={currentVan.imageUrl} width={150} />
          <div className="mt-6">
            <button className="text-[#ffead0] rounded-md text-center text-base leading-8 px-3 py-2 mb-5 bg-[#e17654]">
              {currentVan.type}
            </button>
            <h2 className="font-bold text-2xl  leading-7 text-[#161616]  mb-3">
              {currentVan.name}
            </h2>
            <h3 className="font-bold text-xl leading-9 text-[#161616] mb-4">
              $ {currentVan.price}
              <span className="font-medium text-base leading-8 text-[#161616]">
                /day
              </span>
            </h3>
          </div>
        </div>

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
    </div>
  );
};

export default HostVanDetail;

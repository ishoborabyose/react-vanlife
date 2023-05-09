import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

const VanDetail = () => {
  const location = useLocation();
  const info = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <>
      <div className="bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="pt-10 pb-20">
            <Link to={`..${search}`} relative="path">
              &larr;
              <span className="text-[#201f1d]  font-medium text-base leading-6 underline ml-2">
                Back to {type} vans
              </span>
            </Link>

            <img className="my-12 w-full" src={info.imageUrl} />
            <button className="text-[#ffead0] rounded-md text-center text-base leading-8 px-3 py-2 mb-5 bg-[#e17654]">
              {info.type}
            </button>
            <h4 className="font-bold text-4xl  leading-9 text-[#161616]  mb-3">
              {info.name}
            </h4>
            <h3 className="font-bold text-3xl leading-8 text-[#161616] mb-4">
              {info.price}
              <span className="font-medium text-3xl leading-8 text-[#161616]">
                /day
              </span>
            </h3>
            <p className="text-[#161616] mb-6 font-medium text-base leading-6">
              {info.description}
            </p>
            <button className="bg-[#ff8c38] rounded-md py-3 text-[#ffff] text-center font-bold text-lg leading-8 w-full">
              Rent this van
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VanDetail;

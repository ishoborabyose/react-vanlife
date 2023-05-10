import { Link, useLoaderData } from "react-router-dom";
import { getVansHost } from "../../api";
// import { requireAuth } from "../../utils";

export async function loader() {
  // await requireAuth();
  return getVansHost();
}

const Dashboard = () => {
  const vans = useLoaderData();
  console.log("====================================");
  console.log(vans);
  console.log("====================================");

  return (
    <div className="bg-[#FFF7ED]">
      <div className="bg-[#FFEAD0] pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-bold text-4xl pt-10 leading-6 text-[#161616]">
            Welcome
          </h1>
          <div className="mt-8 flex justify-between">
            <h4 className="text-[#4D4D4D] font-medium leading-6 text-base">
              Income last <span className="font-bold underline">30 days</span>
            </h4>
            <h4 className="text-[#161616] font-medium leading-6 text-base">
              Details
            </h4>
          </div>
          <h1 className="text-5xl leading-10 mt-8 font-extrabold text-[#161616]">
            $2,226
          </h1>
        </div>
      </div>
      <div className="bg-[#FFDDB3] py-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <h4 className="text-[#161616] flex font-bold leading-6 text-2xl">
            Review score <img className="mx-4" src="/assets/Star.png" /> 5.0{" "}
            <span className="font-medium ">/5</span>
          </h4>
          <h4 className="text-[#161616] font-medium leading-6 text-base">
            Details
          </h4>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between pt-9 pb-8">
          {" "}
          <h1 className="font-bold text-2xl leading-6 text-[#161616]">
            Your listed vans
          </h1>{" "}
          <h4 className="font-medium text-base leading-6 text-[#161616]">
            View All
          </h4>
        </div>
        <div>
          <section className="pb-6">
            {vans.map((van) => {
              return (
                <Link to={`/host/vans/${van.id}`} key={van.id}>
                  <div className="bg-white mt-3 py-5 px-6 flex items-center">
                    <img
                      className="w-16 h-16"
                      src={van.imageUrl}
                      alt={`photo of ${van.name}`}
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-xl leading-8 text-[#161616]">
                        {van.name}
                      </h3>
                      <p className="text-[#4D4D4D] font-medium text-base leading-8">
                        ${van.price} /day
                      </p>
                    </div>
                    <h4 className="text-[#161616] font-medium text-base leading-6  ml-auto">
                      Edit
                    </h4>
                  </div>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VanDetail = () => {
  const [info, setInfo] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setInfo(data.vans))
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <>
      <div className="bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-4">
          {info ? (
            <div className="pt-10 pb-20">
              <h2 className="text-[#201f1d] mb-10 font-medium text-base leading-6 underline">
                Back to all vans
              </h2>
              <img className="mb-12 w-full" src={info.imageUrl} />
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
          ) : (
            <h2>Loading ...</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default VanDetail;

import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [info, setInfo] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setInfo(data.vans))
      .catch((error) => console.error(error));
  }, []);

  const filtered = typeFilter
    ? info.filter((char) => char.type === typeFilter)
    : info;

  return (
    <>
      <div className="bg-[#fff7ed] pb-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-bold text-3xl leading-8 text-[#161616] pt-14 mb-6">
            Explore our van options
          </h1>
          <div className="flex justify-between">
            {[
              { name: "Simple", url: "type=simple" },
              { name: "Luxury", url: "type=luxury" },
              { name: "Rugged", url: "type=rugged" },
            ].map((item, index) => {
              return (
                <div
                  className="bg-[#FFEAD0] cursor-pointer px-3 py-2 rounded-md text-[#4D4D4D] text-center text-base leading-6"
                  onClick={() => setSearchParams(item.url)}
                  key={index}
                >
                  {item.name}
                </div>
              );
            })}
            <p
              onClick={() => setSearchParams({})}
              className="text-[#4D4D4D] font-medium cursor-pointer text-base leading-6 underline"
            >
              Clear filter
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-14">
            {filtered.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/vans/${item.id}`}>
                    <img className="rounded-md" src={item.imageUrl} />
                    <div className="flex justify-between font-semibold text-xl leading-8 text-[#161616]">
                      <h4>{item.name}</h4>
                      <h4>
                        ${item.price}
                        <span className="font-medium  text-sm leading-8 text-right items-center flex  text-[#161616]">
                          /day
                        </span>
                      </h4>
                    </div>
                    <button
                      className={`text-[rgb(255,234,208)] rounded-md text-center text-base leading-8 px-3 py-2 ${
                        item.type === "simple" ? "bg-[#e17654]" : ""
                      } ${item.type === "rugged" ? "bg-[#115e59]" : ""} ${
                        item.type === "luxury" ? "bg-[#161616]" : ""
                      }`}
                    >
                      {item.type}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vans;

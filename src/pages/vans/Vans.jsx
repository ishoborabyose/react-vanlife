import { useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

const Vans = () => {
  const info = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const typeFilter = searchParams.get("type");

  const filtered = typeFilter
    ? info.filter((char) => char.type === typeFilter)
    : info;

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  if (error) {
    return (
      <h1 className="text-2xl font-black text-[#161616] bg-[#FFF7ED] leading-6">
        There was an error: {error.message}
      </h1>
    );
  }

  return (
    <>
      <div className="bg-[#fff7ed] pb-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-bold text-3xl leading-8 text-[#161616] pt-14 mb-6">
            Explore our van options
          </h1>
          <div className="flex justify-between">
            {[
              { name: "Simple", type: "simple" },
              { name: "Luxury", type: "luxury" },
              { name: "Rugged", type: "rugged" },
            ].map((item, index) => {
              return (
                <div
                  className={` cursor-pointer px-3 py-2 rounded-md text-[#4D4D4D]  text-center text-base leading-6
                  ${
                    typeFilter === item.type
                      ? item.type === "luxury"
                        ? "text-white bg-[#161616]"
                        : item.type === "simple"
                        ? "text-white bg-[#e17654]"
                        : "text-white bg-[#115e59]"
                      : "bg-[#FFEAD0]"
                  }
                   `}
                  onClick={() => handleFilterChange("type", item.type)}
                  key={index}
                >
                  {item.name}
                </div>
              );
            })}
            {typeFilter ? (
              <p
                onClick={() => handleFilterChange("type", null)}
                className="text-[#4D4D4D] font-medium cursor-pointer text-base leading-6 underline"
              >
                Clear filter
              </p>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-8 mt-14">
            {filtered.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    to={item.id}
                    state={{
                      search: `?${searchParams.toString()}`,
                      type: typeFilter,
                    }}
                  >
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

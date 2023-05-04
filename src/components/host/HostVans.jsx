import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <div className="max-w-7xl min-h-screen -mb-16  mx-auto px-4">
      <h1 className="text-[#161616] mb-10 font-bold text-4xl leading-8">
        Your listed vans
      </h1>

      {vans.length > 0 ? (
        <section>
          {vans.map((van) => {
            return (
              <Link to={van.id} key={van.id}>
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
                </div>
              </Link>
            );
          })}
        </section>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
};

export default HostVans;

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
    <div>
      <h1>Your listed vans</h1>
      <div>
        {vans.length > 0 ? (
          <section>
            {vans.map((van) => {
              return (
                <Link to={`/host/vans/${van.id}`} key={van.id}>
                  <div className="">
                    <img src={van.imageUrl} alt={`photo of ${van.name}`} />
                    <div className="">
                      <h3>{van.name}</h3>
                      <p>${van.price}</p>
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
    </div>
  );
};

export default HostVans;

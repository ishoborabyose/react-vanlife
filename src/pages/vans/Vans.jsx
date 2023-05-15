import {
  Link,
  useSearchParams,
  useLoaderData,
  Await,
  defer,
} from "react-router-dom";
import VansFilter from "../../components/vansFilter";
import { getVans } from "../../api";
import { Suspense } from "react";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const info = useLoaderData();

  const typeFilter = searchParams.get("type");

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

  function renderVanElements(vans) {
    const filtered = typeFilter
      ? vans.filter((char) => char.type === typeFilter)
      : vans;
    const vanElements = filtered.map((item) => (
      <div key={item.id}>
        <Link
          to={item.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img className="rounded-md" src={item.imageUrl} alt={item.name} />
          <div className="flex justify-between font-semibold text-xl leading-8 text-[#161616]">
            <h4>{item.name}</h4>
            <h4>
              ${item.price}
              <span className="font-medium text-sm leading-8 text-right items-center flex text-[#161616]">
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
    ));

    return (
      <div>
        <VansFilter
          typeFilter={typeFilter}
          handleFilterChange={handleFilterChange}
        />
        <div className="grid grid-cols-2 gap-8 mt-14">{vanElements}</div>
      </div>
    );
  }

  return (
    <div className="bg-[#fff7ed] pb-14">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-bold text-3xl leading-8 text-[#161616] pt-14 mb-6">
          Explore our van options
        </h1>

        <Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={info.vans}>{renderVanElements}</Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Vans;

const VansFilter = ({ typeFilter, handleFilterChange }) => {
  return (
    <div className="flex justify-between">
      {[
        { name: "Simple", type: "simple" },
        { name: "Luxury", type: "luxury" },
        { name: "Rugged", type: "rugged" },
      ].map((item, index) => {
        <div
          className={`cursor-pointer px-3 py-2 rounded-md text-[#4D4D4D] text-center text-base leading-6
              ${
                typeFilter === item.type
                  ? item.type === "luxury"
                    ? "text-white bg-[#161616]"
                    : item.type === "simple"
                    ? "text-white bg-[#e17654]"
                    : "text-white bg-[#115e59]"
                  : "bg-[#FFEAD0]"
              }`}
          onClick={() => handleFilterChange("type", item.type)}
          key={index}
        >
          {item.name}
        </div>;
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
  );
};

export default VansFilter;

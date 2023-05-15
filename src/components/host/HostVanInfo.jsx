import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="font-bold text-sm  leading-5 text-[#161616]">
      <h4 className="my-8">
        Name: <span className="font-medium">{currentVan.name}</span>{" "}
      </h4>
      <h4 className="my-2">
        Category: <span className="font-medium">{currentVan.category} </span>
      </h4>
      <h4 className="my-2">
        Description:
        <span className="font-medium">{currentVan.description}</span>{" "}
      </h4>
      <h4 className="my-2">
        Visibility: <span className="font-medium">Public</span>
      </h4>
    </div>
  );
};

export default HostVanInfo;

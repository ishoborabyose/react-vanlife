import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <h4>Name: {currentVan.name}</h4>
      <h4>Category: {currentVan.category} </h4>
      <h4>Description: {currentVan.description}</h4>
      <h4>Visibility: Public</h4>
    </div>
  );
};

export default HostVanInfo;

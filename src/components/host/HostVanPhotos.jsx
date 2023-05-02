import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <img src={currentVan.imageUrl} />
    </div>
  );
};

export default HostVanPhotos;

import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="py-4">
      <img width={150} src={currentVan.imageUrl} />
    </div>
  );
};

export default HostVanPhotos;

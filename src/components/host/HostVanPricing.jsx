import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <h2>
        ${currentVan.price}
        <span>/day</span>
      </h2>
    </div>
  );
};

export default HostVanPricing;

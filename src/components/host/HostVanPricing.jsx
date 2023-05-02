import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="py-6">
      <h3 className="font-bold text-xl leading-9 text-[#161616] mb-4">
        $ {currentVan.price}
        <span className="font-medium text-base leading-8 text-[#161616]">
          /day
        </span>
      </h3>
    </div>
  );
};

export default HostVanPricing;

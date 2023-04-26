import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#FFF7ED]">
      <div className="flex justify-between py-9 max-w-7xl mx-auto px-4">
        <Link
          to="/"
          className="text-2xl font-black leading-10 text-black hover:underline"
        >
          #VANLIFE
        </Link>
        <div className="flex font-semibold text-base leading-6 text-[#4D4D4D] ">
          <Link to="/about" className="p-2 hover:underline">
            About
          </Link>
          <h3 className="p-2 hover:underline">Vans</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

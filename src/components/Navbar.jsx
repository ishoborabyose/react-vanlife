import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#FFF7ED]">
      <div className="flex justify-between py-9 max-w-7xl mx-auto px-4">
        <Link
          to="/"
          className={`text-2xl font-black leading-10 text-black hover:underline`}
        >
          #VANLIFE
        </Link>
        <div className="flex font-semibold text-base leading-6 text-[#4D4D4D] ">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616] p-2"
                : "p-2 hover:underline hover:text-[#161616]"
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616] p-2"
                : "p-2 hover:underline hover:text-[#161616]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616] p-2"
                : "p-2 hover:underline hover:text-[#161616]"
            }
          >
            Vans
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

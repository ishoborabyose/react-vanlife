import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <div className="bg-[#FFF7ED]">
        <nav className="flex max-w-7xl mx-auto px-4 pt-8 pb-12 space-x-[29px]">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616] p-2"
                : "p-2 hover:underline hover:text-[#161616]"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616] p-2"
                : "p-2 hover:underline hover:text-[#161616]"
            }
            to="income"
          >
            Income
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616] p-2"
                : "p-2 hover:underline hover:text-[#161616]"
            }
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline text-[#161616] p-2"
                : "p-2 hover:underline hover:text-[#161616]"
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default HostLayout;

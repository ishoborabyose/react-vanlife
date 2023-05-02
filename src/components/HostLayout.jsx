import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="flex max-w-7xl mx-auto px-4 justify-evenly items-start">
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
    </>
  );
};

export default HostLayout;

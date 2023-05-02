import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="flex max-w-7xl mx-auto px-4 justify-evenly items-start">
        <NavLink
          to="/host"
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
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-[#161616] p-2"
              : "p-2 hover:underline hover:text-[#161616]"
          }
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;

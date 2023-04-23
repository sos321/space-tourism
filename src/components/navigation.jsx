import { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";

import logo from "./../assets/shared/logo.svg";

function Navigation() {
  return (
    <Fragment>
      <div className="flex items-center justify-between h-16 mt-16">
        <img src={logo} alt="Logo" className="ml-12" />
        <div className="hr:w-2/12 h-[1px] bg-white w-3/12 opacity-25 z-20 absolute left-72"></div>
        <div className="flex items-center justify-center w-7/12 h-24 gap-20 bg-white backdrop-blur-2xl bg-opacity-5">
          {["Home", "Destination", "Crew", "Technology"].map((nav, i) => (
            <NavLink
              to={`/${nav === "Home" ? "" : nav.toLowerCase()}`}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-white border-solid border-b-2"
                    : "border-transparent border-solid border-b-2 hover:border-white hover:border-solid hover:border-b-2 hover:border-opacity-50"
                } text-xl uppercase tracking-widest flex gap-2 h-full items-center transition-all`
              }
              key={i}
            >
              <span className="font-bold">{`0${i}`}</span>
              {nav}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-64 mx-36">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;

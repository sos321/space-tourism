import { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <div>
        <p>Navigation</p>
        {["Home", "Destination", "Crew", "Technology"].map((nav) => (
          <NavLink
            to={`/${nav === "Home" ? "" : nav.toLowerCase()}`}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            {nav}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;

import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

import NavLine from "./UI/nav-line";
import AnimatedLink from "./animated-link";

import logo from "./../assets/shared/logo.svg";

let xDir = 0;

function Navigation() {
  const [dir, setDir] = useState(0);

  function updateDirection(e) {
    const xDirNew = e.clientX;

    if (xDirNew > xDir) setDir(0);
    else if (xDirNew <= xDir) setDir(1);

    xDir = xDirNew;
  }

  return (
    <Fragment>
      <div className="flex items-center justify-between h-16 mt-16">
        <img src={logo} alt="Logo" className="ml-12" />
        <NavLine />
        <LayoutGroup>
          <div
            className="flex items-center justify-center w-7/12 h-24 gap-20 bg-white backdrop-blur-2xl bg-opacity-5"
            onMouseMoveCapture={updateDirection}
          >
            {["Home", "Destination", "Crew", "Technology"].map((nav, i) => (
              <AnimatedLink nav={nav} i={i} dir={dir} key={i} />
            ))}
          </div>
        </LayoutGroup>
      </div>
      <div className="mt-48 mx-36">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;

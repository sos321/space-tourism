import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

import useMediaQuery from "../../hooks/useMediaQuery";

import NavLine from "./nav-line";
import AnimatedLink from "./animated-link";
import MobileNavigation from "./mobile-nav";

import logo from "/logo.svg";

let xDir = 0;
const links = ["Home", "Destination", "Crew", "Technology"];

function Navigation() {
  const [dir, setDir] = useState(0);
  const isMobile = useMediaQuery("(max-width: 665px)");

  function updateDirection(e) {
    const xDirNew = e.clientX;

    if (xDirNew > xDir) setDir(0);
    else if (xDirNew <= xDir) setDir(1);

    xDir = xDirNew;
  }

  return (
    <Fragment>
      <div className="flex items-center justify-between w-full h-16 mt-16 lg:mt-3">
        <img src={logo} alt="Logo" className="ml-12 lg:ml-5 md:w-12 sm:w-10" />
        <NavLine />
        {isMobile ? (
          <MobileNavigation links={links} />
        ) : (
          <LayoutGroup>
            <div
              className="flex items-center justify-center w-7/12 h-24 lg:gap-14 gap-[4.5rem] bg-white backdrop-blur-2xl bg-opacity-5"
              onMouseMoveCapture={updateDirection}
            >
              {links.map((nav, i) => (
                <AnimatedLink nav={nav} i={i} dir={dir} key={i} />
              ))}
            </div>
          </LayoutGroup>
        )}
      </div>
      <div className="h-[calc(100%-14rem)] max-w-[80%] mt-24 mx-auto">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;

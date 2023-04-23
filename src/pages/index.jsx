import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import backgroundImg from "./../assets/home/background-home-desktop.jpg";
import { Link } from "react-router-dom";

function Index() {
  const headingRef = useRef();

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(headingRef.current.offsetWidth - 5);
  }, []);

  return (
    <Fragment>
      {createPortal(
        <img
          src={backgroundImg}
          className="absolute top-0 left-0 w-screen h-screen pointer-events-none -z-40"
        />,
        document.getElementById("img-root")
      )}
      <div className="flex items-end justify-between pr-5 m-auto max-w-7xl">
        <div className="flex flex-col">
          <h2 className="text-3xl tracking-widest uppercase">
            So, you want to travel to
          </h2>
          <h1
            className="uppercase text-[9.2rem] font-heading mt-[-0.5rem] mx-0 w-fit"
            ref={headingRef}
          >
            Space
          </h1>
          <p className="w-1/3 text-lg text-justify" style={{ width: width }}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          className="before:content-[''] before:opacity-0 before:bg-white before:absolute before:rounded-full before:w-80 before:h-80 before:-z-20 hover:before:opacity-25 before:transition-opacity flex items-center justify-center w-48 h-48 text-3xl text-black uppercase bg-white rounded-full justify-self-center font-heading"
          to={"/destination"}
        >
          Explore
        </Link>
      </div>
    </Fragment>
  );
}

export default Index;

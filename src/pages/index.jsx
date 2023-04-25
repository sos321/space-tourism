import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Picture from "../components/picture";
import Page from "../components/UI/page";
import ExploreBtn from "../components/explore";

import backgroundImgDesktop from "./../assets/home/background-home-desktop.jpg";
import backgroundImgTablet from "./../assets/home/background-home-tablet.jpg";
import backgroundImgMobile from "./../assets/home/background-home-mobile.jpg";

function Index() {
  const headingRef = useRef();

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(headingRef.current.offsetWidth - 5);
  }, []);

  return (
    <Fragment>
      {createPortal(
        <Picture
          desktop={backgroundImgDesktop}
          tablet={backgroundImgTablet}
          mobile={backgroundImgMobile}
        />,
        document.getElementById("img-root")
      )}
      <Page className="flex items-end justify-between pr-5 mt-60">
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
        <ExploreBtn />
      </Page>
    </Fragment>
  );
}

export default Index;

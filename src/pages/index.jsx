import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Picture from "../components/UI/picture";
import Page from "../components/UI/page";
import ExploreBtn from "../components/index/explore-btn";

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
      <Page className="flex items-center justify-center pr-5 -mt-24 hr:gap-48 gap-80 md:pr-0 2xl:mt-0 2xl:justify-around lg:gap-24 lg:flex-col lg:items-center lg:justify-center">
        <div className="flex flex-col gap-5 lg:text-center">
          <h2 className="-mb-5 text-3xl tracking-widest uppercase lg:mb-0 text-paragraph">
            So, you want to travel to
          </h2>
          <h1
            className="lg:text-center md:text-9xl uppercase text-[9.2rem] font-heading lg:-mb-4 -ml-[10px] lg:ml-0"
            ref={headingRef}
          >
            Space
          </h1>
          <p
            className="-mt-5 text-lg leading-8 text-justify lg:mt-0 lg:text-center"
            style={{ width: width }}
          >
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

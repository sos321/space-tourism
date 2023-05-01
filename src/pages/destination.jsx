import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Picture from "../components/UI/picture";
import Nav from "../components/navigation/secondary-nav";
import Page from "../components/UI/page";
import DestinationText from "../components/destination/destination-text";

import data from "../data/data.json";

import backgroundImgDesktop from "./../assets/destination/background-destination-desktop.jpg";
import backgroundImgTablet from "./../assets/destination/background-destination-tablet.jpg";
import backgroundImgMobile from "./../assets/destination/background-destination-mobile.jpg";

function Destination() {
  const [planet, setPlanet] = useState(0);
  const [image, setImage] = useState("");

  function clickHandler(idx) {
    setPlanet(idx);
  }

  useEffect(() => {
    const url = `./../assets/destination/image-${data.destinations[
      planet
    ].name.toLowerCase()}.webp`;

    setImage(new URL(url, import.meta.url).href);
  }, [planet]);

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
      <Page title="Pick your destination" num="01">
        <div className="flex flex-row-reverse items-center justify-between lg:justify-center lg:text-center lg:flex-col-reverse h-[5/6]">
          <div>
            <Nav
              selected={planet}
              onClick={clickHandler}
              active="border-white border-solid border-b-2"
              hover="border-transparent border-solid border-b-2 hover:border-white hover:border-solid hover:border-b-2 hover:border-opacity-50"
              general="text-xl uppercase tracking-widest flex gap-2 h-full items-center transition-all"
              title="name"
              items={data.destinations}
            />
            <DestinationText destination={data.destinations[planet]} />
          </div>
          <img
            className="w-5/12 p-10 lg:w-6/12"
            src={image}
            alt={data.destinations[planet].name}
          />
        </div>
      </Page>
    </Fragment>
  );
}

export default Destination;

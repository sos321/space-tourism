import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import Picture from "../components/picture";
import Nav from "../components/secondary-nav";

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
      <motion.div
        className="m-auto max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="flex gap-3 mb-8 text-2xl tracking-widest uppercase">
          <span className="font-bold text-gray-500">01</span> Pick your
          destination
        </h3>
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="">
            <Nav planet={planet} onClick={clickHandler} />
            <h2 className="mb-6 uppercase text-8xl font-heading">
              {data.destinations[planet].name}
            </h2>
            <p className="max-w-lg mb-16 text-lg text-justify">
              {data.destinations[planet].description}
            </p>
            <hr className="mb-7 h-[0.5px]" />
            <div className="flex gap-16">
              <div>
                <p className="mb-2 tracking-wider uppercase text-md">
                  Avg. Distance
                </p>
                <h5 className="text-3xl tracking-wider uppercase font-heading">
                  {data.destinations[planet].distance}
                </h5>
              </div>
              <div>
                <p className="mb-2 tracking-wider uppercase text-md">
                  Est. Travel Time
                </p>
                <h5 className="text-3xl tracking-wider uppercase font-heading">
                  {data.destinations[planet].travel}
                </h5>
              </div>
            </div>
          </div>
          <img
            className="w-5/12 p-10 ml-8"
            src={image}
            alt={data.destinations[planet].name}
          />
        </div>
      </motion.div>
    </Fragment>
  );
}

export default Destination;

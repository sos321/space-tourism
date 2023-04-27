import { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Page from "../components/UI/page";
import Picture from "../components/picture";
import Nav from "../components/secondary-nav";

import data from "./../data/data.json";

import backgroundImgDesktop from "./../assets/crew/background-crew-desktop.jpg";
import backgroundImgTablet from "./../assets/crew/background-crew-tablet.jpg";
import backgroundImgMobile from "./../assets/crew/background-crew-mobile.jpg";

function Crew() {
  const [crew, setCrew] = useState(0);
  const [image, setImage] = useState();

  function clickHandler(crew) {
    setCrew(crew);
  }

  useEffect(() => {
    const names = data.crew[crew].name.toLowerCase().split(" ");

    const url = `./../assets/crew/image-${names[0]}-${names[1]}.webp`;

    setImage(new URL(url, import.meta.url).href);
  }, [crew]);

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
      <Page className="absolute bottom-0 w-full -translate-x-2/4 left-2/4">
        <div className="flex flex-1 gap-20">
          <div className="flex flex-col justify-center flex-1">
            <h3 className="flex grow-[0.3] gap-3 text-2xl tracking-widest uppercase justify-self-start">
              <span className="font-bold text-gray-500">02</span> Meet your crew
            </h3>
            <div className="flex-1 justify-self-center">
              <h3 className="mb-3 text-3xl uppercase font-heading opacity-60">
                {data.crew[crew].role}
              </h3>
              <h2 className="mb-8 text-6xl uppercase font-heading">
                {data.crew[crew].name}
              </h2>
              <p className="w-8/12 mb-24 text-lg text-justify">
                {data.crew[crew].bio}
              </p>
              <Nav
                onClick={clickHandler}
                items={data.crew}
                general="w-3 h-3 rounded-full transition-all"
                hover="hover:bg-gray-300 bg-gray-800"
                active="bg-white"
                selected={crew}
              />
            </div>
          </div>
          <img
            className="flex-shrink-0 w-5/12 h-5/12 aspect-[2/3]"
            src={image}
            alt={data.crew[crew].name}
          />
        </div>
      </Page>
    </Fragment>
  );
}

export default Crew;

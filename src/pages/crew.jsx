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
      <Page className="absolute bottom-0 -translate-x-2/4 left-2/4">
        <h3 className="flex gap-3 mb-10 text-2xl tracking-widest uppercase">
          <span className="font-bold text-gray-500">02</span> Meet your crew
        </h3>
        <div className="flex">
          <div>
            <h3>{data.crew[crew].role}</h3>
            <h2>{data.crew[crew].name}</h2>
            <p>{data.crew[crew].bio}</p>
            <Nav
              onClick={clickHandler}
              items={data.crew}
              general="w-3 h-3 rounded-full transition-all"
              hover="hover:bg-gray-300 bg-gray-800"
              active="bg-white"
              selected={crew}
            />
          </div>
          <img src={image} alt={data.crew[crew].name} />
        </div>
      </Page>
    </Fragment>
  );
}

export default Crew;

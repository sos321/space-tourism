import { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Page from "../components/UI/page";
import Picture from "../components/UI/picture";
import Nav from "../components/navigation/secondary-nav";

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
      <Page title="Meet your crew" num="02" className="relative">
        <div className="absolute bottom-0 flex justify-between w-full h-full md:relative md:gap-10 lg:items-center md:translate-y-0 lg:translate-y-20 lg:flex-col md:flex-col-reverse -translate-x-2/4 left-2/4">
          <div className="flex flex-col justify-center max-w-md lg:text-center">
            <h3 className="mb-3 text-3xl uppercase md:order-2 font-heading opacity-60 ">
              {data.crew[crew].role}
            </h3>
            <h2 className="md:order-3 md:text-5xl whitespace-nowrap lg:whitespace-normal mb-8 text-6xl uppercase font-heading min-[10rem]:">
              {data.crew[crew].name}
            </h2>
            <p className="w-full text-lg text-justify lg:text-center min-h-[10rem] md:order-4">
              {data.crew[crew].bio}
            </p>
            <Nav
              onClick={clickHandler}
              items={data.crew}
              general="w-3 h-3 rounded-full transition-all md:order-1"
              hover="hover:bg-gray-300 bg-gray-800"
              active="bg-white"
              selected={crew}
            />
          </div>
          <div className="flex md:min-h-[21rem] items-end justify-center w-auto h-full lg:self-center sm:h-auto lg:w-7/12 hr:w-8/12 xl:w-5/12">
            <img
              className="w-auto h-full"
              src={image}
              alt={data.crew[crew].name}
            />
            <hr className="absolute h-[1px] md:block hidden w-[80vw] left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </Page>
    </Fragment>
  );
}

export default Crew;

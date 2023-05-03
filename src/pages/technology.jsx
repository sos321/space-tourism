import { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Page from "../components/UI/page";
import Picture from "../components/UI/picture";
import Nav from "../components/navigation/secondary-nav";

import useMediaQuery from "../hooks/useMediaQuery";

import data from "./../data/data.json";

import backgroundImgDesktop from "./../assets/technology/background-technology-desktop.jpg";
import backgroundImgTablet from "./../assets/technology/background-technology-tablet.jpg";
import backgroundImgMobile from "./../assets/technology/background-technology-mobile.jpg";

function Technology() {
  const [technology, setTechnology] = useState(0);
  const [image, setImage] = useState();
  const isOneColumn = useMediaQuery("(max-width: 1023px)");

  function clickHandler(i) {
    setTechnology(i);
  }

  useEffect(() => {
    const names = data.technology[technology].name.toLowerCase().split(" ");

    const url = `./../assets/technology/image-${names[0]}${
      names[1] ? `-${names[1]}` : ""
    }-${isOneColumn ? "landscape" : "portrait"}.jpg`;

    setImage(new URL(url, import.meta.url).href);
  }, [technology, isOneColumn]);

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
      <Page title="Space launch 101" num="03">
        <div className="flex items-center justify-between lg:gap-8 lg:text-center lg:flex-col">
          <Nav
            onClick={clickHandler}
            items={data.technology}
            general="font-heading w-16 h-16 text-2xl transition rounded-full border-slate-600 border flex justify-center items-center"
            hover="hover:border-white"
            active="bg-white text-black"
            selected={technology}
            title="idx"
            customDiv="flex-col flex gap-12 lg:flex-row lg:order-2"
          />
          <div className="flex flex-col justify-center lg:order-3 lg:items-center">
            <h3 className="mb-3 text-base tracking-widest uppercase text-paragraph">
              The terminology...
            </h3>
            <h2 className="mb-6 text-6xl uppercase font-heading">
              {data.technology[technology].name}
            </h2>
            <p className="w-full max-w-md text-lg leading-8">
              {data.technology[technology].description}
            </p>
          </div>
          <img
            className="hr:w-4/12 lg:order-1 lg:w-full"
            src={image}
            alt={data.technology[technology].name}
          />
        </div>
      </Page>
    </Fragment>
  );
}

export default Technology;

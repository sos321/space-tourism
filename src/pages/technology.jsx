import { Fragment } from "react";
import { createPortal } from "react-dom";

import Page from "../components/UI/page";
import Picture from "../components/picture";

import backgroundImgDesktop from "./../assets/technology/background-technology-desktop.jpg";
import backgroundImgTablet from "./../assets/technology/background-technology-tablet.jpg";
import backgroundImgMobile from "./../assets/technology/background-technology-mobile.jpg";

function Technology() {
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
      <Page>
        <h1>This is the Technology page</h1>
      </Page>
    </Fragment>
  );
}

export default Technology;

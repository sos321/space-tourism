import { Fragment } from "react";
import { createPortal } from "react-dom";

import backgroundImg from "./../assets/technology/background-technology-desktop.jpg";

function Technology() {
  return (
    <Fragment>
      {createPortal(
        <img
          src={backgroundImg}
          className="absolute top-0 left-0 w-screen h-screen -z-40"
        />,
        document.getElementById("img-root")
      )}
      <h1>This is the Technology page</h1>
    </Fragment>
  );
}

export default Technology;

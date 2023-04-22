import { Fragment } from "react";
import { createPortal } from "react-dom";

import backgroundImg from "./../assets/home/background-home-desktop.jpg";

function Index() {
  return (
    <Fragment>
      {createPortal(
        <img
          src={backgroundImg}
          className="absolute top-0 left-0 w-screen h-screen -z-40 pointer-events-none"
        />,
        document.getElementById("img-root")
      )}
      <h1>This is the Homepage</h1>
    </Fragment>
  );
}

export default Index;

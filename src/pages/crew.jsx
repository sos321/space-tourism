import { Fragment } from "react";
import { createPortal } from "react-dom";

import backgroundImg from "./../assets/crew/background-crew-desktop.jpg";

function Crew() {
  return (
    <Fragment>
      {createPortal(
        <img
          src={backgroundImg}
          className="absolute top-0 left-0 w-screen h-screen -z-40"
        />,
        document.getElementById("img-root")
      )}
      <h1>This is the Crew page</h1>
    </Fragment>
  );
}

export default Crew;

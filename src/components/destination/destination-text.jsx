import { Fragment } from "react";

export default function DestinationText({ destination }) {
  return (
    <Fragment>
      <h2 className="mb-6 uppercase text-8xl font-heading">
        {destination.name}
      </h2>
      <p className="max-w-lg mb-16 text-lg leading-8 text-justify lg:text-center">
        {destination.description}
      </p>
      <hr className="mb-7 h-[0.5px]" />
      <div className="flex items-center gap-16 xs:flex-col xs:gap-8 lg:justify-around">
        <div>
          <p className="mb-2 tracking-wider uppercase text-md">Avg. Distance</p>
          <h5 className="text-3xl tracking-wider uppercase font-heading">
            {destination.distance}
          </h5>
        </div>
        <div>
          <p className="mb-2 tracking-wider uppercase text-md">
            Est. Travel Time
          </p>
          <h5 className="text-3xl tracking-wider uppercase font-heading">
            {destination.travel}
          </h5>
        </div>
      </div>
    </Fragment>
  );
}

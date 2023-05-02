import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import open from "./../../assets/shared/icon-hamburger.svg";
import close from "./../../assets/shared/icon-close.svg";

export default function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: "100%" },
  };

  return (
    <Fragment>
      <button
        className="z-50 w-6 h-6 mr-5 abosulte"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <img src={close} alt="menu-close" />
        ) : (
          <img src={open} alt="menu-open" />
        )}
      </button>
      <motion.div
        className="absolute top-0 right-0 z-20 flex flex-col w-8/12 h-screen gap-10 pt-32 bg-white backdrop-blur-2xl bg-opacity-5"
        animate={isOpen ? "open" : "close"}
        variants={menuVariants}
        initial={{ x: "100%" }}
      >
        {props.links.map((link, idx) => (
          <NavLink
            className="flex gap-4 ml-10 text-3xl uppercase"
            key={idx}
            to={`/${link === "Home" ? "" : link.toLowerCase()}`}
          >
            <span className="font-bold">{`0${idx}`}</span>
            {link}
          </NavLink>
        ))}
      </motion.div>
    </Fragment>
  );
}

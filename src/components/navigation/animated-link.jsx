import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { Fragment } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

export default function AnimatedLink(props) {
  const [origin, cycleOrigin] = useCycle(0, 1);
  const isHoverable = useMediaQuery("(hover: hover) and (pointer:fine)");

  const hoverVariants = {
    idle: {
      scaleX: 0,
    },
    hover: {
      scaleX: 1,
    },
  };
  return (
    <motion.div
      className="h-full closest"
      whileHover="hover"
      onHoverStart={() => {
        cycleOrigin(props.dir);
      }}
      onHoverEnd={() => {
        cycleOrigin(Math.abs(props.dir - 1));
      }}
      animate="idle"
      initial="idle"
    >
      <NavLink
        to={`/${props.nav === "Home" ? "" : props.nav.toLowerCase()}`}
        className="relative flex items-center h-full gap-2 text-xl tracking-widest uppercase transition-all"
      >
        {({ isActive }) => {
          return (
            <Fragment>
              <span className="font-bold">{`0${props.i}`}</span>
              {props.nav}
              {isActive ? (
                <motion.span
                  className="h-[2px] -mt-[2px] bg-white w-full absolute bottom-0"
                  layout
                  layoutId="active"
                ></motion.span>
              ) : (
                isHoverable && (
                  <motion.span
                    variants={hoverVariants}
                    style={{
                      position: "absolute",
                      height: "2px",
                      width: "100%",
                      marginTop: "-2px",
                      bottom: 0,
                      backgroundColor: "#fff",
                      opacity: 0.4,
                      originX: origin,
                    }}
                  ></motion.span>
                )
              )}
            </Fragment>
          );
        }}
      </NavLink>
    </motion.div>
  );
}

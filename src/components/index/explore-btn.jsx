import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExploreBtn() {
  const hoverExplore = {
    rest: {
      opacity: 0,
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: {
        duration: 2,
      },
    },
    hover: {
      opacity: 0.4,
      scale: 1,
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <motion.div
      whileHover="hover"
      animate="rest"
      initial="rest"
      className="relative"
    >
      <Link
        className="flex items-center justify-center w-48 h-48 text-3xl text-black uppercase bg-white rounded-full justify-self-center font-heading"
        to={"/destination"}
      >
        Explore
      </Link>
      <motion.div
        variants={hoverExplore}
        className="absolute bg-white rounded-full -z-40 top-1/2 left-1/2 w-80 h-80"
      ></motion.div>
    </motion.div>
  );
}

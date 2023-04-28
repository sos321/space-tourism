import { motion } from "framer-motion";

export default function Picture(props) {
  return (
    <motion.picture
      className="absolute top-0 left-0 w-full h-full pointer-events-none -z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <source
        className="absolute block object-cover w-screen h-screen"
        media="(min-width: 1440px)"
        srcSet={props.desktop}
      />
      <source
        className="absolute block object-cover w-screen h-screen"
        media="(min-width: 770px)"
        srcSet={props.tablet}
      />
      <img
        className="absolute block object-cover w-screen h-screen"
        src={props.mobile}
      />
    </motion.picture>
  );
}

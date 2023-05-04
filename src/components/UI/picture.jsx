import { motion } from "framer-motion";

export default function Picture(props) {
  return (
    <motion.picture
      className="w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <source
        className="absolute block object-cover w-screen h-screen"
        media="(min-width: 1024px)"
        srcSet={props.desktop}
      />
      <source
        className="absolute block object-cover w-screen h-screen"
        media="(min-width: 770px)"
        srcSet={props.tablet}
      />
      <img
        className="block object-cover w-full h-full"
        src={props.mobile}
        alt="background-image"
      />
    </motion.picture>
  );
}

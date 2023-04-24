import { motion } from "framer-motion";

export default function Page(props) {
  return (
    <motion.div
      className={`${props.className} m-auto max-w-7xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function Page(props) {
  return (
    <motion.div
      className={`${
        props.className || ""
      } w-full min-h-full h-content mx-auto max-w-[90rem] 2xl:max-w-7xl pb-6`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {props.title && (
        <h3 className="flex gap-3 mb-10 text-2xl tracking-widest uppercase">
          <span className="font-bold text-gray-500">{props.num}</span>
          {props.title}
        </h3>
      )}
      {props.children}
    </motion.div>
  );
}

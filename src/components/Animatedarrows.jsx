import { motion } from "motion/react";

export default function AnimatedArrows() {
  return (
    <>
      <motion.li
        animate={{
          x: [1, 12, 1],
          
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <span className="text-xl text-blue-400">
          <i class="fa-solid fa-play"></i>
        </span>
      </motion.li>
      <motion.li
        animate={{
          x: [1, 12, 1],
          
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <span className="text-xl text-blue-500">
          <i class="fa-solid fa-play"></i>
        </span>
      </motion.li>
      <motion.li
        animate={{
          x: [1, 12, 1],
          
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <span className="text-xl text-blue-700">
          <i class="fa-solid fa-play"></i>
        </span>
      </motion.li>
      <motion.li
        animate={{
          x: [1, 12, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="w-8 h-8 flex items-center justify-center bg-bg-gradientViolet rounded-full"
      >
        <span className="text-lg text-white">
          <i class="fa-solid fa-play"></i>
        </span>
      </motion.li>
    </>
  );
}

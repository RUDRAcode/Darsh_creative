import { easeIn, motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

export default function Word({ word }) {
  const data = word.split("");
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,amount:"all"})
  return (
    <>
      <div className="flex justify-center" ref={ref}>
        {data.map((w,index) => {
          return (
            <>
              <motion.span
              initial={{opacity:0,y:70}}
              animate={{ opacity: inView ? 1 : 0,y:0 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  delay: 0.15 * index,
                }}
              >
                {w}
              </motion.span>
            </>
          );
        })}
      </div>
    </>
  );
}

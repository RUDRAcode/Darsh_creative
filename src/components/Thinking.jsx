import cloud from "../assets/cloud.png";
import { AnimatePresence, motion } from "motion/react";

export default function Thinking({hoverState}) {
  return (
    <>
      <div className="fixed w-[34rem] h-60 right-[14%] top-20 flex flex-col justify-between ">
        <div className="w-full h-full ">
          {hoverState && (
            <motion.img
            key="cloud-image"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              src={cloud}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </>
  );
}

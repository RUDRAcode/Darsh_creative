import { motion } from "motion/react";
import tigerGif from "../assets/tigerGif.gif";
import owl from "../assets/Owl.gif";
import { useState } from "react";
import Word from "./Word";

export default function TigerSide({ setOpen }) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipe = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (e) => {
    const width = window.innerWidth;
    if (width >= 1024) {
      return;
    }
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipe;
    const isRightSwipe = distance < -minSwipe;
    console.log(isLeftSwipe, isRightSwipe);
    if (isRightSwipe) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <motion.section
      className="w-full h-full flex justify-center items-center overflow-hidden relative lg:w-1/2"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-80 h-[30rem] flex flex-col justify-between z-10 p-3 relative mds:w-[22rem] ">
        <div className="w-full h-full rounded-3xl bg-bg-gradientViolet flex flex-col justify-between">
          <div className="w-60 h-60  absolute left-[12.5%] p-2 -top-[1%] mds:w-[16rem] mds:h-[16rem] mds:-top-[7%] mds:left-[14%] sm:w-[18rem] sm:h-[18rem] sm:left-[9%] sm:-top-[12%]">
            <div className="w-full h-full rounded-full bg-bg-borderColor p-3 overflow-hidden unselectable">
              <div className="w-full h-full rounded-full">
                <img src={tigerGif} className="rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-full h-60" />
          <div className="w-full h-[39%] p-4">
            <div className="w-full h-full flex flex-col justify-end unselectable">
              <span className="text-6xl text-center text-violet-700 font-roboto">
                <Word word="STREAM" />
              </span>
              <span className="text-5xl text-center text-violet-700 font-roboto">
                PLAY
              </span>
              <span className="text-5xl text-center text-violet-700 font-roboto">
                ENJOY
              </span>
            </div>
          </div>
          <div className="flex-1 px-1 flex items-end sm:px-3 mds:px-3">
            <div className="w-full h-16 bg-buttonViolet rounded-full flex justify-between p-2 transition-shadow duration-500 hover:shadow-3xl">
              <a href="https://darshoo.com/" target="_blank" className="w-full h-full">
                <div className="w-full h-full flex justify-center items-center cursor-pointer">
                  <span className="font-bold text-3xl text-white">
                    RELAX AND ENJOY
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className="w-full h-28 flex flex-col items-center cursor-pointer absolute bottom-[-7rem] lg:hidden "
        >
          <div className="w-full h-1/2 flex justify-center items-center">
            <span className="text-2xl font-poppins text-cyan">Learning</span>
          </div>
          <div className="w-full h-1/2 flex justify-center ">
            <span
              className="text-3xl w-16 h-full text-center text-white border-2 border-blue-500 rounded-full"
              onClick={() => setOpen(true)}
            >
              <img
                src={owl}
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
}

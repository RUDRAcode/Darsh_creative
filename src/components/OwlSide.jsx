import { motion } from "motion/react";
import Owl from "../assets/Owl.gif";
import tiger from "../assets/tiger2.jpeg";
import { useState } from "react";
import { use } from "react";

export default function OwlSide({ setOpen }) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipe = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipe;
    const isRightSwipe = distance < -minSwipe;
    console.log(isLeftSwipe,isRightSwipe)
    if (isLeftSwipe) {
      setOpen(false);
    } else {
      setOpen(true)
    }
  };
  return (
    <motion.section
      className="w-full h-full flex justify-center items-center relative overflow-hidden lg:w-1/2"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div
        className="w-[26rem] h-[34rem] flex flex-col justify-between z-10 p-3 relative  lg:h-[34rem] ssm:w-[21rem] ssm:h-[30rem]"
      >
        <div className="w-full h-full rounded-3xl bg-bg-gradientViolet flex flex-col">
          <div className="w-96 h-96  absolute left-[4%] p-2 -top-[22%] ssm:w-[15rem] ssm:h-[15rem] ssm:left-[14%] ssm:top-[-1%]">
            <div className="w-full h-full rounded-full bg-bg-borderColor p-3 overflow-hidden">
              <div className="w-full h-full rounded-full">
                <img src={Owl} className="rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-full h-60 ssm:h-52" />
          <div className="w-full h-[39%] p-4">
            <div className="w-full h-full flex flex-col">
              <span className="text-7xl text-center text-violet-700 font-roboto -m-1 ssm:text-6xl">
                DISCOVER
              </span>
              <span className="text-5xl text-center text-violet-700 font-roboto ">
                EXPLORE
              </span>
              <span className="text-5xl text-center text-violet-700 font-roboto">
                ACHIEVE!
              </span>
            </div>
          </div>
          <div className="flex-1 px-3 flex items-end">
            <div className="w-full h-20 bg-buttonViolet rounded-full flex justify-between p-2 ssm:h-16">
              <div className="w-16 h-full bg-bg-JoinNowButton rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">
                  <i class="fa-solid fa-play"></i>
                </span>
              </div>
              <a href="https://www.instaowl.in/" target="_blank">
                <div className="w-72 h-full flex justify-center items-center cursor-pointer ssm:w-56">
                  <span className="font-bold text-[2.6rem] text-white ssm:text-4xl">
                    JOIN NOW 
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <motion.div
          className="w-full h-28 flex flex-col items-center cursor-pointer absolute bottom-[-7rem] lg:hidden "
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
        >
          <div className="w-full h-1/2 flex justify-center items-end pb-1">
            <span className="text-2xl font-poppins text-cyan">Fun</span>
          </div>
          <div className="w-full h-1/2 flex justify-center ">
            <span
              className="text-3xl w-14 h-12 text-center text-white border-2 border-blue-500 rounded-full"
              onClick={() => setOpen(false)}
            >
              <img
                src={tiger}
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
}

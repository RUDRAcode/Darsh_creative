import { motion } from "motion/react";
import tigerGif from "../assets/tigerGif.gif";
import owl from "../assets/Owl.gif";

export default function TigerSide({ setOpen }) {
  return (
    <motion.section
      className="w-full h-full flex justify-center items-center overflow-hidden relative lg:w-1/2"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-[26rem] h-[34rem] flex flex-col justify-between z-10 p-3 relative  lg:h-[34rem]">
        <div className="w-full h-full rounded-3xl bg-bg-gradientViolet flex flex-col justify-between">
          <div className="w-96 h-96  absolute left-[4%] p-2 -top-[24%]">
            <div className="w-full h-full rounded-full bg-bg-borderColor p-3 overflow-hidden">
              <div className="w-full h-full rounded-full">
                <img src={tigerGif} className="rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-full h-40" />
          <div className="w-full h-[54%] p-4">
            <div className="w-full h-full flex flex-col justify-end">
              <span className="text-7xl text-center text-violet-700 font-roboto tracking-tighter -m-2">
                ENDLESS
              </span>
              <span className="text-5xl text-center text-violet-700 font-roboto tracking-tighter -m-1">
                ENTERTAINMENT
              </span>
              <span className="text-5xl text-center text-violet-700 font-roboto tracking-tighter -m-1">
                ANYTIME
              </span>
              <span className="text-5xl text-center text-violet-700 font-roboto tracking-tighter -m-1">
                ANYWHERE
              </span>
            </div>
          </div>
          <div className="flex-1 px-3 flex items-end">
            <div className="w-full h-20 bg-buttonViolet rounded-full flex justify-between p-2">
              <div className="w-16 h-full bg-bg-JoinNowButton rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">
                  <i class="fa-solid fa-play"></i>
                </span>
              </div>
              <a href="https://darshoo.com/" target="_blank">
                <div className="w-72 h-full flex justify-center items-center">
                  <span className="font-bold text-[2.6rem] text-white">
                    ENTER NOW !
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <motion.div
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
        </motion.div>
      </div>
    </motion.section>
  );
}

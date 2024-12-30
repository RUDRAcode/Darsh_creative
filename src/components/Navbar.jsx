import { useState } from "react";
import darshLogo from "../assets/DARSH_LOGO.png"
import AnimatedArrows from "./Animatedarrows";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full h-24 bg-bg-gradientVioletNav px-3  sm:h-[6rem] ">
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-[92%] flex items-center w-[41rem]">
            <span className="w-32 h-full p-1">
              <img src={darshLogo} className="w-full h-full"/>
            </span>
            <span className="text-3xl text-white font-delius">
              Darsh Creative Pvt Ltd
            </span>
          </div>
          <div className="hidden xl:h-full xl:flex-1 xl:block xl:ml-auto">
            <div className="w-full h-full flex justify-end px-12">
              <div className="h-full w-72 relative ">
                <div className="w-full h-full flex items-center">
                  <div className="w-32 h-12 absolute">
                    <ul className="w-full h-full flex items-center justify-between p-2">
                      <AnimatedArrows />
                    </ul>
                  </div>
                  <div className="w-40" />
                  <div className="w-60 h-12 rounded-full bg-bg-pinkToViolet flex items-center justify-center transition-shadow duration-500 hover:shadow-3xl">
                    <a href="https://www.instaowl.in/" target="_blank">
                      <span className="text-2xl font-bold text-white unselectable">
                        INSTA OWL
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-full w-72 relative">
                <div className="w-full h-full  flex items-center">
                  <div className="w-32 h-12 absolute">
                    <ul className="w-full h-full flex items-center justify-between p-2">
                      <AnimatedArrows />
                    </ul>
                  </div>
                  <div className="w-40" />
                  <div className="w-60 h-12 rounded-full bg-bg-pinkToViolet flex items-center justify-center transition-shadow duration-500 hover:shadow-3xl">
                    <a href="https://darshoo.com/" target="_blank">
                      <span className="text-2xl font-bold text-white unselectable">
                        DARSHOO
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

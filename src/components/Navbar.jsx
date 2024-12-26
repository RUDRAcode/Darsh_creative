import { useState } from "react";

export default function Navbar() {
  const [show,setShow]=useState(false)
  return (
    <>
      <div className="w-full h-20 bg-bg-gradientVioletNav px-3 ssm:h-12  sm:h-[6rem] ">
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-full flex items-center w-96 lg:justify-end">
            <span className="text-xl font-poppins text-white tracking-wider sm:text-4xl">
              Darsh Creative Pvt Ltd.
            </span>
          </div>
          <div className="hidden xl:h-full xl:flex-1 xl:block xl:ml-auto">
            <div className="w-full h-full flex justify-end px-8">
              <div className="h-full w-72 relative ">
                {/*INSTAOWL BUTTON*/}
                <span className="absolute font-poppins text-white text-lg right-8">
                  Learning
                </span>
                <div className="w-full h-full flex items-center">
                  <div className="w-32 h-12 absolute left-3">
                    <ul className="w-full h-full flex items-center justify-between p-2">
                      <li>
                        <span className="text-xl text-blue-400">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                      <li>
                        <span className="text-xl text-blue-500">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                      <li>
                        <span className="text-xl text-blue-700">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                      <li className="w-8 h-8 flex items-center justify-center bg-bg-gradientViolet rounded-full">
                        <span className="text-lg text-white">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-40" />
                  <div className="w-60 h-12 rounded-full bg-bg-pinkToViolet flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      INSTA OWL
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-full w-72 relative">
                {/*DARSHOO BUTTON*/}
                <span className="absolute font-poppins text-white text-lg right-8">
                  Entertainment
                </span>
                <div className="w-full h-full  flex items-center">
                  <div className="w-32 h-12 absolute left-3">
                    <ul className="w-full h-full flex items-center justify-between p-2">
                      <li>
                        <span className="text-xl text-blue-400">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                      <li>
                        <span className="text-xl text-blue-500">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                      <li>
                        <span className="text-xl text-blue-700">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                      <li className="w-8 h-8 flex items-center justify-center bg-bg-gradientViolet rounded-full">
                        <span className="text-lg text-white">
                          <i class="fa-solid fa-play"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-40" />
                  <div className="w-60 h-12 rounded-full bg-bg-pinkToViolet flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      DARSHOO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-20 h-full px-4 py-4 cursor-pointer ssm:py-1 sm:py-4 md:py-4" onClick={()=>setShow(!show)}>
            <div className="w-full h-full flex justify-center items-center bg-bg-HamburgerMenu shadow-lg shadow-black">
              <span className="text-3xl text-white ssm:text-2xl ">
                <i class="fa-solid fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

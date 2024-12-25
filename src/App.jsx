import { useState, React, Fragment } from "react";
import "./App.css";

import OwlSide from "./components/OwlSide";
import TigerSide from "./components/TigerSide";
import { AnimatePresence } from "motion/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx"



function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="w-full h-svh flex flex-col relative">
      <Navbar/>
        <AnimatePresence>
          <div className="flex-1 lg:hidden bg-edu-pattern object-cover">
            {open ? (
              <OwlSide setOpen={setOpen}  />
            ) : (
              <TigerSide setOpen={setOpen}   />
            )}
          </div>
        </AnimatePresence>
        <div className="hidden lg:flex lg:flex-1 bg-edu-pattern overflow-hidden">
          <OwlSide/>
          <TigerSide/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;

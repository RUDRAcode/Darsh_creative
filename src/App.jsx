import { useState, React, Fragment } from "react";
import "./App.css";
import OwlSide from "./components/OwlSide";
import TigerSide from "./components/TigerSide";
import { AnimatePresence } from "motion/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx"
import drash from "./assets/darsh.png"



function App() {
  const [open, setOpen] = useState(true);
  const backgroundStyle = {
     backgroundImage: `url(${drash})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    height: '100vh', 
    width: '100%', 
  }
  return (
    <>
      <div className="w-full h-svh flex flex-col relative">
      <Navbar/>
        <AnimatePresence>
          <div className="flex-1 lg:hidden"style={backgroundStyle}>
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

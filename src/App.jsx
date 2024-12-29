import { useState, React, Fragment } from "react";
import "./App.css";
import OwlSide from "./components/OwlSide";
import TigerSide from "./components/TigerSide";
import { AnimatePresence } from "motion/react";
import Service from "./components/Service.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import drash from "./assets/darsh.png"



function App() {
  const [open, setOpen] = useState(true);
  const backgroundStyle = {
    backgroundImage: `url(${drash})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    height: '100%', 
    width: '100%', 
  }
  return (
    <main className="overflow-hidden">
      <div className="w-full h-svh flex flex-col relative">
      <Navbar/>
        <AnimatePresence>
          <div className="min-h-[30rem]  lg:hidden"style={backgroundStyle}>
            {open ? (
              <OwlSide setOpen={setOpen}  />
            ) : (
              <TigerSide setOpen={setOpen}   />
            )}
          </div>
        </AnimatePresence>
        <div className="hidden lg:flex lg:min-h-[37rem]" style={backgroundStyle}>
          <OwlSide/>
          <TigerSide/>
        </div>
      </div>
      <Service/>
      <Footer/>
    </main>
  );
}

export default App;

import { useState, React, Fragment } from "react";
import "./App.css";
import OwlSide from "./components/OwlSide";
import TigerSide from "./components/TigerSide";
import { AnimatePresence, transform } from "motion/react";
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
    <main className="overflow-hidden" style={backgroundStyle}>
      <div className="w-full h-svh flex flex-col relative">
      <Navbar/>
        <AnimatePresence>
          <div className="w-full h-full lg:hidden">
            {open ? (
              <OwlSide setOpen={setOpen}  />
            ) : (
              <TigerSide setOpen={setOpen}   />
            )}
          </div>
        </AnimatePresence>
        <div className="hidden lg:flex lg:min-h-full">
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

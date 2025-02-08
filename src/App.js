import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import BgImage from "../src/assets/2.png";
import Baneer from "./components/Baneer/Baneer"
import OurServices from "./components/OurServices/OurServices"


const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
function App(){
  return<div style={bgStyle} className="overflow-x-hidden">
         <div className="min-h-screen bg-white/50 backdrop-blur-2xl">
    <Navbar/>
    <Hero/>
    <TopList/>
    <Baneer/>
    <OurServices/>
  </div>
   </div>
}
export default App;
import Map from "../components/Map"
import StateDisplay from "../components/StateDisplay"
// import video from "../assets/video (2).mp4"  
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const Home = () => {
  const [side , setSide] = useState(false);
  return (
    <>
    <div className="video-background">
      <div className="overlay"></div>
      <Nav setSide = {setSide} side = {side}/>
     {/* <video autoPlay muted loop>
    <source src={video} type="video/mp4"/>
    </video>  */}
      <Map/>
      <StateDisplay/>
      {side && <Sidebar />}
    </div>
    <div className="w-full bg-black flex gap-2 items-center pt-4 pl-4 pr-4 justify-center">
      <p className="text-white text-md font-semibold">Created By :</p>
      <ul className="flex gap-2">
        <li className="text-white text-md ">Astha Samaddar,</li>
        <li className="text-white text-md ">Srinjoy Pati,</li>
        <li className="text-white text-md ">Banashree Das,</li>
        <li className="text-white text-md ">Sonal Ghosh,</li>
        <li className="text-white text-md ">Masum Kabir Biswas</li>
      </ul>
      
    </div>
    <p className="text-white text-md font-semibold bg-black text-center pt-1 pb-1" >Copyright@2025</p>
    </>
  )
}

export default Home

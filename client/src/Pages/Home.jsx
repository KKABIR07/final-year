import Map from "../components/Map"
import StateDisplay from "../components/StateDisplay"
import video from "../assets/video (2).mp4"  
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const Home = () => {
  const [side , setSide] = useState(false);
  return (
    <div className="video-background">
      <Nav setSide = {setSide} side = {side}/>
     {/* <video autoPlay muted loop>
    <source src={video} type="video/mp4"/>
    </video>  */}
      <Map/>
      <StateDisplay/>
      {side && <Sidebar />}
    </div>
  )
}

export default Home

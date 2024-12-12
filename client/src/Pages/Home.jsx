import Map from "../components/Map"
import StateDisplay from "../components/StateDisplay"
import video from "../assets/video (2).mp4"
const Home = () => {
  return (
    <div className="video-background">
    <video autoPlay muted loop>
    <source src={video} type="video/mp4"/>
    </video>
      <Map/>
      <StateDisplay/>
    </div>
  )
}

export default Home

import Map from "../components/Map"
import StateDisplay from "../components/StateDisplay"

const Home = () => {
  return (
    <div className="flex gap-10 items-center bg-slate-100">
      <Map/>
      <StateDisplay/>
    </div>
  )
}

export default Home

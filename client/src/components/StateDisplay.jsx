
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const StateDisplay = () => {
  const State = useSelector((state) => state.Stateval.value);
  
  return (
    <div className="rounded-md p-5 flex flex-col gap-3 items-center content-2 data-div" >
      <h1 className="text-3xl font-semibold text-white">{State.name.toUpperCase()}</h1>
      <div id="img" className="overflow-hidden rounded-md">
        <img src={State.img} className="h-72 w-full hover:scale-110 transition-all ease-in-out duration-500"/>
      </div>
      <button className=" border border-green-500 hover:bg-green-600 p-3 rounded-md hover:text-white">
        <Link to={`/stateData/${State.name}`} className="text-white" >Know more</Link>
        </button>
    </div>
  )
}

export default StateDisplay

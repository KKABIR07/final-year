
import { useSelector } from "react-redux"
const StateDisplay = () => {
  const State = useSelector((state) => state.Stateval.value);
  
  return (
    <div className="shadow-md shadow-slate-400 rounded-md p-5 flex flex-col gap-3 items-center">
      <h1 className="text-3xl font-semibold">{State.name.toUpperCase()}</h1>
      <div id="img" className="overflow-hidden rounded-md">
        <img src={State.img} className="h-72 w-full hover:scale-110 transition-all ease-in-out duration-500"/>
      </div>
      <button className=" border border-green-500 hover:bg-green-600 p-3 rounded-md hover:text-white">Know more</button>
    </div>
  )
}

export default StateDisplay

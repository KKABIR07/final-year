
import { GiFarmTractor } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col gap-4 text-black side z-30 ">
      <Link to="/irrigation"><p className="flex gap-2 items-center"><GiFarmTractor /> Irrigation Techniques</p></Link>
      <p className="flex gap-2 items-center"><GiFarmTractor/> Pests and Diseases</p>
      <p className="flex gap-2 items-center"><GiFarmTractor/> Soil Types</p>
      <Link to="/fertilizerdata"><p className="flex gap-2 items-center"><GiFarmTractor/> Fertilizers & Pesticides</p></Link>
      <p className="flex gap-2 items-center"><GiFarmTractor/> All Crops</p>
    </div>
  )
}

export default Sidebar

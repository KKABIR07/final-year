
import { GiFarmTractor } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col gap-4 text-black side z-30 ">
      <Link to="/irrigation"><p className="flex gap-2 items-center"><GiFarmTractor /> Irrigation Techniques</p></Link>
      <Link to="/pestdiseases"><p className="flex gap-2 items-center"><GiFarmTractor/> Pests and Diseases</p></Link>
      <Link to="/soildata"><p className="flex gap-2 items-center"><GiFarmTractor/> Soil Types</p></Link>
      <Link to="/fertilizerdata"><p className="flex gap-2 items-center"><GiFarmTractor/> Fertilizers & Pesticides</p></Link>
      <Link to="/allcrops"><p className="flex gap-2 items-center"><GiFarmTractor/> All Crops</p></Link>
    </div>
  )
}

export default Sidebar

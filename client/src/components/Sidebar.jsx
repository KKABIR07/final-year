
import { GiFarmTractor } from "react-icons/gi";
const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col gap-4 text-black side">
      <p className="flex gap-2 items-center"><GiFarmTractor /> Irrigation Techniques</p>
      <p className="flex gap-2 items-center"><GiFarmTractor/> Pests and Diseases</p>
      <p className="flex gap-2 items-center"><GiFarmTractor/> Soil Types</p>
      <p className="flex gap-2 items-center"><GiFarmTractor/> Fertilizers & Pesticides</p>
      <p className="flex gap-2 items-center"><GiFarmTractor/> All Crops</p>
    </div>
  )
}

export default Sidebar

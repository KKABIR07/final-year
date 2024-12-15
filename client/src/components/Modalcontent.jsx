import { useEffect, useState } from "react"


// eslint-disable-next-line react/prop-types
const Modalcontent = ({crop}) => {
   const[data , setData] = useState({})
  useEffect(()=>{
    
    const fetchData = async () => {
      setData({})
      const res = await fetch(
        `http://localhost:5000/api/crop/crops_Colle_Byname/${crop}`
      );
      const Data = await res.json();
      setData(Data)
      console.log(data)
    }

    fetchData();
  },[crop])

  return (
    <>
    {!data.name ? (<div className="flex justify-center items-center h-[450px] text-xl font-semibold">Data not found</div> ) : 
  (<div className="flex flex-col gap-4 h-[450px] overflow-y-auto">
      
      <h1 className="text-center font-semibold text-2xl">{data.name}</h1>
       <img src={data.img} className="rounded-md"/>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold" >Description</h2>
        {data.Description}
      </div>

      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Crop-Duration :</h2>
        {data.crop_duration}
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold">Cultivation-practices :</h2>
        {data.cultivation_practices}
      </div>

      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Rainfall-requirement :</h2>
        {data.rainfall_requirement}
      </div>

      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Scientific-Name :</h2>
        {data.scientific_name}
      </div>

      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Season :</h2>
        {data.season}
      </div>

      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Soil-Type :</h2>
        {data.soil_type}
      </div>


      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Yield-per-hectare :</h2>
        {data.yield_per_hectare}
      </div>

      

    </div>)}</>
  )
}

export default Modalcontent

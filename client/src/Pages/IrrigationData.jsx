import { useEffect, useState } from "react"

const IrrigationData = () => {
  const[data , setData] = useState()
  useEffect(()=>{
    
    const fetchData = async () => {
      
      const res = await fetch(
        `http://localhost:5000/api/Irrigation/IrrigationTechnique`
      );
      const Data = await res.json();
      setData(Data)
      console.log(Data)
    }

    fetchData();
  },[])
  return (
    <div>
       <div className="p-2  w-full bg-[#FFF9F0] h-[93vh] data-text">
          <h2 className="text-center font-semibold text-xl py-2 header-text text-[#2C7A4B]">Irrigation Techniques</h2>
          <div className="h-[83vh] overflow-y-scroll bg-white p-2 rounded-md flex gap-4 flex-col">
          {data?.map((x, i) => (
            
             <div key={i} className="card rounded-md flex gap-2 justify-between items-center "> 
              <div
                className={`flex flex-col gap-3`} 
              >
                <h2 className="cursor-pointer  text-lg text-[#2C7A4B] py-1 font-semibold">{x.technique_name}</h2>
                <div className="flex flex-col gap-1">
                  <h2 className=" font-semibold" >Description:</h2>
                  {x.Description}
                </div> 
               
                <p>
                  <span className="font-semibold">Cost: </span>
                  {x.cost}
                </p>
                <p>
                  <span className="font-semibold">Efficiency: </span>
                  {x.efficiency}
                </p>

                <p>
                  <span className="font-semibold">Water-Usage: </span>
                  {x.water_usage}
                </p>

                <div className="flex gap-1">
                  <span className="font-semibold">Region: </span>
                  {x.region.map((s, index) => (
                    <span key={index}>{index != x.region.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">Suitable_crops: </span>
                  {x.suitable_crops.map((s, index) => (
                    <span key={index}>{index != x.suitable_crops.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                
              </div>
                <img src={x.img} className="w-96 h-96 rounded-md"/>
              </div>
            
          ))}
        </div></div>
    </div>
  )
}

export default IrrigationData


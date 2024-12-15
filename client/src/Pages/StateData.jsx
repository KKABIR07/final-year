import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Modal } from 'antd'
import Modalcontent from "../components/Modalcontent";
const StateData = () => {
  const params = useParams();
  const { state } = params;
  const [data, setData] = useState({});

  const [fruitarr, setfruitarr] = useState([]);
  const[selected , setSelected] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (x) => {
    setIsModalOpen(true);
    setSelected(x);
  };

  const handleOk = () => {
    console.log("Modal OK Clicked");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Modal Cancel Clicked");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:5000/api/auth/cropsByname/${state}`
      );
      const Data = await res.json();
      setData(Data);

      const Fruitsarr = Data?.Crops?.Fruits?.map((fruit) => ({
        ...fruit,
        setVisibility: false,
      }));

      setfruitarr(Fruitsarr);
    };

    fetchData();
  }, [state]);

  console.log(data);

  return (
    <>
    <div>
      
      <Modal
        width="800px"
        title="About the crop"
        open={isModalOpen} 
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} 
      >
        <Modalcontent crop={selected}/>
      </Modal>
    </div>
    <Tabs defaultValue="field-crops" className="min-w-[400px]">
  <TabsList className="bg-[#FFF9F0]">
    <TabsTrigger value="field-crops" >Field-crops</TabsTrigger>
    <TabsTrigger value="fruits">Fruits</TabsTrigger>
    <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
  </TabsList>
  <TabsContent value="field-crops">
  <div className="p-2  w-full bg-[#FFF9F0] h-[93vh] data-text">
          <h2 className="text-center font-semibold text-xl py-2 header-text text-[#2C7A4B]">Field-crops</h2>
          <div className="h-[83vh] overflow-y-scroll bg-white p-2 rounded-md flex gap-4 flex-col">
          {data?.Crops?.FieldCrops.map((x, i) => (
            
              
              <div
                className={`p-2 rounded-md card`} key={i} onClick={()=>showModal(x.Name)}
              >
                <h2 className="cursor-pointer  text-lg text-[#2C7A4B] py-1 font-semibold">{x.Name}</h2>
                <div className="flex gap-1">
                  <span className="font-semibold">Growing-seasons : </span>
                  {x.GrowingSeasons.map((s, index) => (
                    <span key={index}>{index != x.GrowingSeasons.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <p>
                  <span className="font-semibold">Temperature : </span>
                  {x.Temperature}
                </p>

                <p>
                  <span className="font-semibold">Soil-Type : </span>
                  {x.SoilType}
                </p>

                <div className="flex gap-1">
                  <span className="font-semibold">Fertilizers : </span>
                  {x.Fertilizer.map((s, index) => (
                    <span key={index}>{index != x.Fertilizer.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                 <div className="flex gap-1">
                  <span className="font-semibold">Pests-and-Diseases :</span>{" "}
                  {x.CommonPestsDiseases.map((s, index) => (
                    <p key={index}>{index != x.CommonPestsDiseases.length - 1 ? s + " ," : s}</p>
                  ))}
                </div> 
                <div className="flex gap-1">
                  <span className="font-semibold">Pesticides : </span>
                  {x.Pesticides.map((s, index) => (
                    <p key={index}>{index != x.Pesticides.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
                
              </div>
            
          ))}
        </div></div>
  </TabsContent>
  <TabsContent value="fruits">
  <div className="  p-2  w-full bg-[#FFF9F0] h-[93vh] data-text">
          <h2 className="text-center font-semibold text-xl py-2 header-text text-[#2C7A4B]">Fruits</h2>
          <div className="h-[83vh] overflow-y-scroll  bg-white p-2 rounded-md flex gap-4 flex-col">
          {fruitarr.map((x, i) => (
            <div
                className={`p-2 rounded-md card`}
                key={i}
              >
                <h2 className="cursor-pointer  text-lg text-green-600 py-1 font-semibold"
              >
                {x.Name}
              </h2>
                <div className="flex gap-1">
                  <span className="font-semibold">Growing-seasons : </span>
                  {x.GrowingSeason.map((s, index) => (
                    <span key={index}>{index != x.GrowingSeason.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <p>
                  <span className="font-semibold">Temperature : </span>
                  {x.Temperature}
                </p>

                <p>
                  <span className="font-semibold">Soil-Type : </span>
                  {x.SoilType}
                </p>

                <div className="flex gap-1">
                  <span className="font-semibold">Fertilizers : </span>
                  {x.Fertilizer.map((s, index) => (
                    <span key={index}>{index != x.Fertilizer.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                 <div className="flex gap-1">
                  <span className="font-semibold">Pests-and-Diseases :</span>{" "}
                  {x.CommonPestsDiseases.map((s, index) => (
                    <p key={index}>{index != x.CommonPestsDiseases.length - 1 ? s + " ," : s}</p>
                  ))}
                </div> 

                <div className="flex gap-1">
                  <span className="font-semibold">Pesticides : </span>
                  {x.Pesticides.map((s, index) => (
                    <p key={index}>{index != x.Pesticides.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
              </div>
            
          ))}
        </div></div>

  </TabsContent>
  <TabsContent value="vegetables">
  <div className=" rounded-md shadow-md shadow-slate-300 p-2  w-full bg-[#FFF9F0] h-[93vh] data-text">
          <h2 className="text-center font-semibold text-xl py-2 header-text text-[#2C7A4B]">Vegetables</h2>
          <div className="h-[83vh] overflow-y-scroll  bg-white p-2 rounded-md flex gap-4 flex-col">
          {data?.Crops?.Vegetables.map((x, i) => (
            
              
              <div
                className={`p-2 rounded-md card`}
                key={i}
              >
                <h2  className="cursor-pointer  text-lg text-green-600 py-1 font-semibold">{x.Name}</h2>
                <div className="flex gap-1">
                  <span className="font-semibold">Growing-seasons : </span>
                  {x.GrowingSeasons.map((s, index) => (
                    <span key={index}>{index != x.GrowingSeasons.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <p>
                  <span className="font-semibold">Temperature : </span>
                  {x.Temperature}
                </p>

                <p>
                  <span className="font-semibold">Soil-Type : </span>
                  {x.SoilType}
                </p>

                <div className="flex gap-1">
                  <span className="font-semibold">Fertilizers : </span>
                  {x.Fertilizer.map((s, index) => (
                    <span key={index}>{index != x.Fertilizer.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <div className="flex gap-1">
                  <span className="font-semibold">Pests-and-Diseases :</span>{" "}
                  {x.CommonPestsDiseases.map((s, index) => (
                    <p key={index}>{index != x.CommonPestsDiseases.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">Pesticides : </span>
                  {x.Pesticides.map((s, index) => (
                    <p key={index}>{index != x.Pesticides.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
                
              </div>
            
          ))}
        </div></div>
  </TabsContent>
</Tabs>

    {/* <div className="p-4">
      <h1 className="text-left font-semibold text-3xl py-2">{data?.District}</h1>
      <div className="flex flex-col items-start gap-2 justify-center"> 
        <div className=" rounded-md shadow-md shadow-slate-300 p-2  w-full bg-gradient-to-br from-green-400 to-green-300">
          <h2 className="text-center font-semibold text-xl py-2">Field-crops</h2>
          <div className="max-h-[40vh] overflow-y-scroll bg-white">
          {data?.Crops?.FieldCrops.map((x, i) => (
            <div key={i}>
              <p className="cursor-pointer  text-lg text-green-600 py-1">🌱{x.Name}</p>
              <div
                className={`p-2 rounded-md border-2 border-yellow-400`}
              >
                <div className="flex gap-1">
                  <span className="font-semibold">Growing-seasons : </span>
                  {x.GrowingSeasons.map((s, index) => (
                    <span key={index}>{index != x.GrowingSeasons.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <p>
                  <span className="font-semibold">Temperature : </span>
                  {x.Temperature}
                </p>

                <p>
                  <span className="font-semibold">Soil-Type : </span>
                  {x.SoilType}
                </p>

                <div className="flex gap-1">
                  <span className="font-semibold">Fertilizers : </span>
                  {x.Fertilizer.map((s, index) => (
                    <span key={index}>{index != x.Fertilizer.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                 <div className="flex gap-1">
                  <span className="font-semibold">Pests-and-Diseases :</span>{" "}
                  {x.CommonPestsDiseases.map((s, index) => (
                    <p key={index}>{index != x.CommonPestsDiseases.length - 1 ? s + " ," : s}</p>
                  ))}
                </div> 
                <div className="flex gap-1">
                  <span className="font-semibold">Pesticides : </span>
                  {x.Pesticides.map((s, index) => (
                    <p key={index}>{index != x.Pesticides.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div></div>

        <div className=" rounded-md shadow-md shadow-slate-300 p-2  w-full bg-gradient-to-br from-green-400 to-green-300">
          <h2 className="text-center font-semibold text-xl py-2">Fruits</h2>
          <div className="max-h-[40vh] overflow-y-scroll bg-white p-1">
          {fruitarr.map((x, i) => (
            <div key={i}>
              <p
                onClick={() => {
                  const updatedfruits = [...fruitarr];
                  updatedfruits[i].setVisibility = !fruitarr[i].setVisibility;
                  setfruitarr(updatedfruits);
                  console.log(fruitarr);
                }}
                className="cursor-pointer  text-lg text-green-600 py-1"
              >
                🌱{x.Name}
              </p>

              <div
                className={`${
                  x.setVisibility && "hidden"
                } p-2 rounded-md border-2 border-yellow-400`}
              >
                <div className="flex gap-1">
                  <span className="font-semibold">Growing-seasons : </span>
                  {x.GrowingSeason.map((s, index) => (
                    <span key={index}>{index != x.GrowingSeason.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <p>
                  <span className="font-semibold">Temperature : </span>
                  {x.Temperature}
                </p>

                <p>
                  <span className="font-semibold">Soil-Type : </span>
                  {x.SoilType}
                </p>

                <div className="flex gap-1">
                  <span className="font-semibold">Fertilizers : </span>
                  {x.Fertilizer.map((s, index) => (
                    <span key={index}>{index != x.Fertilizer.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                 <div className="flex gap-1">
                  <span className="font-semibold">Pests-and-Diseases :</span>{" "}
                  {x.CommonPestsDiseases.map((s, index) => (
                    <p key={index}>{index != x.CommonPestsDiseases.length - 1 ? s + " ," : s}</p>
                  ))}
                </div> 

                <div className="flex gap-1">
                  <span className="font-semibold">Pesticides : </span>
                  {x.Pesticides.map((s, index) => (
                    <p key={index}>{index != x.Pesticides.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div></div>

        <div className=" rounded-md shadow-md shadow-slate-300 p-2 w-full bg-gradient-to-br from-green-400 to-green-300">
          <h2 className="text-center font-semibold text-xl py-2">Vegetables</h2>
          <div className="max-h-[40vh] overflow-y-scroll bg-white">
          {data?.Crops?.Vegetables.map((x, i) => (
            <div key={i}>
              <p  className="cursor-pointer  text-lg text-green-600 py-1">🌱{x.Name}</p>
              <div
                className={`p-2 rounded-md border-2 border-yellow-400`}
              >
                <div className="flex gap-1">
                  <span className="font-semibold">Growing-seasons : </span>
                  {x.GrowingSeasons.map((s, index) => (
                    <span key={index}>{index != x.GrowingSeasons.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <p>
                  <span className="font-semibold">Temperature : </span>
                  {x.Temperature}
                </p>

                <p>
                  <span className="font-semibold">Soil-Type : </span>
                  {x.SoilType}
                </p>

                <div className="flex gap-1">
                  <span className="font-semibold">Fertilizers : </span>
                  {x.Fertilizer.map((s, index) => (
                    <span key={index}>{index != x.Fertilizer.length - 1 ? s + " ," : s}</span>
                  ))}
                </div>

                <div className="flex gap-1">
                  <span className="font-semibold">Pests-and-Diseases :</span>{" "}
                  {x.CommonPestsDiseases.map((s, index) => (
                    <p key={index}>{index != x.CommonPestsDiseases.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">Pesticides : </span>
                  {x.Pesticides.map((s, index) => (
                    <p key={index}>{index != x.Pesticides.length - 1 ? s + " ," : s}</p>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div></div>
      </div>
    </div> */}
    </>
  );
};

export default StateData;

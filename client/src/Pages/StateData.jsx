import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Modal } from 'antd';
import Modalcontent from "../components/Modalcontent";

const StateData = () => {
  const { state } = useParams();
  const [data, setData] = useState({});
  const [fruitarr, setfruitarr] = useState([]);
  const [selected, setSelected] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ loading state

  const showModal = (x) => {
    setIsModalOpen(true);
    setSelected(x);
  };

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/auth/cropsByname/${state}`);
        const Data = await res.json();
        setData(Data);

        const Fruitsarr = Data?.Crops?.Fruits?.map((fruit) => ({
          ...fruit,
          setVisibility: false,
        }));

        setfruitarr(Fruitsarr);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false); // ✅ stop loader after fetch
      }
    };

    fetchData();
  }, [state]);

  return (
    <>
      <Modal
        width="800px"
        title="About the crop"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Modalcontent crop={selected} />
      </Modal>

      {loading ? (
        <div className="h-[93vh] w-full flex items-center justify-center text-[#2C7A4B] text-lg font-medium">
          ⏳ Loading state-wise crop data...
        </div>
      ) : (
        <Tabs defaultValue="field-crops" className="min-w-[400px]">
          <TabsList className="bg-[#FFF9F0]">
            <TabsTrigger value="field-crops">Field-crops</TabsTrigger>
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          </TabsList>

          {/* FIELD CROPS */}
          <TabsContent value="field-crops">
            <div className="p-2 w-full bg-[#FFF9F0] h-[93vh]">
              <h2 className="text-center font-semibold text-xl py-2 text-[#2C7A4B]">Field-crops</h2>
              <div className="h-[83vh] overflow-x-auto whitespace-nowrap p-2 rounded-md flex gap-4">
                {data?.Crops?.FieldCrops.map((x, i) => (
                  <div
                    key={i}
                    onClick={() => showModal(x.Name)}
                    className="min-w-[350px] p-4 rounded-md bg-white hover:bg-gray-100 cursor-pointer shadow-md transition-transform duration-300 transform hover:scale-105 flex flex-col gap-5"
                  >
                    <h2 className="text-lg text-[#2C7A4B] font-semibold mb-2 truncate">🌱 {x.Name}</h2>
                    <p className="text-sm"><strong>📅 Growing Seasons:</strong> {x.GrowingSeasons.join(", ")}</p>
                    <p className="text-sm"><strong>☀ Temperature:</strong> {x.Temperature}</p>
                    <p className="text-sm"><strong>🌍 Soil Type:</strong> {x.SoilType}</p>
                    <p className="text-sm"><strong>💊 Fertilizers:</strong> {x.Fertilizer.join(", ")}</p>
                    <p className="text-sm"><strong>🐛 Pests:</strong> {x.CommonPestsDiseases.join(", ")}</p>
                    <p className="text-sm"><strong>🧪 Pesticides:</strong> {x.Pesticides.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* FRUITS */}
          <TabsContent value="fruits">
            <div className="p-2 w-full bg-[#FFF9F0] h-[93vh]">
              <h2 className="text-center font-semibold text-xl py-2 text-[#2C7A4B]">Fruits</h2>
              <div className="h-[83vh] overflow-x-auto whitespace-nowrap p-2 rounded-md flex gap-4">
                {fruitarr.map((x, i) => (
                  <div
                    key={i}
                    onClick={() => showModal(x.Name)}
                    className="min-w-[350px] p-4 rounded-md bg-white hover:bg-gray-100 cursor-pointer shadow-md transition-transform duration-300 transform hover:scale-105 flex flex-col gap-5"
                  >
                    <h2 className="text-lg text-[#2C7A4B] font-semibold mb-2 truncate">🍎 {x.Name}</h2>
                    <p className="text-sm"><strong>📅 Growing Seasons:</strong> {x.GrowingSeason.join(", ")}</p>
                    <p className="text-sm"><strong>☀ Temperature:</strong> {x.Temperature}</p>
                    <p className="text-sm"><strong>🌍 Soil Type:</strong> {x.SoilType}</p>
                    <p className="text-sm"><strong>💊 Fertilizers:</strong> {x.Fertilizer.join(", ")}</p>
                    <p className="text-sm"><strong>🐛 Pests:</strong> {x.CommonPestsDiseases.join(", ")}</p>
                    <p className="text-sm"><strong>🧪 Pesticides:</strong> {x.Pesticides.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* VEGETABLES */}
          <TabsContent value="vegetables">
            <div className="p-2 w-full bg-[#FFF9F0] h-[93vh]">
              <h2 className="text-center font-semibold text-xl py-2 text-[#2C7A4B]">Vegetables</h2>
              <div className="h-[83vh] overflow-x-auto whitespace-nowrap p-2 rounded-md flex gap-4">
                {data?.Crops?.Vegetables.map((x, i) => (
                  <div
                    key={i}
                    onClick={() => showModal(x.Name)}
                    className="min-w-[350px] p-4 rounded-md bg-white hover:bg-gray-100 cursor-pointer shadow-md transition-transform duration-300 transform hover:scale-105 flex flex-col gap-5"
                  >
                    <h2 className="text-lg text-[#2C7A4B] font-semibold mb-2 truncate">🥦 {x.Name}</h2>
                    <p className="text-sm"><strong>📅 Growing Seasons:</strong> {x.GrowingSeasons.join(", ")}</p>
                    <p className="text-sm"><strong>☀ Temperature:</strong> {x.Temperature}</p>
                    <p className="text-sm"><strong>🌍 Soil Type:</strong> {x.SoilType}</p>
                    <p className="text-sm"><strong>💊 Fertilizers:</strong> {x.Fertilizer.join(", ")}</p>
                    <p className="text-sm"><strong>🐛 Pests:</strong> {x.CommonPestsDiseases.join(", ")}</p>
                    <p className="text-sm"><strong>🧪 Pesticides:</strong> {x.Pesticides.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </>
  );
};

export default StateData;

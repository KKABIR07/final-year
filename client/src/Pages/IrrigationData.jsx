import { useEffect, useState } from "react";

const IrrigationData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/Irrigation/IrrigationTechnique`);
        const Data = await res.json();
        setData(Data);
        setIsLoading(false);
        console.log(Data);
      } catch (error) {
        console.error("Error fetching irrigation data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 w-full bg-[#FFF9F0] h-[93vh] overflow-hidden">
      <h2 className="text-center font-semibold text-xl py-2 text-[#2C7A4B]">
        🚜 Irrigation Techniques
      </h2>

      <div className="overflow-x-auto h-[83vh] bg-white p-4 rounded-md">
        {isLoading ? (
          <div className="h-full w-full flex justify-center items-center text-[#2C7A4B] text-lg font-medium">
            ⏳ Loading irrigation techniques...
          </div>
        ) : (
          <div className="flex gap-6 w-max">
            {data?.map((x, i) => (
              <div
                key={i}
                className="min-w-[400px] max-w-[400px] h-[500px] overflow-auto bg-[#F9F9F9] shadow-lg rounded-md p-4 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-3">
                  <img
                    src={x.img}
                    alt={x.technique_name}
                    className="w-full h-40 object-cover rounded-md mt-1"
                  />
                  <h2 className="text-lg font-bold text-[#2C7A4B]">
                    💡 {x.technique_name}
                  </h2>

                  <div>
                    <p className="font-semibold">📝 Description:</p>
                    <p>{x.Description}</p>
                  </div>

                  <p>
                    💰 <span className="font-semibold">Cost:</span> {x.cost}
                  </p>
                  <p>
                    ⚙️ <span className="font-semibold">Efficiency:</span> {x.efficiency}
                  </p>
                  <p>
                    💧 <span className="font-semibold">Water Usage:</span> {x.water_usage}
                  </p>
                  <p>
                    🗺️ <span className="font-semibold">Region:</span> {x.region.join(", ")}
                  </p>
                  <p>
                    🌾 <span className="font-semibold">Suitable Crops:</span> {x.suitable_crops.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IrrigationData;

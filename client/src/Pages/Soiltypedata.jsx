import { useEffect, useState } from "react";

const SoilTypeData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSoilData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/Soil/SoilTypeData");
        const soilData = await res.json();
        setData(soilData);
      } catch (error) {
        console.error("Error fetching soil type data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSoilData();
  }, []);

  return (
    <div className="p-4 w-full bg-[#FFF9F0] h-[93vh] overflow-hidden">
      <h2 className="text-center font-semibold text-xl py-2 text-[#2C7A4B]">
        🧱 Soil Types
      </h2>

      <div className="overflow-x-auto h-[83vh] bg-white p-4 rounded-md">
        {isLoading ? (
          <div className="h-full w-full flex justify-center items-center text-[#2C7A4B] text-lg font-medium">
            ⏳ Loading soil type data...
          </div>
        ) : (
          <div className="flex gap-6 w-max">
            {data?.map((x, i) => (
              <div
                key={i}
                className="min-w-[400px] max-w-[400px] h-[550px] bg-[#F9F9F9] shadow-md rounded-md p-4 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-3">
                  <img
                    src={x.img}
                    alt={x.soil_type}
                    className="w-full h-40 object-cover rounded-md mt-2"
                  />
                  <h2 className="text-lg font-bold text-[#2C7A4B]">
                    🧱 {x.type_name}
                  </h2>
                  <p>
                    📄 <span className="font-semibold">Description:</span> {x.Description}
                  </p>
                  <p>
                    🧱 <span className="font-semibold">Fertility:</span> {x.properties.fertility}
                  </p>
                  <p>
                    ⚙️ <span className="font-semibold">Texture:</span> {x.properties.texture}
                  </p>
                  <p>
                    💧 <span className="font-semibold">Water Retention:</span> {x.properties.water_retention}
                  </p>
                  <p>
                    🌱 <span className="font-semibold">Suitable Crops:</span> {x.suitable_crops?.join(", ")}
                  </p>
                  <p>
                    🗺️ <span className="font-semibold">Region:</span> {x.region?.join(", ")}
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

export default SoilTypeData;

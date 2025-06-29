import { useEffect, useState } from "react";

const FertilizerData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/Fertilizer/getFertilizerPesticideData`);
        const Data = await res.json();
        setData(Data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching fertilizer data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 w-full bg-[#FFF9F0] h-[93vh] overflow-hidden">
      <h2 className="text-center font-semibold text-xl py-2 text-[#2C7A4B]">
        🌿 Fertilizer & Pesticide Info
      </h2>

      <div className="overflow-x-auto h-[83vh] bg-white p-4 rounded-md">
        {isLoading ? (
          <div className="h-full w-full flex justify-center items-center text-[#2C7A4B] text-lg font-medium">
            ⏳ Loading fertilizer data...
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
                    alt={x.product_name}
                    className="w-full h-40 object-cover rounded-md mt-2"
                  />
                  <h2 className="text-lg font-bold text-[#2C7A4B]">
                    🧪 {x.product_name}
                  </h2>

                  <p>
                    💊 <span className="font-semibold">Recommended Dosage:</span> {x.recommended_dosage}
                  </p>
                  <p>
                    ⏰ <span className="font-semibold">Application Timing:</span> {x.application_timing}
                  </p>
                  <p>
                    🌱 <span className="font-semibold">Organic/Chemical:</span> {x.organic_chemical}
                  </p>
                  <p>
                    ⚠️ <span className="font-semibold">Side Effects:</span> {x.side_effects}
                  </p>
                  <p>
                    🌾 <span className="font-semibold">Applicable Crops:</span> {x.crop_applicable.join(", ")}
                  </p>
                  <p>
                    🗺️ <span className="font-semibold">Regions:</span> {x.region.join(", ")}
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

export default FertilizerData;

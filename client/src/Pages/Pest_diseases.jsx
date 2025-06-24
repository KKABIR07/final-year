import { useEffect, useState } from "react";

const PestDiseases = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPestDiseaseData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/PestDisease/getPestDiseaseData");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching pest and disease data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPestDiseaseData();
  }, []);

  return (
    <div className="p-4 w-full bg-[#FFF9F0] h-[93vh] overflow-hidden">
      <h2 className="text-center font-semibold text-xl py-2 text-[#2C7A4B]">
        🐛 Pest & Disease Information
      </h2>

      <div className="overflow-x-auto h-[83vh] bg-white p-4 rounded-md">
        {isLoading ? (
          <div className="h-full w-full flex justify-center items-center text-[#2C7A4B] text-lg font-medium">
            ⏳ Loading pest and disease data...
          </div>
        ) : (
          <div className="flex gap-6 w-max">
            {data.map((item, i) => (
              <div
                key={item._id || i}
                className="min-w-[400px] max-w-[400px] h-[550px] bg-[#F9F9F9] shadow-md rounded-md p-4 flex flex-col justify-between"
              >
                <img
                  src={item.img}
                  alt={item.pest_name}
                  className="w-full h-40 object-cover rounded-md mt-2"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-bold text-[#2C7A4B]">🐞 {item.pest_name}</h2>
                  <p>🦠 <span className="font-semibold">Disease:</span> {item.disease_name}</p>
                  <p>🌾 <span className="font-semibold">Affected Crops:</span> {item.affected_crops.join(", ")}</p>
                  <p>🔍 <span className="font-semibold">Symptoms:</span> {item.symptoms}</p>
                  <p>🛡️ <span className="font-semibold">Prevention:</span> {item.prevention_methods}</p>
                  <p>💉 <span className="font-semibold">Treatment:</span> {item.treatment}</p>
                  <p>📅 <span className="font-semibold">Season:</span> {item.season_of_occurrence}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PestDiseases;

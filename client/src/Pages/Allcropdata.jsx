import { useEffect, useState } from "react";

const emojiMap = {
  season: "🌱",
  soil_type: "🌍",
  rainfall_requirement: "🌧️",
  crop_duration: "📅",
  yield_per_hectare: "📈",
  scientific_name: "🔬"
};

const Allcropdata = () => {
  const [crops, setCrops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/crop/crops-collection")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching crops:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4 w-full bg-[#FFF9F0] h-[93vh] overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#2C7A4B]">🌾 All Crop Data</h2>

      <div className="overflow-x-auto h-[83vh] bg-white p-4 rounded-md">
        {isLoading ? (
          <div className="h-full w-full flex justify-center items-center text-[#2C7A4B] text-lg font-medium">
            ⏳ Loading crop data...
          </div>
        ) : (
          <div className="flex space-x-4 w-max h-[80vh]">
            {crops.map((crop) => (
              <div
                key={crop._id}
                className="min-w-[400px] max-w-[400px] h-[550px] bg-white rounded-2xl shadow-lg p-4 flex-shrink-0 flex flex-col gap-5"
              >
                <img
                  src={crop.img}
                  alt={crop.name}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h3 className="text-lg font-semibold text-[#2C7A4B]">{crop.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {emojiMap.scientific_name} {crop.scientific_name}
                </p>
                <ul className="text-sm text-gray-700 space-y-3">
                  <li>{emojiMap.season} <strong>Season:</strong> {crop.season}</li>
                  <li>{emojiMap.soil_type} <strong>Soil:</strong> {crop.soil_type}</li>
                  <li>{emojiMap.rainfall_requirement} <strong>Rainfall:</strong> {crop.rainfall_requirement}</li>
                  <li>{emojiMap.crop_duration} <strong>Duration:</strong> {crop.crop_duration}</li>
                  <li>{emojiMap.yield_per_hectare} <strong>Yield:</strong> {crop.yield_per_hectare}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Allcropdata;

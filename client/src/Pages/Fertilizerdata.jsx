import { useEffect, useState } from "react";

const FertilizerData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/Fertilizer/getFertilizerPesticideData`);
        const Data = await res.json();
        setData(Data);
      } catch (error) {
        console.error("Error fetching fertilizer data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-2 w-full bg-[#FFF9F0] h-[93vh] data-text">
      <h2 className="text-center font-semibold text-xl py-2 header-text text-[#2C7A4B]">
        Fertilizers
      </h2>
      <div className="h-[83vh] overflow-y-scroll bg-white p-2 rounded-md flex gap-4 flex-col">
        {data?.map((x, i) => (
          <div key={i} className="card rounded-md flex gap-2 p-4 justify-between items-center ">
            <div className="flex flex-col gap-3">
              <h2 className="cursor-pointer text-lg text-[#2C7A4B] py-1 font-semibold">
                {x.product_name}
              </h2>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold">Recommended Dosage:</h2>
                <p>{x.recommended_dosage}</p>
              </div>
              <p>
                <span className="font-semibold">Application Timing: </span>
                {x.application_timing}
              </p>
              <p>
                <span className="font-semibold">Organic/Chemical: </span>
                {x.organic_chemical}
              </p>
              <p>
                <span className="font-semibold">Side Effects: </span>
                {x.side_effects}
              </p>
              <div className="flex gap-1">
                <span className="font-semibold">Applicable Crops: </span>
                {x.crop_applicable.join(", ")}
              </div>
              <div className="flex gap-1">
                <span className="font-semibold">Regions: </span>
                {x.region.join(", ")}
              </div>
            </div>
            <img src={x.img} alt={x.product_name} className="w-96 h-96 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FertilizerData;

import { useState } from "react";

const Form = () => {


  const [cropTypes, setCropTypes] = useState([{ cropCount: 1 }]);

  const [season, setSeason] = useState(""); //currnt input
  const [seasons, setSeasons] = useState([]); //incoming inputs

  const [fertilizer, setFertilizer] = useState('')
  const [fertilizers, setFertilizers] = useState([])

  const [pesticide, setPesticide] = useState('')
  const [pesticides, setPesticides] = useState([])

  const [pest, setPest] = useState('')
  const [pests, setPests] = useState([])


  const handleSeason = (e) => {
    e.preventDefault();
    console.log(seasons);
    if (season.trim()) {
      setSeasons([...seasons, season.trim()]);
      setSeason("");
    }else {
      alert("Please enter a valid season."); 
    }

  };

  const handleFertilizer = (e) =>{
    e.preventDefault()
    if (fertilizer.trim()){
      setFertilizers([...fertilizers, fertilizer.trim()])
      setFertilizer("")
      console.log(fertilizers)
    }else {
      alert("Please enter a valid fertilixer."); 
    }
  }


  const handlePesticides = (e) =>{
    e.preventDefault()
    if (pesticide.trim()){
      setPesticides([...pesticides, pesticide.trim()])
      setPesticide("")
      console.log(pesticides)
    }else {
      alert("Please enter a valid fertilixer."); 
    }
  }

  const handlePest = (e) =>{
    e.preventDefault()
    if (pest.trim()){
      setPests([...pests, pest.trim()])
      setPest("")
      console.log(pests)
    }else {
      alert("Please enter a valid fertilixer."); 
    }
  }

  const handleAddCropType = (e) => {
    e.preventDefault();
    setCropTypes([...cropTypes, { cropCount: 1 }]);
  };

  const handleAddCrop = (index) => (e) => {
    e.preventDefault();
    const updatedCropTypes = cropTypes.map((cropType, i) => {
      if (i === index) {
        return { ...cropType, cropCount: cropType.cropCount + 1 };
      }
      return cropType;
    });
    setCropTypes(updatedCropTypes);
  };

  return (
    <form className="flex flex-col gap-5 m-20">
      <div className="flex gap-5">
        <label className="font-bold">Select State</label>
        <select className="p-2.5 border-2 w-1/5 rounded-lg">
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CT">Chhattisgarh</option>
          <option value="GA">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="GA">Goa</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="ML">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Odisha</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UT">Uttarakhand</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="WB">
            West Bengal
          </option>
          <option value="AN">Andaman and Nicobar Islands</option>
          <option value="CH">Chandigarh</option>
          <option value="DN">Dadra and Nagar Haveli</option>
          <option value="DD">Daman and Diu</option>
          <option value="DL">Delhi</option>
          <option value="LD">Lakshadweep</option>
          <option value="PY">Puducherry</option>
        </select>
      </div>
      {/* Render each crop type and its crops */}
      {cropTypes.map((cropType, cropTypeIndex) => (
        <div key={cropTypeIndex} className="flex flex-col gap-7 border-2  p-5">
          <div className="flex gap-5">
            <label className="w-1/12 font-bold">Crop Type</label>
            <input
              type="text"
              placeholder="Type of crop?"
              className="p-2 border-2 rounded-lg"
            />
          </div>

          {/* Render crops for this crop type */}
          <div className="flex flex-col gap-7">
            {[...Array(cropType.cropCount)].map((_, cropIndex) => (
              <div
                key={cropIndex}
                className="flex flex-col gap-2.5 border-2 p-5"
              >
                <div className="flex gap-5">
                  <label className="w-1/12">Name of crop</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2.5 w-1/5 rounded-lg"
                  />
                </div>
                <div className="flex gap-5">
                  <label className="w-1/12">Season</label>
                  <input
                    type="text"
                    placeholder="Growing Season"
                    className="p-2.5 w-1/5 rounded-lg"
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                  />
                  <button onClick={handleSeason} className="bg-blue-500 text-white p-2 rounded"                  >Add</button>
                </div>
                <div className="m-2 flex gap-2">
                  {seasons.map((s, index) => (
                    <div
                      key={index}
                      className="p-2.5 w-fit bg-gray-100 rounded-lg mt-2"
                    >
                      {s}
                    </div>
                  ))}
                </div>

                <div className="flex gap-5">
                  <label className="w-1/12">Ideal Temperature</label>
                  <input
                    type="text"
                    placeholder="Temperature"
                    className="p-2.5 w-1/5 rounded-lg"
                  />
                </div>
                <div className="flex gap-5">
                  <label className="w-1/12">Soil Type</label>
                  <input
                    type="text"
                    placeholder="Soil Type"
                    className="p-2.5 w-1/5 rounded-lg"
                  />
                </div>
                <div className="flex gap-5">
                  <label className="w-1/12">Name of Fertilizer</label>
                  <input
                    type="text"
                    placeholder="Fertilizer"
                    className="p-2.5 w-1/5 rounded-lg"
                    value={fertilizer}
                    onChange={(e) => setFertilizer(e.target.value)}
                  />
                  <button onClick={handleFertilizer} className="bg-blue-500 text-white p-2 rounded">Add</button>
                  
                </div>
                <div className="m-2 flex gap-2">
                  {fertilizers.map((f, index) => (
                    <div
                      key={index}
                      className="p-2.5 w-fit bg-gray-100 rounded-lg mt-2"
                    >
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex gap-5">
                  <label className="w-1/12">Name of Pesticides</label>
                  <input
                    type="text"
                    placeholder="Pesticides"
                    className="p-2.5 w-1/5 rounded-lg"
                    value={pesticide}
                    onChange={(e) => setPesticide(e.target.value)}
                  />
                  <button onClick={handlePesticides} className="bg-blue-500 text-white p-2 rounded">Add</button>

                </div>
                <div className="m-2 flex gap-2">
                  {pesticides.map((p, index) => (
                    <div
                      key={index}
                      className="p-2.5 w-fit bg-gray-100 rounded-lg mt-2"
                    >
                      {p}
                    </div>
                  ))}
                </div>

                <div className="flex gap-5">
                  <label className="w-1/12">Common Pests/Diseases</label>
                  <input
                    type="text"
                    placeholder="Common Pests/Diseases"
                    className="p-2.5 w-1/5 rounded-lg"
                    value={pest}
                    onChange={(e) => setPest(e.target.value)}
                  />
                  <button onClick={handlePest} className="bg-blue-500 text-white p-2 rounded">Add</button>
                </div>
                <div className="m-2 flex gap-2">
                  {pests.map((d, index) => (
                    <div
                      key={index}
                      className="p-2.5 w-fit bg-gray-100 rounded-lg mt-2"
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="p-2 w-1/10 cursor-pointer bg-gray-100"
            onClick={handleAddCrop(cropTypeIndex)}
          >
            Add more crop of this type
          </button>
        </div>
      ))}

      <button
        className="p-2 w-1/10 cursor-pointer bg-gray-100"
        onClick={handleAddCropType}
      >
        Add more type
      </button>

      <button className="p-2 w-1/10 bg-gray-100 cursor-pointer" type="submit">
        Finally add everything
      </button>
    </form>
  );
};

export default Form;

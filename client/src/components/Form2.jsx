import { useState } from "react"


const Form2 = () => {
  const[data , setData] = useState({
    State: "",
    Crops: {
      FieldCrops: [
        {
          Name: "",
          GrowingSeasons: [],
          Temperature: "",
          SoilType: "",
          Fertilizer: "",
          Pesticides: [],
          CommonPestsDiseases: []
        }
      ],
      Vegetables: [
        {
          Name: "",
          GrowingSeasons: [],
          Temperature: "",
          SoilType: "",
          Fertilizer: "",
          Pesticides: [],
          CommonPestsDiseases: []
        }
      ],
      Fruits: [
        {
          Name: "",
          GrowingSeason: [],
          Temperature: "",
          SoilType: "",
          Fertilizer: "",
          Pesticides: [],
          CommonPestsDiseases: []
        }
      ]
    }
  })

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(data.State)
  }
  return (
    <div>
      <form onSubmit={(e)=>HandleSubmit(e)}>
      <label className="font-bold">Select State</label>
        <select className="p-2.5 border-2 w-1/5 rounded-lg" onChange={(e)=>setData({...data, State: e.target.options[e.target.selectedIndex].text})}>
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
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default Form2

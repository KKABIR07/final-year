
import "./App.css";
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import StateData from "./Pages/StateData";
import IrrigationData from "./Pages/IrrigationData";
import FertilizerData from "./Pages/Fertilizerdata";
import Soiltypedata from "./Pages/Soiltypedata";
import Pest_diseases from "./Pages/Pest_diseases";
import Allcropdata from "./Pages/Allcropdata";
import 'antd/dist/reset.css';




const App = () => {
   
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/stateData/:state" element={<StateData/>}/>
      <Route path="/irrigation" element = {<IrrigationData/>}/>
      <Route path="/fertilizerdata" element = {<FertilizerData/>}/>
      <Route path="/soildata" element = {<Soiltypedata/>}/>
      <Route path="/pestdiseases" element = {<Pest_diseases/>}/>
      <Route path="/pestdiseases" element = {<Pest_diseases/>}/>
      <Route path="/allcrops" element = {<Allcropdata/>}/>
     </Routes>
      
    </>
  );
};

export default App;


import "./App.css";
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import StateData from "./Pages/StateData";
import IrrigationData from "./Pages/IrrigationData";
import FertilizerData from "./Pages/Fertilizerdata";
import 'antd/dist/reset.css';


const App = () => {
   
  return (
    <>
    

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/stateData/:state" element={<StateData/>}/>
      <Route path="/irrigation" element = {<IrrigationData/>}/>
      <Route path="/fertilizerdata" element = {<FertilizerData/>}/>
     </Routes>
      
    </>
  );
};

export default App;

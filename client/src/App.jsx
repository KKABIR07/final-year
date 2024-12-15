
import "./App.css";
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import StateData from "./Pages/StateData";
import 'antd/dist/reset.css';


const App = () => {
   
  return (
    <>
    

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/stateData/:state" element={<StateData/>}/>
     </Routes>
      
    </>
  );
};

export default App;

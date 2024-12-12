
import "./App.css";
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import StateData from "./Pages/StateData";


const App = () => {
    // useEffect(()=>{
    //   const getData = async ()=> {
    //     const Res =  await fetch('http://localhost:5000/api/auth/crops');
    //     const Data = await Res.json();
    //     console.log(Data)
    //   }
    //   getData();
    // },[])
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

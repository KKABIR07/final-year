import  { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


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
      <Home/>
      
    </>
  );
};

export default App;

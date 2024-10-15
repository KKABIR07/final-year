import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import All_Crop_dist from "./page/All_Crop_dist";
import Map from "./components/Map";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Form />
      <Map />
    </>
  );
};

export default App;

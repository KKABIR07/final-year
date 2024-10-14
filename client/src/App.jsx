import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './page/Home';
import All_Crop_dist from './page/All_Crop_dist';
import Map from './components/Map';

const App = () => {
  return (
    <>
     <Map/>
    </>
  )
}

export default App

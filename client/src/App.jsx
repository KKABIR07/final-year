import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './page/Home';
import All_Crop_dist from './page/All_Crop_dist';

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crop' element={<All_Crop_dist/>}/>
      </Routes>    
      </BrowserRouter> */}

      <All_Crop_dist/>
    </div>
  )
}

export default App

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ImageofTheday from '../pages/ImageofTheday'

const Router: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<ImageofTheday />} />
      </Routes>
    );
  };
  
  export default Router;